# Global LabConnect — Design Guidelines for the Prototype Agent (Deliverable A)

**Read this first:** You are building a **visual design prototype** so the client can review and refine a design direction. It is **not** the production website. Do not build CMS logic, real forms, auth, search, multi-language, or a full sitemap. Use only the supplied content (`glc-content.md`) and the logo. Do not invent copy, statistics, names, news, events, or partner logos.

Labels used below: **[Verified]** = seen in supplied materials or fetched page · **[Recommendation]** = my design advice · **[Unknown]** = could not be confirmed · **[Open question]** = needs client answer.

---

## 1. Project summary

- **Client:** Global LabConnect (GLC). **[Verified]**
- **What they are (client's words):** an independent, non-governmental organization that strengthens laboratory systems through collaboration, innovation, capacity building and strategic partnerships. **[Verified]**
- **Audience named in the copy:** hospitals, public and private laboratories, research organizations, governments, development partners. **[Verified]** Individual lab professionals are also implied by the training offer. **[Recommendation to confirm]**
- **Brand line:** "Connecting Laboratories. Empowering Professionals. Advancing Global Health." **[Verified]**
- **Prototype goal:** show how GLC can look credible, institutional and approachable to partners and funders, and make ten solution areas easy to scan. **[Recommendation]**
- **Desired feel:** trustworthy, scientific, clean, global but not corporate-cold. Light, airy surfaces with confident red/green brand accents. **[Recommendation]**

---

## 2. Reference site findings (aslm.org)

> **Do not copy ASLM.** Use it only to learn patterns. Do not reuse its logo, colours, copy, imagery, layout composition, section names, or structure one-to-one. GLC must feel like its own brand.

**Access limits [Unknown]:** I could read the homepage's text and structure only. I **could not** view a rendered page, so I cannot confirm ASLM's colours, fonts, spacing, grid, image treatment, animation, or responsive behaviour. Do not assume any of these. No inner pages were reviewed.

**Observed from the page structure [Verified]:**
- Two-tier navigation: a small utility row (a few quick links, language switcher, login) above a main row with several top-level items. Each top-level item opens a large dropdown panel that groups links under sub-headings and adds "featured highlights."
- Hero area: slider-style hero with a single mission statement and a "watch" style call to action.
- A short "work in action" news teaser with date, location and a "Read more" link.
- Areas of expertise shown as **numbered cards (01–05)**, each with an image and a title.
- A "footprint" block with **large headline statistics** and a one-line label under each.
- Featured highlights, an events list with date blocks, a row of member logos, then a multi-column footer with offices, social links and a trust badge.
- Built on WordPress with page-builder plugins (per page metadata), which is irrelevant to this prototype.

**Patterns worth adapting [Recommendation]:**
- Numbered cards are an excellent fit for GLC's ten pillars (the PDF already numbers them).
- A strong one-sentence mission statement in the hero.
- Grouped dropdown navigation is useful only if GLC grows. For the prototype, keep navigation light (see §5).
- Stat blocks: **do not build them** unless the client supplies real figures. The PDF contains none.
- Events, news, member logos: **omit**. No supplied content.

---

## 3. Brand and visual system

### 3.1 Logo [Verified from image]
- Mark: a globe inside an "eye", cupped by two hands (left red, right green), framed by broken circular arcs. Wordmark: bold condensed sans, **"Global"** in red and **"LabConnect"** in green, with oversized "L" and "C".
- The supplied JPG has a **thin black rectangular border baked in** and a white background. Crop it out. Do not place the JPG on a coloured background; use it on white or very light surfaces. **[Open question]** request a transparent PNG/SVG.
- The PDF also shows a version with the tagline "Access To Global Laboratory Innovation & Diagnostic" under the wordmark.

### 3.2 Palette (logo is source of truth)

Sampled from the logo JPG with a script (median of pixels in each region). Treat as close approximations, not official brand values. **[Open question]** ask for brand HEX/Pantone.

| Role | HEX | Source | Notes |
|---|---|---|---|
| Brand red / secondary | `#970404` | sampled | Contrast on white ≈ 8.9:1, passes AA for all text |
| Brand green / primary accent | `#059935` | sampled | Contrast on white ≈ 3.7:1: **fails AA for body text**; OK for large graphics and decorative shapes only |
| Globe black | `#040404` | sampled | Use for logo only |

Derived tones **[Recommendation]**, check with a contrast tool before final use:

| Role | HEX | Use |
|---|---|---|
| Green, text/button-safe | `#0B7A2E` | Primary buttons (white text ≈ 5.5:1), links, green headings |
| Green, tint | `#E8F5EC` | Section backgrounds, card hover |
| Red, tint | `#FBEDED` | Subtle highlight panels |
| Text | `#1B1F1D` | Body and headings |
| Muted text | `#4A524E` | Secondary text (keep ≥ 4.5:1 on white) |
| Surface | `#FFFFFF` | Main background |
| Surface alt | `#F5F8F6` | Alternating bands |
| Border | `#D8E0DB` | Dividers, card outlines |

**Role assignment [Recommendation]:**
- **Green = primary action and "go"** (buttons, links, active states). **Red = emphasis and identity** (key headings, thin accent rules, pillar numbers, footer accent). Do not use red for error styling on top of its brand use without adding an icon and text.
- Red and green are hard to tell apart for people with red-green colour blindness. Never use the two colours alone to carry meaning. Pair with labels, icons or position.
- Keep the layout predominantly white/neutral so the two brand colours stay distinctive.

**Do not import other colours from the PDF [Verified observation]:**
- PDF page 2's pillar icons use blue, teal, purple, orange, gold and red. These come from the illustrations, not the logo.
- PDF page 3 uses a deep blue "EC-Lab" look with a different logo. This looks like a separate (parent or sister) identity. See open questions.
- If the pillar icons are reused, either recolour them into the red/green/neutral system or ask for new ones. **Do not** build the site palette from them.

### 3.3 Typography [Recommendation]
- Headings: a condensed or semi-condensed bold sans that echoes the wordmark (e.g. Barlow Semi Condensed 600–700). Do **not** try to recreate the logo lettering.
- Body: a highly legible sans (e.g. Inter or Source Sans 3), 16–18px base, line-height 1.6.
- Scale: restrained. One display size for the hero, clear H2/H3 steps, small caps or uppercase only for short labels like "OUR SOLUTIONS."
- Use system font fallbacks. Keep line length ~60–75 characters.

### 3.4 Layout, spacing, shape
- 12-column grid, content width ~1200px, generous vertical rhythm (e.g. 8px base unit; 80–96px section spacing on desktop, 48–64px on mobile).
- Alternating white / `#F5F8F6` bands to separate sections.
- Rounded corners 8–12px, soft low-contrast shadows, 1px borders. One consistent radius.
- A subtle motif from the logo (the broken circular arc) may appear as a large, low-opacity background shape. Keep it decorative and never behind text that loses contrast.

### 3.5 Imagery
- The PDF has two photos: a lab professional at an analyser (page 1) and the CEO portrait (page 3). **Rights and provenance are unknown [Open question].**
- In the prototype, use these only if the client confirms they may be shown. Otherwise use clearly labelled neutral placeholders (flat tinted blocks with an "Image placeholder" label), not stock photos of unknown origin.
- No imagery should imply partnerships, locations, or certifications the client has not stated.

---

## 4. Prototype scope (suggested, not a fixed sitemap)

Three to four screens are enough to judge the direction. Each demonstrates something different.

1. **Home / landing page: the primary screen.** Purpose: establish identity, tone, and hierarchy.
   - Hero with logo, brand line and mission/vision statement from the copy.
   - Short "About" intro ("Strengthening Laboratories. Transforming Healthcare.").
   - **Ten-pillar grid** (numbered cards).
   - "Why choose GLC" + value-proposition checklist.
   - "Partner with us" closing band with contact details from the PDF.
   - Footer.
2. **Solution detail template** (use one pillar, e.g. Quality Management Systems, as the example; the same template would serve the rest). Purpose: show how heading, tagline, bullet lists and a call to action look on a content-rich page, and how the ten solutions share one structure.
3. **Leadership / profile page** using the CEO profile. Purpose: show long-form reading, a portrait treatment, and a pull quote. This tests how the different page-3 content sits inside the GLC style.
4. **(Optional) Contact / Partner-with-us screen.** Only if the client wants to see a form style. The PDF gives phone numbers and a website but **no email, address or form fields [Verified]**, so use a **non-functional** layout and mark any field list as illustrative.

A **component sheet** (buttons, cards, nav, links, list styling, colour swatches, type scale) can be included as an appendix page. It makes review faster.

---

## 5. Content mapping

Source: `glc-content.md`. Nothing here is new copy.

| Content | Suggested placement | Note |
|---|---|---|
| Brand line + vision/mission | Home hero and an intro band | Use exact wording |
| About paragraph | Home intro | Last sentence has a punctuation slip in the source (kept as is) |
| 10 core pillars (title + one-line) | Home pillar grid | Number badges are in the source |
| 10 solutions (tagline + bullets) | Solution detail template; could feed expandable cards on Home | Pillar and solution names mostly match; pillar 1 vs "Laboratory Capacity Development" differ |
| Why choose / value proposition | Home band | Checklist style |
| "Partner with us" | Home closing band | Strong CTA candidate |
| CEO profile + quote | Leadership page | Long text; consider a short pull quote and a "read more" toggle |
| Phone/WhatsApp, website, RC number, QR | Footer and contact band | See open questions |

**Navigation suggestion [Recommendation]:** keep it small and driven by the content that exists. For example: About, Solutions, Leadership, Contact, plus one "Partner with us" button. This is a suggestion, not a sitemap.

---

## 6. Reusable patterns

- **Header:** logo left, 4–5 links, one green CTA button. Sticky on scroll with a subtle border. Collapses to a menu button on mobile.
- **Hero:** left-aligned text, large heading, one primary and one secondary button; a right-side image or placeholder; decorative arc motif.
- **Numbered pillar card:** number badge, icon or placeholder, title, one-line description, hover/focus lift. Entire card is one link target.
- **Section header:** small red label (e.g. "OUR SOLUTIONS"), H2, optional intro line, short red or green rule.
- **Bullet list:** custom green check or dot markers; two columns on wide screens, one on mobile.
- **Callout / pull quote:** tinted panel with a thick red left border.
- **Buttons:** primary = `#0B7A2E` fill, white text; secondary = outlined red or green; minimum 44px tall.
- **Footer:** logo, tagline, contact items, RC number. Do not invent links or social icons.

### Responsive and accessibility rules
- Design mobile-first. Breakpoints around 640 / 1024px. Pillar grid: 1 column (mobile), 2 (tablet), 3–5 (desktop; 5×2 matches the PDF layout, 3-column is acceptable).
- Semantic HTML: one `h1` per page, ordered headings, `header`/`nav`/`main`/`footer`, lists for bullets, `alt` text on meaningful images and empty `alt` on decorative ones.
- Everything reachable and operable by keyboard; visible focus ring (≥3:1 contrast, 2–3px outline, never removed); skip-to-content link.
- Body text ≥ 4.5:1 contrast; large text and UI boundaries ≥ 3:1. Don't put white text on `#059935` for small text.
- Respect `prefers-reduced-motion`. Touch targets ≥ 44px.
- Don't rely on colour alone (see red/green note above).

---

## 7. Prototype interactions (only what helps review)

- Sticky header, mobile menu open/close.
- Hover and keyboard-focus states on cards, buttons and links.
- Expand/collapse of a pillar's bullet list, and "read more" on the CEO bio.
- Smooth scroll to the "Partner with us" band.
- Optional: a visible toggle to preview a darker footer variant, if the client wants options.

**Out of scope:** working forms, login, language switching, search, filters, CMS, analytics, real map or QR generation, performance work, SEO. Label the prototype clearly (e.g. a small "Design prototype" tag) so nobody mistakes it for the live site.

---

## 8. Open questions and assumptions

**Open questions for the client**
1. **Identity relationship:** The PDF footer shows www.eclaboratory.com with the tagline "All Your Tests In One Place," and page 3 carries "EC-Lab" / "Express Clinical Laboratory" branding and names the CEO as Founder & CEO of both. Is GLC a separate organization with its own domain, or an arm of EC-Lab? Which website address and contact details belong on the GLC site?
2. **Brand assets:** Transparent PNG/SVG logo without the black frame; official HEX/Pantone; any brand guide. Is the PDF's tagline version of the logo the preferred lockup?
3. **Photos:** Who owns the two photos, and may they be used? Is there a preferred imagery style (real staff and labs vs illustration)?
4. **Icons:** Should the ten pillar icons from the PDF be reused (they use a different colour set)?
5. **Missing content:** email address, physical address(es), team beyond the CEO, partners, results or statistics, news/events, any form requirements. None is in the PDF.
6. **Language/region:** English only? Primary geography? (The PDF gives Nigerian phone numbers and a Nigerian-based CEO, but states a global scope.)
7. **Legal wording:** The copy calls GLC a non-governmental organization and lists "RC 9435175." Confirm the registration line should appear on the site and how.
8. **Typos in source copy:** "Awards of Excellent" (CEO bio) and the comma splice in the About paragraph. Fix in the final site or keep? The prototype keeps them as supplied.
9. **QR code:** The destination can't be read from the PDF. Should it appear?
10. **Pillar 1 naming:** "Training & Capacity Building" vs "Laboratory Capacity Development."

**Assumptions I made [Recommendation, not confirmed]**
- Partners and funders are the primary audience and lab professionals secondary.
- A light, institutional look suits the sector.
- Home, a solution template and a leadership page are the most informative screens.
- Logo colours were sampled from a compressed JPG and may be slightly off the originals.
