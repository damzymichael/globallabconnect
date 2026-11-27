import React from 'react'

export default function ServicesPage() {
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {/* Compact Hero Section with Dark Atmospheric Laboratory Tone */}
        <section className="relative w-full -mt-20 pt-32 pb-20 md:pb-28 bg-inverse-surface overflow-hidden">
          {/* Atmospheric Background Image with 80% Charcoal Scrim */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-25"
            data-alt="A moody, high-tech biomedical laboratory with precision automated pipetting workstations, microscopes, and scientists in protective navy lab coats focused on clinical diagnostic testing under crisp ambient illumination in deep blues and charcoal tones."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8E47aTZAj3MD1Kk3jagGXaJAkB500chQUh5NmwT-Dt-ShGZm9sxr3CEj5bwIJEAUJDOBgEoHQla18k5uF5AK-JNLq3ZDqMCZnG8VKveRn0g5d3Hx5dC8S39QNElEHDzQLuBb1hwb3OisVVnnbR-OJE209o1b5ogxQ9iVJOrbZamCYzSaRunAAKelRslAcVDpbDuCsNemelqXgH6riQ__I8Hq7QGm_UmRoyMVOLoA')",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-r from-inverse-surface via-inverse-surface/90 to-inverse-surface/80"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
              <a
                className="font-label-sm text-label-sm text-secondary-fixed hover:text-white transition-colors tracking-widest uppercase"
                href="#"
              >
                Home
              </a>
              <span className="material-symbols-outlined text-secondary-fixed text-sm">
                chevron_right
              </span>
              <span className="font-label-sm text-label-sm text-secondary-fixed font-bold tracking-widest uppercase">
                Services
              </span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="font-display-lg text-display-lg text-white mb-6">Our Solutions</h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/90 leading-relaxed">
                Comprehensive laboratory systems strengthening, capacity development, and diagnostic
                innovation tailored to healthcare institutions, research organizations, and public
                health partners.
              </p>
            </div>
            {/* Quick Metrics Ribbon */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="font-headline-sm text-headline-sm text-white">10+</div>
                <div className="font-label-sm text-label-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Core Solutions
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-white">ISO 15189</div>
                <div className="font-label-sm text-label-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Quality Standard
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-white">Global</div>
                <div className="font-label-sm text-label-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Surveillance &amp; AMR
                </div>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-secondary-fixed">24/7</div>
                <div className="font-label-sm text-label-sm text-inverse-on-surface/70 uppercase tracking-wider">
                  Outbreak Readiness
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sticky Mobile Subnav Anchor Bar */}
        <div className="lg:hidden sticky top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-highest px-4 py-3 overflow-x-auto no-scrollbar shadow-sm">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-semibold"
              href="#laboratory-capacity"
            >
              01. Capacity
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#equipment-support"
            >
              02. Equipment
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#quality-management"
            >
              03. Quality
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#diagnostic-services"
            >
              04. Diagnostics
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#biosafety-biosecurity"
            >
              05. Biosafety
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#biorepository-development"
            >
              06. Biorepository
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#clinical-trial-support"
            >
              07. Clinical Trials
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#regulatory-ethics"
            >
              08. Regulatory
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#amr-surveillance"
            >
              09. AMR
            </a>
            <a
              className="font-label-sm text-label-sm px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors"
              href="#outbreak-investigation"
            >
              10. Outbreak
            </a>
          </div>
        </div>
        {/* Main Body Content: Side Index + Detailed Alternating Solution Blocks */}
        <section className="w-full bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Sticky Sidebar Navigation (Desktop) */}
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container-high/60">
                    <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                      <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wider">
                        Solutions Index
                      </span>
                      <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-semibold">
                        10 Pillars
                      </span>
                    </div>
                    <nav
                      className="mt-4 flex flex-col space-y-1.5 text-body-sm"
                      id="solution-side-nav"
                    >
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#laboratory-capacity"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-primary font-bold font-mono text-xs">01</span>
                          <span className="group-hover:text-primary transition-colors">
                            Laboratory Capacity
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#equipment-support"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-secondary font-bold font-mono text-xs">02</span>
                          <span className="group-hover:text-secondary transition-colors">
                            Equipment &amp; Tech Transfer
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#quality-management"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-primary font-bold font-mono text-xs">03</span>
                          <span className="group-hover:text-primary transition-colors">
                            Quality Management Systems
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#diagnostic-services"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-secondary font-bold font-mono text-xs">04</span>
                          <span className="group-hover:text-secondary transition-colors">
                            Assay Scale-Up
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#biosafety-biosecurity"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-primary font-bold font-mono text-xs">05</span>
                          <span className="group-hover:text-primary transition-colors">
                            Biosafety &amp; Biosecurity
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#biorepository-development"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-secondary font-bold font-mono text-xs">06</span>
                          <span className="group-hover:text-secondary transition-colors">
                            Biorepository Development
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#clinical-trial-support"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-primary font-bold font-mono text-xs">07</span>
                          <span className="group-hover:text-primary transition-colors">
                            Clinical Trial Support
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#regulatory-ethics"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-secondary font-bold font-mono text-xs">08</span>
                          <span className="group-hover:text-secondary transition-colors">
                            Regulatory &amp; Ethics
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#amr-surveillance"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-primary font-bold font-mono text-xs">09</span>
                          <span className="group-hover:text-primary transition-colors">
                            AMR Surveillance
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                      <a
                        className="group flex items-center justify-between py-2 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-medium"
                        href="#outbreak-investigation"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-secondary font-bold font-mono text-xs">10</span>
                          <span className="group-hover:text-secondary transition-colors">
                            Outbreak Response
                          </span>
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_forward
                        </span>
                      </a>
                    </nav>
                  </div>
                  {/* Quick Contact / Technical Support CTA Widget */}
                  <div className="bg-linear-to-br from-primary to-primary-container text-on-primary rounded-xl p-6 shadow-md">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-secondary-fixed text-2xl">
                        support_agent
                      </span>
                    </div>
                    <h4 className="font-title-lg text-title-lg text-white mb-2">
                      Need custom technical support?
                    </h4>
                    <p className="font-body-sm text-body-sm text-white/80 mb-5">
                      Our lab specialists and bioengineers configure specialized deployment plans
                      for ministries, NGOs, and trial sponsors.
                    </p>
                    <a
                      className="inline-flex items-center justify-center w-full rounded-full bg-white text-primary font-label-lg text-label-lg py-2.5 px-4 hover:bg-surface-container-lowest transition-colors shadow-sm font-semibold"
                      href="#partner-cta"
                    >
                      Speak with our team
                    </a>
                  </div>
                </div>
              </aside>
              {/* Detailed Solution Blocks (10 Pillars) */}
              <div className="lg:col-span-8 flex flex-col space-y-10">
                {/* BLOCK 01: Laboratory Capacity Development */}
                <article
                  className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="laboratory-capacity"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center font-bold text-title-lg shrink-0">
                        01
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                          Pillar 01
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Laboratory Capacity Development
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-primary-container mb-6">
                    Developing a highly skilled laboratory workforce for sustainable health systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Continuous professional development programmes
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Skills enhancement for laboratory professionals
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Virtual and hybrid learning platforms
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Training-of-trainers initiatives
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Laboratory mentorship and coaching
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Fellowship attachment programmes
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60 md:col-span-2">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Leadership and management training
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 02: Equipment Support & Technology Transfer (Alternating Sage Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="equipment-support"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center font-bold text-title-lg shrink-0">
                        02
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                          Pillar 02
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Equipment Support &amp; Technology Transfer
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">precision_manufacturing</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-secondary mb-6">
                    Expanding access to modern, reliable and sustainable diagnostic technologies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container-high">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Laboratory equipment needs assessments
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Equipment sourcing and donations
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Technology transfer support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Strategic vendor partnerships
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Equipment calibration and validation
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Preventive maintenance training
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Affordable diagnostic technologies
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Laboratory infrastructure strengthening
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 03: Quality Management Systems (Alternating White Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="quality-management"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center font-bold text-title-lg shrink-0">
                        03
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                          Pillar 03
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Quality Management Systems
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-primary-container mb-6">
                    Helping laboratories achieve international quality standards and accreditation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        ISO 15189 training and implementation support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Accreditation readiness programmes
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        SOPs and quality manual development
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Internal quality audits
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Gap assessments
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        External Quality Assessment participation
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 04: Diagnostic Services & Assay Scale-Up (Alternating Sage Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="diagnostic-services"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center font-bold text-title-lg shrink-0">
                        04
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                          Pillar 04
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Diagnostic Services &amp; Assay Scale-Up
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">biotech</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-secondary mb-6">
                    Improving access to quality diagnostics for better healthcare outcomes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container-high">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Introduction of validated assays and assay validation
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Expansion of laboratory test menus
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        National diagnostic inventories
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Supply chain strengthening
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Priority disease testing support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Assay validation
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest md:col-span-2">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Improved diagnostic access
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 05: Biosafety & Biosecurity (Alternating White Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="biosafety-biosecurity"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center font-bold text-title-lg shrink-0">
                        05
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                          Pillar 05
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Biosafety &amp; Biosecurity
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">shield</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-primary-container mb-6">
                    Creating safer laboratories through internationally accepted best practices.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Biosafety and biosecurity training
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Laboratory risk assessments and hazard mitigation planning
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Waste management systems
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Emergency response planning
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 06: Biorepository Development (Alternating Sage Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="biorepository-development"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center font-bold text-title-lg shrink-0">
                        06
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                          Pillar 06
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Biorepository Development
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">inventory_2</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-secondary mb-6">
                    Strengthening research through standardized biospecimen management systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container-high">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Biorepository establishment
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Biospecimen management training
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest md:col-span-2">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Ethical governance and regulatory compliance guidance
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 07: Clinical Trial Laboratory Support (Alternating White Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="clinical-trial-support"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center font-bold text-title-lg shrink-0">
                        07
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                          Pillar 07
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Clinical Trial Laboratory Support
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">science</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-primary-container mb-6">
                    Preparing laboratories to support world-class clinical research and innovation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Good Clinical Laboratory Practice training and implementation
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Laboratory monitoring support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Sponsor and CRO audit preparation
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Clinical research laboratory strengthening
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 08: Regulatory & Ethics Support (Alternating Sage Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="regulatory-ethics"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center font-bold text-title-lg shrink-0">
                        08
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                          Pillar 08
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Regulatory &amp; Ethics Support
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">policy</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-secondary mb-6">
                    Simplifying laboratory compliance through expert technical guidance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container-high">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Ethics submission support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Regulatory application guidance
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Compliance monitoring
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        CRO technical assistance
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 09: Antimicrobial Resistance Surveillance (Alternating White Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="amr-surveillance"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center font-bold text-title-lg shrink-0">
                        09
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                          Pillar 09
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Antimicrobial Resistance Surveillance
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">coronavirus</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-primary-container mb-6">
                    Supporting coordinated laboratory action against antimicrobial resistance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Sentinel AMR laboratory development
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        AMR diagnostic strengthening
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Microbiology workforce training
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        National antibiogram databases
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Surveillance data management
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low/60">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Antimicrobial stewardship support
                      </span>
                    </div>
                  </div>
                </article>
                {/* BLOCK 10: Outbreak Investigation & Emergency Response (Alternating Sage Surface) */}
                <article
                  className="scroll-mt-28 bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm transition-all hover:shadow-md"
                  id="outbreak-investigation"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center font-bold text-title-lg shrink-0">
                        10
                      </span>
                      <div>
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">
                          Pillar 10
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface">
                          Outbreak Investigation &amp; Emergency Response
                        </h2>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined">emergency</span>
                    </div>
                  </div>
                  <p className="font-title-md text-title-md italic text-secondary mb-6">
                    Strengthening laboratory preparedness for emerging public health threats.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-surface-container-high">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Rapid response team training
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Mobile laboratory support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Emergency diagnostic surge capacity
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Real-time laboratory reporting
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Outbreak investigation support
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        Epidemic preparedness planning
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Pre-Footer CTA Band: Partner With Us */}
        <section
          className="relative w-full py-20 lg:py-28 bg-inverse-surface overflow-hidden"
          id="partner-cta"
        >
          {/* Atmospheric Laboratory Image with 85% Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-15"
            data-alt="A modern bioanalytical laboratory at twilight with automated robotic analyzers, microplates, and scientists conducting diagnostic tests with glowing LED indicators in deep forest charcoal and clinical emerald green."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxlqowgv4OfU-AooNq1oXcC5N0dAcALOsVyIZDlWaiCvT07YU65URwP0zexlv1x93i7yIYsI1lOMO95CI0VFOCSdHdPdiZ-4Arf9sRzWJOnEpej75zyZX2rRr0noWXqjVwYZ2zJD0Tr5UF9m0ypcBOE-woO5Nc13iEpD3V9gzplh6-SCyfsEKG3eGSb0-WW-Lr7adapRN4oOYI9PXmQG31Is24tcda_Zbc6F6SJZc')",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-t from-inverse-surface via-inverse-surface/90 to-inverse-surface/85"></div>
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
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg"
                href="/contact"
              >
                Partner With Us
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10 font-label-lg text-label-lg px-8 py-3.5 transition-all"
                href="/contact"
              >
                Speak to a Specialist
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
