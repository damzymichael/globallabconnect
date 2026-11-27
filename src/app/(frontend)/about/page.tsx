import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Icon from '@/components/Icon'

export default function AboutPage() {
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {/* 1. Inner-Page Header (Compact Atmospheric Lab Banner) */}
        <section className="relative w-full bg-[#131B16] text-inverse-on-surface overflow-hidden -mt-20 pt-36 lg:pt-44 pb-20 lg:pb-28 shadow-md">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform motion-safe:transition-transform duration-1000"
            data-alt="Cinematic wide-angle interior of an advanced clinical microbiology laboratory at dusk, with cool blue LED illuminations, precision microscopes, automated assay analyzers, microplates, and biomedical scientists in protective gear working with micropipettes in sterile cleanroom conditions"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCELEmUvyAY7HHq15Xlfmy-gy8A4sOknPsispXfZ2WlNneClWCaKUdM8WHIvg8dRv399qyWt4SSXX6gAElezaZnexkF4M6El_FOFfH0xBK4p2VjOlRA1dDS106zcMPdgqBO0aXFKACoBSpJ6ueCOMhX3jnoEQ-9-W4OIwUfwqgMFvCJmZ89KGfU_nHIIMZuKBGJiSYv6JCj_rd5ZHCWHYKTcEy3hreq6ijhnngdwIc')",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#131B16] via-[#131B16]/90 to-[#131B16]/75"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start gap-4">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-[#EAF3EA]/70 uppercase"
            >
              <Link className="hover:text-white transition-colors" href="/">
                HOME
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-secondary-fixed" />
              <span className="text-secondary-fixed font-semibold">ABOUT US</span>
            </nav>
            <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-white tracking-tight max-w-4xl">
              About Global LabConnect
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-3xl leading-relaxed">
              Strengthening laboratories, empowering healthcare professionals, and transforming
              diagnostic systems across the globe.
            </p>
          </div>
        </section>
        {/* 2. Section 1: About GLC Text (Clean White Rhythm) */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed/30 text-primary-container font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                  <Icon name="domain" className=" text-[16px]" />
                  ORGANIZATIONAL OVERVIEW
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Strengthening Laboratories.
                  <span className="text-primary-container">Transforming Healthcare.</span>
                </h2>
                <div className="space-y-5 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Global LabConnect (GLC) is an independent, non-governmental organization
                    dedicated to strengthening laboratory systems through collaboration, innovation,
                    capacity building, and strategic partnerships. We work with hospitals, public
                    and private laboratories, research organizations, governments, and development
                    partners to build workforce capacity, enhance diagnostic quality, clinical
                    research, and outbreak preparedness.
                  </p>
                  <p>
                    As a collaborative platform, GLC promotes excellence in laboratory medicine
                    through sustainable partnerships and evidence-based solutions, we help build
                    resilient laboratory systems that improve patient outcomes and public health.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 w-full">
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
                    <span className="font-headline-md text-headline-md text-primary-container font-bold">
                      20+
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Years Leadership Experience
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm">
                    <span className="font-headline-md text-headline-md text-secondary font-bold">
                      BSL-3
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      High-Containment Ready
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm col-span-2 sm:col-span-1">
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      60+
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Peer-Reviewed Papers
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 bg-surface-container-high">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-alt="Focused team of biomedical laboratory scientists in sterile dark-navy uniforms using automated PCR and pipetting assays under soft focused laboratory task lamps in a modern clinical pathology facility"
                    style={{ backgroundImage: "url('/lab_attendant.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#131B16]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <Icon name="public" className=" text-[22px]" />
                      </div>
                      <div>
                        <h4 className="font-title-md text-title-md text-on-surface">
                          Global Lab Alliances
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Bridging field diagnostics &amp; academic standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3. Section 2: Vision and Mission (Side by Side in Soft Sage Mist) */}
        <section className="w-full bg-surface-container-low py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                GUIDING PRINCIPLES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3">
                Our Vision &amp; Strategic Mission
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Vision Card */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <div className="w-14 h-14 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center mb-6">
                    <Icon name="visibility" className=" text-[28px]" />
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-semibold block mb-2">
                    Long-Term Impact
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    Our Vision
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    To transform laboratory systems into robust, innovative, and responsive pillars
                    of healthcare delivery, research excellence, and public health preparedness.
                  </p>
                </div>
                <div className="mt-8 pt-6 flex items-center gap-2 text-primary-container font-label-lg text-label-lg">
                  <span>Institutional Excellence</span>
                  <Icon name="verified" className=" text-[18px]" />
                </div>
              </div>
              {/* Mission Card */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <div className="w-14 h-14 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center mb-6">
                    <Icon name="flag" className=" text-[28px]" />
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
                    Active Commitment
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                    Our Mission
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    To strengthen laboratory systems by advancing diagnostic quality, workforce
                    excellence, research, innovation, strategic partnerships, and sustainable public
                    health solutions.
                  </p>
                </div>
                <div className="mt-8 pt-6 flex items-center gap-2 text-secondary font-label-lg text-label-lg">
                  <span>Evidence-Based Action</span>
                  <Icon name="check_circle" className=" text-[18px]" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4. Section 3: Core Pillars of Global LabConnect (10 Numbered Grid in Clean White) */}
        <section
          id="core-pillars"
          className="scroll-mt-24 w-full bg-surface-container-lowest py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold mb-3">
                  FOUNDATIONAL ARCHITECTURE
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Core Pillars of Global LabConnect
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  Ten structured domains delivering resilient laboratory infrastructure, quality
                  diagnostics, and public health impact worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Pillar 01 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Training &amp; Capacity Building
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Developing a skilled and competent laboratory workforce.
                  </p>
                </div>
              </div>
              {/* Pillar 02 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Equipment Support &amp; Technology Transfer
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Expanding access to modern, reliable and sustainable diagnostic technologies.
                  </p>
                </div>
              </div>
              {/* Pillar 03 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Quality Management Systems
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Ensuring quality excellence through international standards and accreditation.
                  </p>
                </div>
              </div>
              {/* Pillar 04 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  04
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Diagnostic Services &amp; Assay Scale-Up
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Improving access to accurate and timely diagnostic service.
                  </p>
                </div>
              </div>
              {/* Pillar 05 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  05
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Biosafety &amp; Biosecurity
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Promoting safe laboratory practices and protecting people and communities.
                  </p>
                </div>
              </div>
              {/* Pillar 06 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  06
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Biorepository Development
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strengthening research through high-quality biospecimen management.
                  </p>
                </div>
              </div>
              {/* Pillar 07 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  07
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Clinical Trial Laboratory Support
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Supporting high-quality laboratories for world-class clinical research.
                  </p>
                </div>
              </div>
              {/* Pillar 08 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  08
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Regulatory &amp; Ethics Support
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Facilitating compliance with ethical, regulatory and policy requirements.
                  </p>
                </div>
              </div>
              {/* Pillar 09 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  09
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Antimicrobial Resistance Surveillance
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Combating antimicrobial resistance through surveillance, data and collaboration.
                  </p>
                </div>
              </div>
              {/* Pillar 10 */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-surface-container-low transition-all duration-200 hover:shadow-md hover:bg-surface-container">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary font-title-lg text-title-lg font-bold flex items-center justify-center shrink-0">
                  10
                </div>
                <div className="space-y-1">
                  <h3 className="font-title-lg text-title-lg text-on-surface">
                    Outbreak Investigation &amp; Emergency Response
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Enhancing preparedness and response to public health emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5. Section 4: Leadership Profile (CEO Profile in Soft Sage Mist) */}
        <section className="w-full bg-surface-container-low py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed/30 text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-3">
                Meet Our Leadership
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Column: CEO Portrait & Credentials */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md">
                  <div className="aspect-3/4 relative bg-surface-variant overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-top"
                      data-alt="Formal executive portrait of Dr Ephraim Ogbaini-Emovon, an African physician and pathologist in professional business attire, brown jacket with collared shirt and tie, warm scholarly lighting, confident and authoritative demeanor"
                      src="/dr_ephraim.png"
                    />
                  </div>
                  <div className="p-6 lg:p-8 space-y-3">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                      Dr. Ephraim Ogbaini-Emovon
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wide uppercase">
                      FMCPath, MBBS, MPH, CPF (UK)
                    </p>
                    <div className="pt-3 border-t border-surface-variant/40 space-y-1">
                      <p className="font-title-md text-title-md text-primary-container font-bold">
                        Founder &amp; Chief Executive Officer
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Express Clinical Laboratory | Global LabConnect (GLC)
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                        Pathologist
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                        Consultant Microbiologist
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                        BSL-3 Director
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Biography & Full Unchanged Text */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                {/* Tinted Callout Banner */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-container"></div>
                  <Icon
                    name="format_quote"
                    className=" text-[36px] text-primary-container/40 absolute top-4 right-4"
                  />
                  <p className="font-title-lg text-title-lg text-on-surface italic font-semibold leading-relaxed">
                    "Strong Laboratories Are The Foundation Of Quality Healthcare, Resilient Health
                    Systems, And Global Health Security."
                  </p>
                </div>
                {/* Paragraphs verbatim */}
                <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-2xl shadow-sm space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Dr. Ephraim Ogbaini-Emovon is a distinguished Pathologist, Laboratory Physician,
                    Consultant Medical Microbiologist, and Clinical Research Scientist with more
                    than two decades of experience in diagnostic medicine, laboratory systems
                    strengthening, biosafety and biosecurity, outbreak preparedness, infection
                    prevention and control, clinical research, and public health.
                  </p>
                  <p>
                    A Fellow of the National Postgraduate Medical College of Nigeria and recipient
                    of the prestigious Commonwealth Professional Fellowship (United Kingdom), he has
                    established an outstanding record of leadership in laboratory medicine and
                    infectious disease control at national and international levels. He previously
                    served as Director of the Institute for Viral and Emergent Pathogens Control and
                    Research, Irrua Specialist Teaching Hospital, where he led the establishment of
                    one of Nigeria's foremost Biosafety Level 3 molecular diagnostic and research
                    laboratories, significantly strengthening the country's capacity for infectious
                    disease diagnosis, surveillance, and clinical research.
                  </p>
                  <p>
                    Dr. Ogbaini-Emovon has played strategic roles in Nigeria's response to Lassa
                    fever, Ebola Virus Disease, and COVID-19. During the COVID-19 pandemic, he
                    chaired the Nigerian Medical Association Outbreak Response Team in Edo State and
                    later served on the National Isolation Centre Assessment and Accreditation
                    Committee constituted by the Federal Ministry of Health. He has also contributed
                    to numerous national technical working groups involving the World Health
                    Organization (WHO), Nigeria Centre for Disease Control (NCDC), AFENET, and the
                    Federal Ministry of Health, supporting policy development, laboratory
                    strengthening, and emergency preparedness.
                  </p>
                  <p>
                    Internationally, he has served as a Clinical Fellow at the Rare and Imported
                    Pathogens Laboratory and the National Microbiology Reference Laboratory in
                    England and as a World Health Organization consultant supporting laboratory
                    strengthening and outbreak preparedness initiatives in Liberia and South Sudan.
                    He currently serves as Faculty Member of the Georgetown University Lassa Fever
                    Case Management Fellowship Programme. Dr. Ephraim Ogbaini-Emovon has received
                    Awards of Excellent from the NMA, the Nigeria Centre for Disease Control (NCDC)
                    and was honoured with a commendation from the United States Centers for Disease
                    Control and Prevention (US CDC) in recognition of his contributions to global
                    health.
                  </p>
                  <p>
                    An accomplished researcher with more than 60 peer-reviewed scientific
                    publications, Dr. Ogbaini-Emovon has led several landmark initiatives, including
                    the development of the first WHO International Lassa Virus Antibody Standard and
                    the establishment of Nigeria's first hospital-based infectious disease biobank,
                    advancing diagnostics, translational research, and global health security.
                  </p>
                  <p>
                    He holds Bachelor of Medicine, Bachelor of Surgery (MBBS) and Master of Public
                    Health (MPH) degrees from the University of Benin and Postgraduate Certificate
                    in Clinical Trials from the University of London. He has undertaken advanced
                    professional training in Outbreak Response, Project Management, Advanced
                    Diagnostics, and Biobanking through leading institutions in the United Kingdom
                    and France.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 6. Section 5: Pre-Footer CTA Band: Partner With Us */}
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
