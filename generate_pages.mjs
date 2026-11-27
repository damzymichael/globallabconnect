import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'

function nodeToJsx(node, depth = 0) {
  // Text node
  if (node.nodeType === 3) {
    let text = node.textContent
    if (!text.trim()) {
      return text.includes('\n') ? '\n' + '  '.repeat(depth) : text
    }
    // Escape JSX special characters in text
    text = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;')
    return text
  }

  // Comment node
  if (node.nodeType === 8) {
    const clean = node.textContent.replace(/\*/g, '').trim()
    return `{/* ${clean} */}`
  }

  // Element node
  if (node.nodeType === 1) {
    let tagName = node.tagName.toLowerCase()
    if (tagName === 'script') return ''

    // Fix the nested main in services.html
    if (tagName === 'main' && node.parentElement && node.parentElement.closest('main')) {
      tagName = 'div'
    }

    const attrs = []
    for (const attr of Array.from(node.attributes)) {
      let name = attr.name
      let val = attr.value

      // Skip event handler strings
      if (name.startsWith('on')) {
        if (name === 'onsubmit') {
          attrs.push('onSubmit={(e) => e.preventDefault()}')
        }
        continue
      }

      // Attribute renaming
      if (name === 'class') name = 'className'
      else if (name === 'for') name = 'htmlFor'
      else if (name === 'tabindex') name = 'tabIndex'
      else if (name === 'autocomplete') name = 'autoComplete'
      else if (name === 'autofocus') name = 'autoFocus'
      else if (name === 'readonly') name = 'readOnly'
      else if (name === 'maxlength') name = 'maxLength'
      else if (name === 'minlength') name = 'minLength'
      else if (name === 'crossorigin') name = 'crossOrigin'
      else if (name === 'srcset') name = 'srcSet'
      else if (name === 'fill-rule') name = 'fillRule'
      else if (name === 'clip-rule') name = 'clipRule'
      else if (name === 'clip-path') name = 'clipPath'
      else if (name === 'stroke-width') name = 'strokeWidth'
      else if (name === 'stroke-linecap') name = 'strokeLinecap'
      else if (name === 'stroke-linejoin') name = 'strokeLinejoin'
      else if (name === 'stroke-miterlimit') name = 'strokeMiterlimit'
      else if (name === 'stop-color') name = 'stopColor'
      else if (name === 'stop-opacity') name = 'stopOpacity'
      else if (name === 'xmlns:xlink') name = 'xmlnsXlink'
      else if (name === 'xlink:href') name = 'xlinkHref'

      // Links conversion
      if (name === 'href') {
        val = val
          .replace(/^index\.html$/, '/')
          .replace(/^about\.html$/, '/about')
          .replace(/^services\.html$/, '/services')
          .replace(/^projects\.html$/, '/projects')
          .replace(/^blogs\.html$/, '/blogs')
          .replace(/^blog-single\.html$/, '/blogs/single')
          .replace(/^contact\.html$/, '/contact')
          .replace(/^services\.html#/, '/services#')
          .replace(/^projects\.html#/, '/projects#')
          .replace(/^blogs\.html#/, '/blogs#')
          .replace(/^about\.html#/, '/about#')
          .replace(/^contact\.html#/, '/contact#')
      }

      // Numeric attributes in JSX
      if (['rows', 'cols', 'tabindex', 'maxlength', 'minlength', 'size'].includes(name.toLowerCase()) && /^\d+$/.test(val)) {
        if (name === 'tabindex') name = 'tabIndex'
        else if (name === 'maxlength') name = 'maxLength'
        else if (name === 'minlength') name = 'minLength'
        attrs.push(`${name}={${val}}`)
        continue
      }

      // Boolean attributes
      if (name === 'checked') {
        attrs.push('defaultChecked')
        continue
      }
      if (name === 'selected') {
        continue // handled by select defaultValue
      }
      if (name === 'disabled') {
        attrs.push('disabled')
        continue
      }
      if (name === 'required') {
        attrs.push('required')
        continue
      }

      // Style attribute
      if (name === 'style') {
        const parts = val.split(';').map(p => p.trim()).filter(Boolean)
        const obj = {}
        for (const p of parts) {
          const idx = p.indexOf(':')
          if (idx !== -1) {
            const k = p.slice(0, idx).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())
            const v = p.slice(idx + 1).trim()
            obj[k] = v
          }
        }
        attrs.push(`style={${JSON.stringify(obj)}}`)
        continue
      }

      attrs.push(`${name}="${val.replace(/"/g, '&quot;')}"`)
    }

    // Special handling for <select>
    if (tagName === 'select') {
      const selectedOption = node.querySelector('option[selected]')
      if (selectedOption) {
        const defVal = selectedOption.getAttribute('value') ?? ''
        attrs.push(`defaultValue="${defVal}"`)
      }
    }

    const attrStr = attrs.length > 0 ? ' ' + attrs.join(' ') : ''
    const voidTags = ['img', 'input', 'br', 'hr', 'source', 'area', 'base', 'col', 'embed', 'link', 'meta', 'param', 'track', 'wbr']
    if (voidTags.includes(tagName)) {
      return `<${tagName}${attrStr} />`
    }

    const childrenJsx = Array.from(node.childNodes)
      .map(child => nodeToJsx(child, depth + 1))
      .join('')

    return `<${tagName}${attrStr}>${childrenJsx}</${tagName}>`
  }

  return ''
}

const pageConfigs = [
  { file: 'index.html', out: 'src/app/(frontend)/page.tsx', name: 'HomePage' },
  { file: 'about.html', out: 'src/app/(frontend)/about/page.tsx', name: 'AboutPage' },
  { file: 'services.html', out: 'src/app/(frontend)/services/page.tsx', name: 'ServicesPage' },
  { file: 'projects.html', out: 'src/app/(frontend)/projects/page.tsx', name: 'ProjectsPage' },
  { file: 'blogs.html', out: 'src/app/(frontend)/blogs/page.tsx', name: 'BlogsPage' },
  { file: 'blog-single.html', out: 'src/app/(frontend)/blogs/single/page.tsx', name: 'BlogSinglePage' },
  { file: 'blog-single.html', out: 'src/app/(frontend)/blogs/[slug]/page.tsx', name: 'BlogSingleSlugPage' },
  { file: 'blog-single.html', out: 'src/app/(frontend)/blog-single/page.tsx', name: 'BlogSingleDirectPage' },
  { file: 'contact.html', out: 'src/app/(frontend)/contact/page.tsx', name: 'ContactPage' },
]

for (const cfg of pageConfigs) {
  const content = fs.readFileSync(path.join('prototype', cfg.file), 'utf8')
  const dom = new JSDOM(content)
  const main = dom.window.document.querySelector('main')
  if (!main) {
    console.error('No main in', cfg.file)
    continue
  }
  const mainJsx = nodeToJsx(main)
  const code = `import React from 'react'

export default function ${cfg.name}() {
  return (
    ${mainJsx}
  )
}
`
  const dir = path.dirname(cfg.out)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(cfg.out, code, 'utf8')
  console.log(`Successfully generated ${cfg.out}`)
}
