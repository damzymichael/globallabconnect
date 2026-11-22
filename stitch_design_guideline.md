Global LabConnect (GLC) — Design System Specification
1. Palette & Functional Roles
Derived directly from the official GLC logo mark and neutral foundations:

Primary Brand (#8B0000 / Deep Crimson):
Role: Focal point actions (primary CTAs, key accent badges, highlight text, active indicators).
Hover: #700000.
Secondary Brand (#008A27 / Forest Green):
Role: Secondary CTAs, confirmation badges, success accents, alternating icon highlights.
Hover: #006E1F.
Light Surface Tint (#F4F8F5 / Soft Sage Mist):
Role: Alternating section backgrounds, subtle card containers, balanced section rhythm.
Pure Light Surface (#FFFFFF / White):
Role: Default clean section background, elevated card surfaces.
Dark Surface Anchor (#131B16 / Deep Charcoal Forest):
Role: Dark hero banners, CTA anchor bands, inner-page page header blocks.
Footer Base (#0D1310 / Obsidian Forest):
Role: Persistent global footer and sub-footer copyright strip.
Typography & Text Colors:
Headings & Body Primary: #1A1D1A (Off-black, AAA contrast on light surfaces).
Secondary / Muted Text: #556058 (Captions, subtitles, metadata, supporting copy).
Inverse Text: #FFFFFF (on Dark Anchor, Hero, and Primary buttons) & #E5E7EB (supporting copy on dark bands).
2. Typography Scale
Font Family: Manrope, sans-serif (clean, authoritative, modern biomedical feel).
Display / Hero H1: text-4xl md:text-5xl lg:text-6xl, font-extrabold, tracking-tight, line-height 1.15.
Inner-Page Header H1: text-3xl md:text-4xl lg:text-5xl, font-bold, tracking-tight.
Section Heading H2: text-2xl md:text-3xl lg:text-4xl, font-bold, tracking-tight, color #1A1D1A.
Sub-Heading / Group H3: text-lg md:text-xl lg:text-2xl, font-semibold.
Card Titles / Feature Names: text-base md:text-lg, font-bold.
Eyebrow / Category Badges: text-xs uppercase tracking-widest font-semibold.
Body (Regular): text-base (16px), leading-relaxed, color #556058 on light, #E5E7EB on dark.
Small / Metadata: text-sm (14px), leading-normal.
3. Section Background Rhythm Rules
Inviolable Rule: No two vertically adjacent sections may share the same background tone.

Cycle:
Dark Anchor (#131B16) — Hero or Inner-Page Header.
Clean White (#FFFFFF) — Feature / primary content.
Light Tint (#F4F8F5) — Supporting cards, quotes, or secondary breakdowns.
Clean White (#FFFFFF) — Detailed lists, data grids, or steps.
Dark Anchor with Image Overlay (#0D1310 / #161F19) — Partner With Us CTA band.
Obsidian Footer (#0D1310) — Global footer.
4. Navigation & Header Structure
Height: h-20 (80px), sticky/persistent top bar on #FFFFFF with subtle border-bottom border-black/5 or shadow-sm.
Layout (3-Zone Flex):
Left: GLC logo image (glc_logo.png, h-10 to h-12), wordmark included inside graphic.
Center: Nav links (Home, About, Services, Projects, Blog, Contact) in text-sm font-semibold text-[#1A1D1A], hover #8B0000.
Services Dropdown: Flyout 2-column menu on hover with icons and solution categories.
Right: Single primary pill button: Partner With Us in #8B0000. No user profile icon.
5. Inner-Page Header Style (For all subsequent pages)
Visual Family: Shares the dark tone and photography style of the homepage Hero, but condensed in height.
Height: py-16 md:py-20 lg:py-24 (compact compared to the homepage's full viewport hero).
Background: Deep Forest Charcoal (#131B16) with a subtle gradient and atmospheric laboratory photography layer (with 80% opacity dark overlay).
Structure:
Breadcrumb trace: Home › [Current Page] in text-xs text-white/70 tracking-wide uppercase.
Page Title (H1): Bold, white, concise (text-3xl md:text-5xl).
Subtitle / Lead Paragraph: Max-w-2xl, text-base md:text-lg text-white/80 leading-relaxed.
6. Component Styles
Buttons
Shape: Full pill radius (rounded-full), font-semibold text-sm md:text-base px-6 py-3 transition duration-200.
Primary Button: Solid #8B0000, text white, hover bg-[#700000], subtle elevation shadow.
Secondary Button: Solid #008A27, text white, hover bg-[#006E1F].
Ghost / Outline on Dark: Border border-white/30 text-white hover:bg-white/10.
Secondary on Light: Border border-[#556058]/30 text-[#1A1D1A] hover:bg-black/5.
Cards
Corner Radius: rounded-2xl (16px) for feature cards; rounded-xl (12px) for nested items.
Background: White (#FFFFFF) with border border-[#556058]/10 or soft shadow (shadow-sm hover:shadow-md transition-shadow).
Padding: p-6 to p-8 for standard cards; p-4 to p-6 for compact cards.
Icon Badges & Numbered Markers
Icon Badges: Circular (w-12 h-12 rounded-full), flex-centered. Alternating soft tints:
Crimson Tint: bg-[#8B0000]/10 text-[#8B0000]
Green Tint: bg-[#008A27]/10 text-[#008A27]
Numbered Markers (Pillars / Steps): Circular w-10 h-10 rounded-full font-bold text-sm:
bg-red-50 text-[#8B0000] / bg-emerald-50 text-[#008A27]
7. The CTA Band Pattern ("Partner With Us")
Placement: Immediately precedes the global footer on all pages.
Background: High-impact dark backdrop (#0D1310 to #161F19) with full-bleed photographic background (object-cover) shielded by an 80–85% dark color overlay gradient.
Elements:
Eyebrow pill tag in crimson/white (text-xs uppercase tracking-wider).
Bold centered H2 (text-3xl md:text-4xl text-white font-bold).
Centered descriptive body paragraph (max-w-3xl, text-white/80).
Dual pill action buttons: Primary Partner With Us (#8B0000) and Secondary Speak to a Specialist (ghost or green).
8. Footer Structure
Background: Obsidian (#0D1310), text white/dimmed gray (#9CA3AF).
Padding: pt-16 pb-8 px-6 lg:px-12.
Columns (4-Column Layout):
Brand & Mission: Logo lockup, concise GLC bio, registration RC number, tagline "All Your Tests In One Place".
Quick Links: Navigation anchors.
Core Focus: Primary solution categories.
Contact Details: Phone / WhatsApp numbers (+234-912-905-4546, +234-803-242-4965), emails, website link.
Sub-footer Bar: Separator line (border-white/10), copyright notice, Privacy Policy, Terms of Service.