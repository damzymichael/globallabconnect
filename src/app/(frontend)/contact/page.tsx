import React from 'react'

export default function ContactPage() {
  return (
    <main className="w-full pt-20 bg-surface">
  <div className="flex flex-col w-full">
    {/* =========================================================================
       1. COMPACT HERO BANNER
       ========================================================================= */}
    <section className="relative w-full bg-inverse-surface overflow-hidden py-16 lg:py-20 text-on-primary">
      {/* Texture overlay with lab background */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-cover bg-center" data-alt="High-end clinical diagnostic laboratory at night with research technicians using precision pipettes, sterile hood workstations, microscopes, and cold storage bio-banking equipment in deep slate and emerald ambient lighting" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJySmPh2Tufn2c9xzmsjHFvZMd3Wgzcx4dC7GpxgGJgjM50JFCydUoEXGxtYEPwwlzsLmkmPe_9FMJOIeLzG9li0uqYINY70E8BSRq13MG0oZbN4nvxoQqabt7Wb0tAldZRlje5e_JjV_AuF9KRP_mDqG8V1OpIJ4m2Ufj1GL0zxAwC7eieuVZBXun39TIgFrU-qDPD6hzJaA_zOqjsM7KHVo5g1ac2TxdDXQQ5lc')"}}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/95 to-inverse-surface/85"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-margin">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-surface-container-high/70 mb-6">
          <a className="hover:text-surface-bright transition-colors" href="/">Home</a>
          <span className="text-surface-container-high/40">›</span>
          <span className="text-surface-bright font-semibold">Contact Us</span>
          </nav>
        {/* Headline & Subtitle */}
        <div className="max-w-3xl space-y-4">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight text-surface-bright">
                Contact Global LabConnect
              </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
                Connecting laboratories, public health institutions, researchers, and partners
                worldwide. Reach out to our technical advisory team or schedule an institutional
                consultation.
              </p>
          </div>
        {/* Assurance Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface-bright font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-secondary-fixed text-base">schedule</span>
                Direct Response within 24 Hours
              </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface-bright font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-secondary-fixed text-base">domain</span>
                Global Headquarters &amp; Regional Hubs
              </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-surface-bright font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-secondary-fixed text-base">verified</span>
                RC: 9435175
              </div>
          </div>
        </div>
      </section>
    {/* =========================================================================
       2. MAIN CONTACT SECTION & INSTITUTIONAL FORM
       ========================================================================= */}
    <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-primary-container block mb-2">
                Communication &amp; Inquiries
              </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                Let’s Strengthen Healthcare Systems Together
              </h2>
          </div>
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* COLUMN 1: Contact Details & Hubs (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Global LabConnect interfaces directly with ministries of health, diagnostic
                  pathology networks, research foundations, and hospital leadership to
                  operationalize sustainable lab solutions.
                </p>
            {/* Direct Phone & WhatsApp */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">
                        Direct Lines &amp; WhatsApp
                      </h3>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Fast-Track Response</span>
                  </div>
                </div>
              <div className="space-y-2 font-body-md text-body-md text-on-surface pl-1">
                <a className="flex items-center gap-3 text-on-surface hover:text-primary-container transition-colors py-1" href="tel:+2349129054546">
                  <span className="material-symbols-outlined text-secondary text-xl">phone_iphone</span>
                  <span>+234-912-905-4546</span>
                  </a>
                <a className="flex items-center gap-3 text-on-surface hover:text-primary-container transition-colors py-1" href="tel:+2348032424965">
                  <span className="material-symbols-outlined text-secondary text-xl">phone_iphone</span>
                  <span>+234-803-242-4965</span>
                  </a>
                </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-4 pt-3 bg-surface-container-lowest/60 rounded-lg p-3">
                    Available for technical inquiries, urgent advisory, and direct WhatsApp
                    consultations with senior specialists.
                  </p>
              </div>
            {/* Digital & Electronic Mail */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">Electronic Mail</h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Institutional Correspondence</span>
                  </div>
                </div>
              <div className="space-y-2 font-body-md text-body-md text-on-surface pl-1">
                <a className="flex items-center gap-3 text-on-surface hover:text-primary-container transition-colors py-1" href="mailto:info@eclaboratory.com">
                  <span className="material-symbols-outlined text-outline text-xl">alternate_email</span>
                  <span>info@eclaboratory.com</span>
                  </a>
                <a className="flex items-center gap-3 text-on-surface hover:text-primary-container transition-colors py-1" href="mailto:contact@globallabconnect.org">
                  <span className="material-symbols-outlined text-outline text-xl">mark_email_read</span>
                  <span>contact@globallabconnect.org</span>
                  </a>
                </div>
              </div>
            {/* Web & Accreditation */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">
                        Web &amp; Accreditation
                      </h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Corporate Registrations</span>
                  </div>
                </div>
              <div className="space-y-2 text-on-surface pl-1">
                <a className="flex items-center gap-3 text-primary-container font-semibold hover:underline" href="https://www.eclaboratory.com" rel="noopener" target="_blank">
                  <span className="material-symbols-outlined text-xl">language</span>
                  <span>www.eclaboratory.com</span>
                  </a>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic pl-8">
                      “All Your Tests In One Place”
                    </p>
                <div className="flex items-center gap-3 text-on-surface-variant pt-2">
                  <span className="material-symbols-outlined text-outline text-xl">badge</span>
                  <span className="font-label-md text-label-md font-semibold text-on-surface">Registration Number: RC 9435175</span>
                  </div>
                </div>
              </div>
            {/* Operational Facilities & Hubs */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-2xl">location_city</span>
                  </div>
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">
                        Operational Facilities &amp; Hubs
                      </h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">West Africa Regional Presence</span>
                  </div>
                </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface pl-1">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">place</span>
                  <div>
                    <strong className="font-semibold text-on-surface">Head Office &amp; Central Hub:</strong>
                    <p className="text-on-surface-variant">Benin City, Edo State, Nigeria</p>
                    </div>
                  </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">hub</span>
                  <div>
                    <strong className="font-semibold text-on-surface">Regional Clinical &amp; Bio-surveillance Facilities:</strong>
                    <p className="text-on-surface-variant">
                          Irrua Specialist Teaching Hospital &amp; Auchi Hubs
                        </p>
                    </div>
                  </li>
                <li className="flex items-start gap-3 pt-2">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">schedule</span>
                  <div>
                    <strong className="font-semibold text-on-surface">Operating Hours:</strong>
                    <p className="text-on-surface-variant">
                          Monday – Friday: 8:00 AM – 6:00 PM WAT
                        </p>
                    <p className="text-secondary font-semibold">
                          Emergency outbreak surveillance 24/7
                        </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          {/* COLUMN 2: Comprehensive Institutional Contact Form (7 Columns) */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-8 md:p-12 shadow-md">
            <div className="mb-8">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Send Us an Inquiry
                  </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                    Fill out the form below and a representative from our technical or advisory team
                    will follow up promptly.
                  </p>
              </div>
            <form className="space-y-6" id="contactForm" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block font-label-lg text-label-lg font-semibold text-on-surface" htmlFor="fullName">
                      Full Name <span className="text-primary-container">*</span>
                  </label>
                <div className="relative">
                  <input className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="fullName" placeholder="e.g., Dr. Jane Doe" required type="text" />
                  </div>
                </div>
              {/* Email Address & Organization Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-label-lg text-label-lg font-semibold text-on-surface" htmlFor="email">
                        Email Address <span className="text-primary-container">*</span>
                    </label>
                  <input className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="email" placeholder="name@organization.org" required type="email" />
                  </div>
                <div className="space-y-2">
                  <label className="block font-label-lg text-label-lg font-semibold text-on-surface" htmlFor="organization">
                        Organization / Affiliation <span className="text-primary-container">*</span>
                    </label>
                  <input className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="organization" placeholder="e.g., Ministry of Health, Hospital, NGO" required type="text" />
                  </div>
                </div>
              {/* Inquiry Subject */}
              <div className="space-y-2">
                <label className="block font-label-lg text-label-lg font-semibold text-on-surface" htmlFor="subject">
                      Program / Inquiry Area <span className="text-primary-container">*</span>
                  </label>
                <select className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all appearance-none cursor-pointer" id="subject" required defaultValue="">
                  <option disabled value="">Select Subject</option>
                  <option value="training">Laboratory Capacity &amp; Training</option>
                  <option value="equipment">Equipment Support &amp; Tech Transfer</option>
                  <option value="quality">Quality Management &amp; ISO 15189</option>
                  <option value="trials">Clinical Trial &amp; Biobanking</option>
                  <option value="general">General Inquiry &amp; Partnership</option>
                  </select>
                </div>
              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="block font-label-lg text-label-lg font-semibold text-on-surface" htmlFor="message">
                      Detailed Message <span className="text-primary-container">*</span>
                  </label>
                <textarea className="w-full p-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-y" id="message" placeholder="Provide details about your laboratory facility, institutional requirements, or collaboration goals..." required rows={5}></textarea>
                </div>
              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input className="w-5 h-5 mt-1 rounded bg-surface-container-lowest text-secondary focus:ring-secondary cursor-pointer" id="consent" required type="checkbox" />
                <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="consent">
                      I agree to receive communications regarding technical advisory and laboratory
                      solutions from Global LabConnect.
                    </label>
                </div>
              {/* Submit Button */}
              <div className="pt-4">
                <button className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg font-semibold px-8 py-4 rounded-full shadow-[0_8px_24px_-4px_rgba(139,0,0,0.3)] transition-all hover:-translate-y-0.5 cursor-pointer" type="submit">
                  <span>Submit Inquiry</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              </form>
            {/* Success Feedback Message */}
            <div className="hidden mt-6 p-4 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center gap-3" id="formSuccess">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
              <span className="font-body-sm text-body-sm font-semibold">Thank you for reaching out. Your inquiry has been routed to our regional
                    advisory team and we will respond within 24 hours.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* =========================================================================
       3. PRE-FOOTER CTA BAND: PARTNER WITH US
       ========================================================================= */}
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
          <a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg" href="#contactForm">
                Partner With Us
              </a>
          <a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10 font-label-lg text-label-lg px-8 py-3.5 transition-all" href="tel:+2349129054546">
                Speak to a Specialist
              </a>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}
