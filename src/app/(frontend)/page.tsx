import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Icon from '@/components/Icon'

// Core pillars shown on the homepage. The full list of ten lives on the About page (#core-pillars).
const homePillars = [
  {
    title: 'Training & Capacity Building',
    description: 'Developing a skilled and competent laboratory workforce.',
  },
  {
    title: 'Equipment Support & Technology Transfer',
    description: 'Expanding access to modern, reliable and sustainable diagnostic technologies.',
  },
  {
    title: 'Quality Management Systems',
    description: 'Ensuring quality excellence through international standards and accreditation.',
  },
  {
    title: 'Diagnostic Services & Assay Scale-Up',
    description: 'Improving access to accurate and timely diagnostic service.',
  },
]

// Fields of clinical medicine covered by EC Laboratory
const ecLabTests = [
  'Medical Microbiology',
  'Molecular Diagnostics',
  'DNA Testing',
  'Hematology',
  'Chemistry',
  'Immunology',
]

export default function HomePage() {
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {/* Section 1: Hero */}
        <section className="relative w-full bg-inverse-surface text-inverse-on-surface overflow-hidden">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full">
              <img
                className="w-full h-full object-cover object-[75%_20%] opacity-60 lg:opacity-100"
                alt="Laboratory professional in blue scrubs and gloves holding a blood collection tube and a rack of sample tubes"
                src="/lab_attendant_model.jpeg"
                fetchPriority="high"
                decoding="async"
              />
              {/* Horizontal fade: text side blends into the image */}
              <div className="absolute inset-0 bg-linear-to-r from-inverse-surface via-inverse-surface/80 to-transparent"></div>
              {/* Mobile-only vertical overlay for text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/60 via-transparent to-inverse-surface/30 lg:hidden"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
            <div className="max-w-2xl flex flex-col gap-6">
              <h1 className="font-display-lg text-display-lg text-on-primary">
                Innovations and Diagnostics
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-xl">
                Connecting Laboratories. Empowering Professionals. Advancing Global Health.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-7 py-3.5 transition-colors shadow-md"
                  data-path="partner-with-us"
                  href="/contact"
                >
                  Partner With Us
                </Link>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-secondary text-on-secondary hover:bg-on-secondary-container font-label-lg text-label-lg px-7 py-3.5 transition-colors shadow-md"
                  href="#our-solutions"
                >
                  Explore Our Solutions
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: About + Vision & Mission */}
        <section className="w-full bg-surface-container-lowest text-on-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex flex-col gap-5">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  About Global LabConnect (GLC)
                </h2>
                <p className="font-title-lg text-title-lg text-primary-container">
                  Strengthening Laboratories. Transforming Healthcare.
                </p>
                <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
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
              </div>
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-low">
                  <img
                    className="w-full h-64 object-cover object-center"
                    data-alt="Clean natural-light photograph of a medical laboratory scientist working inside a biosafety cabinet with precision pipettes and diagnostic trays in a modern, well-lit clinical research facility, crisp white and soft sage tones, authentic documentary healthcare style"
                    src="/laboratory_activity_one.jpeg"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-low">
                  <img
                    className="w-full h-64 object-cover object-center"
                    data-alt="Natural-light photograph of two laboratory professionals collaborating over digital diagnostic data and microscope slides at a modern laboratory bench, wearing lab coats and protective gloves, bright clinical environment with subtle green and neutral accents"
                    src="/laboratory_activity_two.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Vision & Mission Band */}
          <div className="w-full bg-surface-container-low py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0">
                    <Icon name="visibility" className=" text-[28px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Our Vision</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    To transform laboratory systems into robust, innovative, and responsive pillars
                    of healthcare delivery, research excellence, and public health preparedness.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                    <Icon name="flag" className=" text-[28px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Our Mission</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    To strengthen laboratory systems by advancing diagnostic quality, workforce
                    excellence, research, innovation, strategic partnerships, and sustainable public
                    health solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Our Solutions Overview */}
        <section
          className="w-full bg-surface-container-lowest text-on-surface py-20 lg:py-28"
          id="our-solutions"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0">
                  <Icon name="groups" className=" text-[24px]" />
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">
                  Laboratory Capacity Development
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Developing a highly skilled laboratory workforce for sustainable health systems.
                </p>
              </div>
              {/* 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0">
                  <Icon name="precision_manufacturing" className=" text-[24px]" />
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">
                  Equipment Support &amp; Technology Transfer
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Expanding access to modern, reliable and sustainable diagnostic technologies.
                </p>
              </div>
              {/* 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0">
                  <Icon name="verified" className=" text-[24px]" />
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">
                  Quality Management Systems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Helping laboratories achieve international quality standards and accreditation.
                </p>
              </div>
            </div>
            <div className="text-center pt-2">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg"
                href="/services"
              >
                <span>View More Solutions</span>
                <Icon name="arrow_forward" className=" text-[18px]" />
              </a>
            </div>
          </div>
        </section>
        {/* Section 4: Why Choose GLC + Our Value Proposition */}
        <section className="w-full bg-surface-container-low text-on-surface py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16">
            <div className="max-w-3xl flex flex-col gap-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Why Choose Global LabConnect
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                GLC provides practical, sustainable, and high-impact laboratory solutions tailored
                to the needs of healthcare institutions, research organizations, governments and
                development partners.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-title-lg text-title-lg text-primary-container font-semibold">
                Our Value Proposition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className=" text-[24px] font-bold" />
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                      Multidisciplinary laboratory expertise
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Cross-cutting specialist teams across clinical pathology, genomics, biomedical
                      engineering, and health informatics.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/50 text-primary-container flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className=" text-[24px] font-bold" />
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                      International best practices
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Aligned with ISO 15189, CLIA, CAP, and WHO standards to guarantee clinical
                      accuracy and operational rigor.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="check" className=" text-[24px] font-bold" />
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                      Public–private partnership model
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bridging ministerial health agendas with cutting-edge private industry
                      diagnostics and research institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Core Pillars of Global LabConnect (featured pillars; full list on About page) */}
        <section className="w-full bg-surface-container-lowest text-on-surface py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16">
            <div className="max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Core Pillars of Global LabConnect
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ten structured domains delivering resilient laboratory infrastructure, quality
                diagnostics, and public health impact worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {homePillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex items-start gap-5"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-title-lg ${
                      index % 2 === 0
                        ? 'bg-primary-fixed/50 text-primary-container'
                        : 'bg-secondary-container/50 text-secondary'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-2">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg"
                href="/about#core-pillars"
              >
                <span>View All 10 Core Pillars</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        {/* Section 6: EC Laboratory */}
        <section
          className="w-full bg-surface-container-low text-on-surface py-20 lg:py-28"
          id="ec-laboratory"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  EC Laboratory: Our Clinical Diagnostic Laboratory
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  As part of our diagnostic services, GLC operates EC Laboratory, a
                  multidisciplinary clinical laboratory that provides diagnostic tests across
                  different fields of clinical medicine.
                </p>
                <div className="flex flex-wrap gap-3">
                  {ecLabTests.map((test) => (
                    <span
                      key={test}
                      className="inline-flex items-center rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface font-label-lg text-label-lg px-5 py-2.5"
                    >
                      {test}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg px-8 py-3.5 transition-all shadow-md hover:shadow-lg"
                    target="_blank"
                    href="https://eclaboratory.com"
                  >
                    <span>Explore EC Laboratory</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0">
                    <Icon name="biotech" className=" text-[28px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Need a diagnostic test?
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Talk to the EC Laboratory team about the tests you need, sample requirements and
                    turnaround times.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 text-primary-container hover:text-primary font-label-lg text-label-lg font-semibold transition-colors"
                    href="/contact"
                  >
                    <span>Contact EC Laboratory</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 7: Pre-Footer CTA Band: Partner With Us */}
        <section
          className="relative w-full py-20 lg:py-28 bg-inverse-surface overflow-hidden"
          id="partner-with-us"
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
                href="tel:+2348032424965"
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
