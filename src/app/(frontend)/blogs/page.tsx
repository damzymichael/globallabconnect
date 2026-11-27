import React from 'react'

export default function BlogsPage() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
  <div className="flex flex-col w-full">
    {/* 1. Inner-Page Header (Compact Hero) - Dark Anchor Tone (#131B16) */}
    <section className="relative bg-inverse-surface text-on-secondary overflow-hidden py-16 lg:py-24">
      {/* Atmospheric Visual Underlay */}
      <div className="absolute inset-0 opacity-25 mix-blend-luminosity bg-cover bg-center" data-alt="High-precision biomedical laboratory environment showing scientific investigators in protective eyewear operating microscopes and micropipettes under cool analytical lighting, deep contrast cinematic global health research scene" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLPR2KkhQJ4If6pwmkJkJfKATGjRq2Ntw_gVeYOGTND2w9sIhICqEhFOYrl2FpQ-txHG3mlxpsvHXWXbyi8KxS2F4sO8MMQrbU1DcmiKyxozPSmT3yR3YLhRKTgmZUgGJpOoV8NUu_dneT0xYJQLjq8WieGdDXKKO6OdcGu7hdwHLNjwirHQ5uVq6dK_AcIK5yJHLUt8ygNPEnmXSG990_-DgfVnMHkCFeRm1G8FU')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-inverse-surface/75"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-inverse-on-surface/70">
          <a className="hover:text-inverse-on-surface transition-colors" data-path="home" href="#">Home</a>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-inverse-on-surface font-semibold">Blog &amp; Insights</span>
          </nav>
        {/* Page Title & Leading Deck */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-headline-lg text-headline-lg text-inverse-on-surface font-bold tracking-tight">
                Insights &amp; Technical Perspectives
              </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface/85 leading-relaxed">
                Evidence-based perspectives, technical guidelines, diagnostic advisories, and field
                notes from Global LabConnect's specialists and global health partners.
              </p>
          </div>
        {/* Quick Topic Tags */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 text-inverse-on-surface text-label-sm font-label-sm backdrop-blur-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">article</span>
                [Peer-Reviewed Perspectives]
              </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 text-inverse-on-surface text-label-sm font-label-sm backdrop-blur-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">biotech</span>
                [Field Case Studies]
              </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 text-inverse-on-surface text-label-sm font-label-sm backdrop-blur-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">verified_user</span>
                [Biosafety &amp; QMS Advisories]
              </span>
          </div>
        </div>
      </section>
    {/* 2. Category Filter & Search Bar - Clean White (#FFFFFF) */}
    <section className="bg-surface-container-lowest py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <button className="filter-btn active shrink-0 px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-sm" type="button">
                All Articles
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Laboratory Capacity &amp; Workforce]
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Quality Management &amp; ISO 15189]
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Outbreak Response &amp; AMR]
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Diagnostic Tech Transfer]
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Biosafety &amp; Biosecurity]
              </button>
          <button className="filter-btn shrink-0 px-5 py-2.5 rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg" type="button">
                [Clinical Research &amp; Biobanking]
              </button>
          </div>
        {/* Search Input */}
        <div className="relative shrink-0 w-full lg:w-80">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input className="w-full h-11 pl-11 pr-4 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all" placeholder="Search articles and publications..." type="text" />
          </div>
        </div>
      </section>
    {/* 3. Featured Article Section - Pure White Anchor (#FFFFFF) */}
    <section className="bg-surface-container-lowest pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
          <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant font-bold">Priority Lead Advisory</span>
          </div>
        {/* Asymmetrical Featured Bento Card */}
        <article className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group cursor-pointer">
          {/* Visual Column (5 Cols) */}
          <div className="relative lg:col-span-5 min-h-[300px] lg:min-h-full overflow-hidden bg-surface-container">
            <a href="/blogs/single" className="block w-full h-full">
              <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Clinical laboratory scientist in sterile protective gown and safety glasses meticulously pipetting reagent fluids into diagnostic microwell plate in a certified high-containment biosafety facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiHdHVqaYOW46luki5VpiK2XLSWM0MtxvBSlm7xOQelox1ZCbgVilFTnMvvy0gV68Mw9441t0PJPAftzuNKh3SlaGNrJmDftANy9jYMJ-tfEzl8vXlDPiIKvgG-JqZgiOS7otNceoyiYKZjWXcEyxCJlEHzK8QHi7I0t3B_VmIGGCU9UXraLJPwyo74bJetxvORZY-FX2_cN0CAEz2lvKaIdW6Jek5IKTcFxG3ac8" />
              </a>
            <div className="absolute top-5 left-5 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm">
                <span className="material-symbols-outlined text-[14px]">star</span>
                    [Featured Perspective]
                  </span>
              </div>
            </div>
          {/* Content Column (7 Cols) */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Taxonomy and Metadata Row */}
              <div className="flex flex-wrap items-center gap-3 font-label-sm text-label-sm text-on-surface-variant">
                <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">[Biosafety &amp; Molecular Diagnostics]</span>
                <span>•</span>
                <span>[November 18, 2026]</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                      [6 min read]
                    </span>
                </div>
              {/* Title */}
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                <a className="focus:outline-none" href="/blogs/single">
                      [Featured Title: Standardizing BSL-3 Molecular Diagnostic Workflows in
                      High-Containment Facilities]
                    </a>
                </h2>
              {/* Excerpt */}
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    [Comprehensive advisory detailing technical protocols, containment integrity
                    verifications, and procedural safeguards required when scaling secondary
                    infectious disease surveillance under strict international biosafety standards.]
                  </p>
              </div>
            {/* Author and CTA Footer */}
            <div className="pt-8 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-semibold">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                  </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface font-semibold">
                        [Dr. Specialist Name, Consultant Pathologist]
                      </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                        [Institutional Advisory Team]
                      </p>
                  </div>
                </div>
              <a className="inline-flex items-center gap-1.5 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors whitespace-nowrap hover:underline underline-offset-4 self-start sm:self-auto" href="/blogs/single">
                <span>Read Full Article</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    {/* 4. Grid of Article Cards - Soft Sage Mist Tone (#F4F8F5 / surface-container-low) */}
    <section className="bg-surface-container py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold block mb-1">Archive Index</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Recent Publications &amp; Field Notes
                </h2>
            </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Explore technical bulletins, operational assessments, and laboratory governance
                resources prepared by regional technical leads.
              </p>
          </div>
        {/* 3-Column Bento Grid of 6 Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Laboratory technician inspecting ISO compliance test documentation and digital calibration equipment inside a clean analytical biochemistry lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQvIx0nW28k9Ygstr9QWQ54eUgrQt29QT3qIt6JLneTZqWTxhjqVDTZBVIxXZB4a2np2Sv1Mq0_3JcYumHH2l3Qt1mzRwXSWb76pw7mBjGsc2D2M-6WR0uHbKKAHGfpVGnf9P7SGL0m7fwLxRZr3dB1sojMmmxbMisK9RhYxSCoWHD8Yj-DbLx_6mka25iAfi8UwnEE5mmD3k1E7WBcsTEMeCVWbDlHMvtG_upMMw" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-semibold pointer-events-none">
                    [Quality Systems]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[November 12, 2026]</span>
                  <span>•</span>
                  <span>[5 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Implementing ISO 15189 Quality Management Benchmarks in
                        Resource-Limited Settings]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [A structured roadmap outlining phase-wise audit preparation, internal
                      calibration controls, and workforce credentialing required to meet ISO 15189
                      operational standards.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: Clinical Pathologist]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          {/* Card 2 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Microbiology laboratory scientist setting up automated antimicrobial susceptibility testing trays in clinical bacteriology unit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAKhDlkH3TKcSB-T8R1DW7UP65Mb1u05dT3yUrKzU_aVanPsdvL-53g8WGoSm2pMz5tZiXI8NMmd29FS1RvkHlDCrP7UcTuR98d3uEPxOq69SBcFAn8Q0jDL0JmKF-hhJtLyprTtADoCdFOA_w8rcHaw3417MOhwng9ThgRC_x3wPoFb21f1Y9kto0sU5Nn_IImIrAMa8zPr6MRW9hx-zKEjf6DuFOD2fIYG1U3Yo" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-sm text-label-sm font-semibold pointer-events-none">
                    [AMR Surveillance]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[November 04, 2026]</span>
                  <span>•</span>
                  <span>[7 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Decentralized Antimicrobial Resistance Surveillance Across
                        Sub-National Networks]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [Field methodology for aggregating phenotypic susceptibility data to combat
                      multi-drug resistant pathogen outbreaks in secondary referral hospitals.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: AMR Epidemiologist]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          {/* Card 3 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Laboratory training workshop with participants examining pipetting calibration metrics on interactive digital monitors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Lyb5XBxB2myNkBLqhTWLm3a4h55sJAWSqCD9rvzwna_oN7hulXF67r95iGZUe5uSjuR1X1wbFzjDJaQDJZbL6QuoctaESuzvbO_3fIJfhk32mgkvsk3q13Uywta-7PQuUilZqE8b5c0YAG-nkmZl0I7CkKOvUsE2tFnD7vNVP-aRqwdfz4Y0N3foco7HH2Q-GjPFHedZB5xUkvMyVh3B2uVKxUPLQHw4rW1RV5Q" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-semibold pointer-events-none">
                    [Workforce Training]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[October 28, 2026]</span>
                  <span>•</span>
                  <span>[4 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Continuous Competency Frameworks for Molecular Diagnostic
                        Technicians]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [Evaluating standardized modular curriculums and blind proficiency testing
                      programs designed to upskill local medical laboratory staff.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: Capacity Lead]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          {/* Card 4 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Advanced molecular diagnostic analyzer hardware being calibrated by biomedical engineers in a newly equipped facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx57YeZV67dgK2JiyTCN83ffgv4V-7mSaLGBx64_K2xlo9edKW0sOZm5yYV6QiR2rF37g3b5UzKJKhRJyfTyED8KhKkGlC9js09Ihze8FE5vd81dwAUjjzFtUeYykpnSWN8-Znp6EIM_npHdu3C242NyoqXE4oy2_a-K84Zcx3yxsEAznBH968H4JhjmtD8T9dMwk4biL6QDC67M--oIdJ5NQsbq8xswK3QKYOUwU" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-semibold pointer-events-none">
                    [Technology Transfer]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[October 19, 2026]</span>
                  <span>•</span>
                  <span>[6 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Mitigating Supply Chain Vulnerabilities in Cold-Chain
                        Reagent Logistics]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [Strategic evaluation of thermal monitoring telematics and localized
                      lyophilized reagents to ensure continuous diagnostic operation in remote
                      hubs.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: Systems Director]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          {/* Card 5 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Automated liquid handling robotics dispensing biospecimens into microplates for high-throughput diagnostic assay scale-up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQEUr4QFzKFBc1wMDWCrrclJ1SlM475JbURc4kVje_P_7zxiM8h8pxgHeXQTI7eIcZifttkoN-BoCvz6AcDrkb8hrJjJ-UVxCTTHkhGnY-toqmzw0I_PSHRtO_--UaRjvBlHtjnH7kmwJ26ttBo5dmDBmK9ITLgz1tX7hhTPG8OtWIXKNlfpu5-G36k08_HWro6MrBw--i9FUvcHlRZo5FXRVts06ud7HrP0-FjH8" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-sm text-label-sm font-semibold pointer-events-none">
                    [Diagnostic Scale-Up]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[October 08, 2026]</span>
                  <span>•</span>
                  <span>[5 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Multiplex PCR Integration for Febrile Illness Differential
                        Diagnosis]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [Validation findings on single-run syndromic panels detecting malaria,
                      arboviruses, and bacterial sepsis in high-volume district medical clinics.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: Research Scientist]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          {/* Card 6 */}
          <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-surface-container-high">
              <a href="/blogs/single" className="block w-full h-full">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Ultra-low temperature cryogenic storage facility with barcode tracking scanners for infectious disease biobanking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYWPJ5y-VkwmgEdxt5F4-9wg7z0UNHszINfBvMR_KxikAeyoZR9_KlsFNFjU6H81p7E7h0XpjRWC7XO8w1uT_15JHbbyy7s0877stXgmBBB3BBoR4yRXyQ0pG6w3ZcmQKwSIaXM6rAaQnqNahV_YUGgp-fs9ApQcpRhPQNmXOfOeCr3OhznUNHlvIgmlleggXErGmWRKWcahw8F65EF_btSPbc9Hl0LpGEi3M6P40" />
                </a>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm font-semibold pointer-events-none">
                    [Biorepository]
                  </span>
              </div>
            <div className="p-6 lg:p-7 flex flex-col flex-grow justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
                  <span>[September 27, 2026]</span>
                  <span>•</span>
                  <span>[8 min read]</span>
                  </div>
                <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                  <a href="/blogs/single">[Article Title: Ethical Governance Frameworks for Regional Pathogen
                        Biorepositories]</a>
                  </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                      [Establishing material transfer agreements, sovereignty protections, and
                      access equity protocols for multinational longitudinal disease registries.]
                    </p>
                </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-body-sm text-body-sm text-on-surface-variant">[Author: Bioethics Advisor]</span>
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container hover:text-primary font-semibold transition-colors" href="/blogs/single">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        {/* 5. Centered Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="font-body-sm text-body-sm text-on-surface-variant order-2 sm:order-1">
                Showing <span className="font-semibold text-on-surface">1–7</span> of
                <span className="font-semibold text-on-surface">24</span> articles
              </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {/* Previous Button */}
            <button className="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant/40 font-label-lg text-label-lg cursor-not-allowed" disabled type="button">
                  Previous
                </button>
            {/* Number Buttons */}
            <button className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center shadow-sm" type="button">
                  1
                </button>
            <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg font-semibold flex items-center justify-center" type="button">
                  2
                </button>
            <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg font-semibold flex items-center justify-center" type="button">
                  3
                </button>
            <span className="w-10 h-10 flex items-center justify-center font-label-lg text-label-lg text-on-surface-variant font-bold">...</span>
            <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg font-semibold flex items-center justify-center" type="button">
                  8
                </button>
            {/* Next Button */}
            <button className="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg font-semibold shadow-sm" type="button">
                  Next
                </button>
            </div>
          </div>
        </div>
      </section>
    {/* Pre-Footer CTA Band: Partner With Us */}
    <section className="relative w-full py-20 lg:py-28 bg-inverse-surface overflow-hidden" id="partner-cta">
      {/* Atmospheric Laboratory Image with 85% Overlay */}
      <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15" data-alt="A modern bioanalytical laboratory at twilight with automated robotic analyzers, microplates, and scientists conducting diagnostic tests with glowing LED indicators in deep forest charcoal and clinical emerald green." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxlqowgv4OfU-AooNq1oXcC5N0dAcALOsVyIZDlWaiCvT07YU65URwP0zexlv1x93i7yIYsI1lOMO95CI0VFOCSdHdPdiZ-4Arf9sRzWJOnEpej75zyZX2rRr0noWXqjVwYZ2zJD0Tr5UF9m0ypcBOE-woO5Nc13iEpD3V9gzplh6-SCyfsEKG3eGSb0-WW-Lr7adapRN4oOYI9PXmQG31Is24tcda_Zbc6F6SJZc')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/90 to-inverse-surface/85"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold mb-4 inline-block">
              Collaborative Healthcare Innovation
            </span>
        <h2 className="font-headline-lg text-headline-lg text-white mb-6">Partner With Us</h2>
        <p className="font-body-lg text-body-lg text-inverse-on-surface/90 mb-10 leading-relaxed">
              Every accurate diagnosis begins with a strong laboratory. Every resilient health
              system depends on a competent laboratory workforce. Every successful research
              programme requires quality laboratory services. Together, we can strengthen
              diagnostics, accelerate research, improve patient care, and build healthier, safer
              communities worldwide.
            </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg" href="/contact">
                Partner With Us
              </a>
          <a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10 font-label-lg text-label-lg px-8 py-3.5 transition-all" href="/contact">
                Speak to a Specialist
              </a>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}
