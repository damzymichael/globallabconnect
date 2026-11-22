# Prompt: Build the Global LabConnect HTML Prototype

You are building a **static, multi-page HTML design prototype** for my client, **Global LabConnect (GLC)**. The goal is for the client to review and react to the design direction before the real website is built. It is **not** the production site.

## 1. Read these first (they are in the project root)

1. **The design guideline file** (`glc-design-guidelines.md` or similarly named): your source of truth for palette, typography, layout, components, accessibility and what is out of scope. Follow it. Where this prompt and the guideline overlap, they agree; where this prompt adds detail (page list, project types), this prompt wins.
2. **The content file** (`glc-content.md` or similarly named): the actual client copy extracted from their PDF. Use it **verbatim** wherever it fits. Do not rewrite it.
3. **The logo file** (`glc_logo.jpg` or similar): use it as supplied or cropped. Note the JPG has a thin black frame baked in; crop it out (e.g. with CSS `object-fit`/`object-position` or a cropped copy saved in `assets/img/`). Use the logo only on white or very light backgrounds.
4. **The installed UI/UX skill:** read and apply it for layout, hierarchy, spacing, accessibility and polish before you write any code.

Do **not** copy the reference site (aslm.org) in any way. The guideline explains what to take as inspiration only.

## 2. Technical rules

- **Plain static HTML, CSS and a little vanilla JavaScript.** No frameworks, no build step, no package installs, no CDN dependencies except optionally Google Fonts (with system-font fallbacks). It must open by double-clicking `index.html`.
- Suggested structure:
  ```
  index.html
  about.html
  services.html
  projects.html
  project-single.html
  blogs.html
  blog-single.html
  contact.html
  assets/css/styles.css        (one shared stylesheet with CSS variables for the palette)
  assets/js/main.js            (mobile menu, filters, expand/collapse only)
  assets/img/                  (logo and any placeholders)
  ```
- The header, footer and navigation must be **identical across all pages** (copy the markup into each file; no includes). Mark the current page in the nav with `aria-current="page"`.
- All links between pages must work using relative paths. Cards on listing pages link to the single pages.
- Responsive and mobile-first, per the guideline's breakpoints. Check each page at roughly 360px, 768px and 1280px widths.
- Semantic HTML, visible keyboard focus, skip link, one `h1` per page, alt text, contrast per the guideline. Respect `prefers-reduced-motion`.
- Add a small, unobtrusive **"Design prototype"** tag in the header or footer so no one mistakes this for the live site.
- Forms (contact, newsletter if used) are **non-functional**: prevent submission and show a simple "Prototype only" message.

## 3. Placeholder rule (important)

- Wherever real content exists in the content file, **use it exactly**.
- Wherever content is **not** available (blog posts, projects, testimonials, team members other than the CEO, address, email, statistics, dates, etc.), use clearly marked placeholder data **wrapped in square brackets**, for example `[Project title goes here]`, `[Client name]`, `[12 March 2026]`, `[Placeholder paragraph: short summary of the project…]`, `[Image placeholder]`.
- Every placeholder must be visibly bracketed on screen, including in image boxes, dates, names, numbers and button labels where they stand in for real data. Do not make up realistic-looking facts, figures, organisation names, partner logos or quotes.
- Placeholder images: use neutral tinted blocks labelled `[Image placeholder]`, not stock photos. The two PDF photos (lab professional, CEO portrait) have unconfirmed usage rights, so do not use them; reserve a labelled placeholder where a photo would go.
- Keep placeholders believable in **length and structure** so the layouts are tested realistically (e.g. a 3-line card summary, a 5-paragraph article body).

## 4. Pages to build

For each page, use the real content listed, plus bracketed placeholders for the rest.

### 4.1 Home (`index.html`)
- Hero: brand line "Connecting Laboratories. Empowering Professionals. Advancing Global Health." plus the vision/mission text. Primary and secondary buttons (e.g. to Services and Contact).
- About intro: "Strengthening Laboratories. Transforming Healthcare." and the About paragraphs.
- **Ten core pillars** as numbered cards (titles and one-liners from the content file).
- Why choose GLC, plus the value-proposition checklist.
- **Featured projects teaser:** 3 cards using the project card design from §5 (placeholder data), with a mix of both project types.
- **Latest blog posts teaser:** 3 cards (placeholder data).
- "Partner with us" closing band with the real text and the phone numbers from the content file.
- Do **not** add statistics, partner logos or events: no real content exists.

### 4.2 About Us (`about.html`)
- About text, Vision, Mission (real).
- **Leadership section:** the CEO profile (name, titles, role, quote and biography, real). Use a pull-quote treatment and a "Read full profile" expand/collapse for the long bio.
- Value proposition / why choose (real).
- Optional bracketed placeholder block for `[Team members]` or `[Our journey]`. Keep it clearly placeholder.

### 4.3 Services (`services.html`)
- All **ten solutions** with their taglines and bullet lists (real). Present them as an overview grid or list of expandable cards, with anchor links so each can be reached directly. Show the pillar number on each.
- A "Partner with us" call to action.

### 4.4 Projects (`projects.html`)
- Listing page with **filter tabs** and a card grid. See §5 for how the two project types are shown. Include 6 to 8 placeholder projects with a mix of both types.
- Each card links to `project-single.html`.

### 4.5 Single project (`project-single.html`)
- A template page that adapts to the project type. Because the client has not decided whether the real site will have per-project pages, build it as a **prototype of the idea** and add a small bracketed note at the top such as `[Prototype note: detail pages are optional and subject to client decision]`.
- Show it as the **Contracted** example by default. A small prototype-only toggle (e.g. a "View as: Contracted / Managed" switch controlled with vanilla JS, clearly labelled as a prototype control) swaps the fields to the Managed variant, so the client can review both from one file. See §5.

### 4.6 Blogs (`blogs.html`)
- Listing page: featured post at top, then a card grid, with `[Category]` filter chips and a `[Search]` field (non-functional). Include 6 to 9 placeholder posts. Categories can reuse the **real pillar names** (e.g. Quality Management Systems, Biosafety & Biosecurity) as placeholder topics, since these are genuine subject areas. Post titles, dates and excerpts are bracketed placeholders.
- A simple placeholder pagination.

### 4.7 Single blog (`blog-single.html`)
- Reading-focused article template: title, `[date]`, `[author]`, `[category]`, `[reading time]`, hero image placeholder, comfortable body width (60 to 75 characters), subheadings, a pull quote, a bulleted list, a share row and "related posts" cards. All text is bracketed placeholder.

### 4.8 Contact Us (`contact.html`)
- Real: phone/WhatsApp numbers (+234- 912-905-4546, +234- 803-242-4965), website, RC number and the "Partner with us" message from the content file. The content file explains that the website address in the PDF may belong to a related brand, so show it only as supplied and add a small `[Confirm website and contact details with client]` note.
- Non-functional form with bracketed illustrative fields (name, email, organisation, "I am a…", message). Placeholder `[Email address]` and `[Office address]`. A `[Map placeholder]` block is fine.

## 5. Projects: displaying the two project types

The client has two kinds of project:

1. **Contracted:** projects that were contracted to him.
2. **Managed (not contracted):** projects that were not contracted to him but that he managed.

These names are working labels. Add a bracketed note on the Projects page: `[Terminology to be confirmed with client]`.

**Design approach (implement this):**

- **One shared card and page template, two clearly labelled variants.** Do not create two separate sections of the site. Both types are projects, so they live in one list that can be filtered.
- **Type badge on every card and on the detail page.** The badge must use an **icon plus a text label** ("Contracted" or "Managed"), never colour alone, because the brand palette is red and green and these are hard to distinguish for some users. Suggested treatment: Contracted = solid green-tint badge with a handshake/document icon; Managed = outlined badge with a compass/people icon. Use simple inline SVG icons.
- **Filter tabs above the grid:** `All`, `Contracted`, `Managed` (tabs with counts like `[8]`), working via vanilla JS. Optional second filter by pillar/service area using the real pillar names. Keep the filter keyboard accessible, with `aria-pressed` or tab roles.
- **Type-specific meta line on cards** so the difference is understandable at a glance:
  - Contracted: `[Client / commissioning organisation]` and `[Contract period]`.
  - Managed: `[Initiated by / Funder]` and `[Management period]`.
  - Shared: `[Location]`, pillar/service tag, `[Year]`, and a status chip like `[Completed]`.
- **Single project page, adaptive "Engagement" panel** (a sidebar or summary block):
  - Contracted variant fields: Engagement type = Contracted; Client; Scope of work; Contract period; Deliverables.
  - Managed variant fields: Engagement type = Managed; Initiated by / Funder; Role (e.g. `[Project management / coordination]`); Management period; Partners involved; Outcomes.
  - A short, neutral explainer under the badge, in brackets as placeholder, e.g. `[One-line explanation of what "Contracted" means for this project]`, so visitors understand the distinction.
- Shared sections on the single page: breadcrumb back to Projects, title, summary, hero image placeholder, key facts panel, "Challenge / Approach / Outcome" sections, related solution (link to the matching pillar on the Services page), gallery placeholders, and "Previous / Next project" links. All placeholders are bracketed.
- Do not claim or imply anything (results, clients, certifications) that the client has not supplied.

## 6. Visual and quality expectations

- Follow the palette from the guideline: sampled logo red `#970404` and green `#059935`, plus the derived accessible tones (e.g. `#0B7A2E` for buttons and links, tints, neutrals). Put the colours into CSS variables. Do not use the blue/teal/purple/orange from the PDF illustrations or the blue "EC-Lab" style.
- Light, airy and institutional. Consistent radius, spacing and card styles across all pages. Typography as suggested in the guideline.
- The nav is small: Home, About, Services, Projects, Blogs, Contact, plus a "Partner with us" button.
- The footer uses only real data (logo, brand line, phone numbers, website as supplied, RC number) plus bracketed placeholders for anything else. No invented social links.
- Include a short comment at the top of `styles.css` listing the design tokens, so the client's developer can find them.

## 7. Out of scope

Working forms, search, CMS logic, language switching, login, real maps, SEO, analytics, performance tuning, and any content invention.

## 8. When done

Give me a brief summary that lists: the files created, which content was real and which was placeholder, any assumptions you made, any content you needed but did not find, and anything in the guideline you could not follow and why. Do not repeat the code in your reply.
