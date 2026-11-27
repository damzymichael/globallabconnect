import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Icon from '../../../components/Icon'

export default function ProjectsPage() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        {/* 1. Inner-Page Header (Compact Hero) */}
        <section className="relative w-full bg-[#131B16] text-[#EAF3EA] overflow-hidden -mt-20 pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
              data-alt="A moody, high-precision clinical and biomedical research laboratory interior at night with scientists in navy coats using microscopes and pipettes in focused lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnky9P6fE-qsIeCGI7CW9yW8LKyWAERwhzVyUMWZGWqd6zP92pU8_njOB4g5rd-2nDGJYiP7Al7kwMBVagG2sIOPk5hvw1h6vvUHsSS2tT6hhHzHerdqvQMeUZFlUBZX-u54D-Ebhh9-B_3YXJKKjn_aqzL3w8qwra3AjmRmUzvj_QWA8GfNKa-EuWH4gNfPCeAKIwDH6sPphMKZBqkYcOuE62aqYRUrw9gvoz_S4"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#131B16] via-[#131B16]/90 to-[#131B16]/75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131B16] via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-[#EAF3EA]/70 uppercase"
            >
              <Link className="hover:text-white transition-colors" href="/">
                HOME
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-secondary-fixed" />
              <span className="text-secondary-fixed font-semibold">PROJECTS &amp; INITIATIVES</span>
            </nav>
            {/* Title H1 */}
            <h1 className="font-display-lg text-headline-lg lg:text-display-lg text-white tracking-tight mb-5 max-w-4xl">
              Our Projects
            </h1>
            {/* Intro Subtitle */}
            <p className="font-body-lg text-body-lg text-[#EAF3EA]/85 max-w-3xl leading-relaxed mb-8">
              Global LabConnect delivers end-to-end diagnostic systems strengthening, workforce
              development, and laboratory resilience initiatives in collaboration with national
              health authorities, academic institutions, and global partners.
            </p>
            {/* Reassurance Badges / Metrics Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-label-sm font-label-sm text-white">
                <Icon name="verified" className=" text-secondary-fixed text-[18px]" />
                <span>Comprehensive In-Depth Case Studies</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-label-sm font-label-sm text-white">
                <Icon name="public" className=" text-secondary-fixed text-[18px]" />
                <span>Multi-Regional Impact</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-label-sm font-label-sm text-white">
                <Icon name="rule" className=" text-secondary-fixed text-[18px]" />
                <span>Standardized Benchmarks</span>
              </div>
            </div>
          </div>
        </section>
        {/* 2. Filter Bar / Category Navigation */}
        <section className="w-full bg-surface-container-low shadow-sm sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5">
              <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg shrink-0">
                <Icon name="filter_list" className=" text-primary-container text-[20px]" />
                <span>Filter by Solution Area:</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none no-scrollbar">
                <button
                  className="filter-btn active shrink-0 px-4 py-2 rounded-full bg-primary-container text-white font-label-sm text-label-sm shadow-sm transition-all hover:bg-primary"
                  type="button"
                >
                  All Solutions
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Laboratory Capacity
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Equipment Support &amp; Tech Transfer
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Quality Management Systems (ISO 15189)
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Diagnostic Services &amp; Assay Scale-Up
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Biosafety &amp; Biosecurity
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Biorepository Development
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Clinical Trial Support
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  AMR Surveillance
                </button>
                <button
                  className="filter-btn shrink-0 px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm shadow-sm transition-all hover:bg-surface-container-high hover:text-on-surface"
                  type="button"
                >
                  Outbreak Investigation &amp; Emergency Response
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 3. PROJECT BLOCKS */}
        {/* Block 1: Clean White (#FFFFFF) - Image LEFT, Content RIGHT */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Visual Media & Thumbnails */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Female biomedical laboratory researcher calibrating automated real-time PCR analyzer and microplates in an advanced clean room diagnostics facility"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-OCwMib649_dX1BEENPuhqkKU8WiEUCVbFKpL4X0Njb86_HJtECkaXAYe_Y5NcWckCgwmPRgy0BmACPPxwhQJE_Bn9vmVqOnEfzc_lgrQVEW0ap6C7tTGxUocyEk004rbFqpRXE1RV1xlNv5UAiFaCyBlip6IGPpuh_wOcMOvVFVLMSwrL_125uiVriSTNa8K-d9FgguhMvMgpVolBL1q89z4TVPIBMoGbYpSYDs"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#131B16]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-label-sm font-label-sm flex items-center gap-1.5">
                    <Icon name="photo_camera" className=" text-[16px] text-secondary-fixed" />
                    <span>Field Execution Documented</span>
                  </div>
                </div>
                {/* 3-Thumbnail Gallery Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Laboratory biosafety technician carrying out biological specimen intake and containment inspection at primary intake station"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuANtqFwNYZ03SZBJQ_SR9cIpvBt9DLesqB9hmX1VG1fmmKsK1jKPzaQbyU8P09XAcS0WSxUF0-_3ExCqcziBkQ8ph53NUJTmH0fTnA46loB1EmxwqhafRnYTLuCCA11MOHJw3KMED7XV-MVYX7oU2Ty4sj5yHTgjVyE6NTW7yEwz2dmn2-qUOAQKzUyypqEuOUShnBVpxvR0SKxPe_4EYZcdLZR7iTTtZsqnWQZMyM"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Facility Assessment]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Senior laboratory mentors instructing technicians in pipetting calibration and clean molecular reagent preparation"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz6o1RUlIqTUOQH6QAGiFPGQbN1SCn63ZWxiwRXzl62_CgF3mQ028Xogstb5TZTWAW1DyoHZJbTuCy3gZ5dWR2ThvOjS6W4B6wHBNpN6rWj_gAB96JByXvpknMWvT-_L_4tE1h-ajDNIt0XeM6Dii51L19su622vGxU3vLDWXOjG9cF1AdeOUdnubbs6N37tESDrttDULfsY4KHUqD_XajyaTsepyOqM5BxPEwAGU"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Workforce Training Session]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Row of calibrated automated molecular diagnostic sequencers and testing workstations running diagnostic quality validations"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0bpdS-dCM5t6JaR9B291qnbgj73Vno4Yxopt3MH3779eoQYN0K1Rqv5Y3MypA56r7e493aRXPej8yhTCEE5xXKeK7_SRkmGjsFtIC8-tWQPkayEzzXn80JnSM60JqLJkQAGwK3UOrm0M_4VV53yK-S_fhFbsa5eEQtUrko191LMPkRH2KrNPdYbzPhWrTROuY3hfA8P9rWMk7yyFF3IXCpVIyxwW-dJ_Vmscaock"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Validated Laboratory Equipment]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Content */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Category & Status Badge Row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-primary-fixed/50 text-primary-container font-label-sm text-label-sm">
                    [Laboratory Capacity &amp; Molecular Infrastructure]
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    [Status: Active / Multi-Year Initiative]
                  </span>
                </div>
                {/* Title H2 */}
                <h2 className="font-headline-md text-headline-sm lg:text-headline-md text-on-surface font-semibold mb-4 leading-snug">
                  [Project Title: Strengthening Regional Molecular Diagnostic Capacity &amp;
                  Biosafety Infrastructure]
                </h2>
                {/* Meta Row */}
                <div className="bg-surface-container-low rounded-lg p-3.5 mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-1.5">
                    <Icon name="location_on" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Location:</strong> [Location / Region]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="calendar_today" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Timeline:</strong> [Date / Timeline]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="corporate_fare" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Partner:</strong> [Institutional Partner / Ministry]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="verified_user" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Status:</strong> [Status: Multi-Year Active]
                    </span>
                  </div>
                </div>
                {/* Overview Paragraph */}
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  The project addressed critical constraints in centralized pathogen
                  characterization and turnaround times for priority infectious diseases across
                  target public healthcare facilities. Global LabConnect formulated a multi-tiered
                  diagnostic modernization strategy integrating bio-containment upgrades, hands-on
                  clinical technologist training, and robust supply pipeline stabilization. Working
                  in direct partnership with local governance and international scientific
                  stakeholders, the deployment reinforced sustainable diagnostic continuity and
                  early epidemic warning networks.
                </p>
                {/* What We Did Section */}
                <div className="mb-7">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3 flex items-center gap-2">
                    <Icon name="task_alt" className=" text-primary-container" />
                    Key Interventions &amp; Scope of Work
                  </h3>
                  <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Diagnostic Assessment:</strong> Comprehensive baseline audits of
                        equipment uptime, workflow bottlenecks, and biosafety protocols across
                        regional facilities.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Protocol Implementation:</strong> Standard operating procedures
                        aligned with international bio-risk management guidelines and validated
                        molecular testing algorithms.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Staff Competency Training:</strong> In-depth modular mentorship on
                        diagnostic automation, calibration techniques, and biohazard isolation
                        containment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Quality Monitoring:</strong> Introduction of standardized internal
                        controls, digital instrument logbooks, and external proficiency testing
                        regimes.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Outcomes & Key Results */}
                <div className="mb-7">
                  <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide mb-3">
                    Outcomes &amp; Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-primary-container font-bold mb-1">
                        [Outcome Metric 1]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Benchmark Achieved]
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-secondary font-bold mb-1">
                        [Outcome Metric 2]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Standard Met]
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-on-surface font-bold mb-1">
                        [Outcome Metric 3]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Operational Impact]
                      </div>
                    </div>
                  </div>
                </div>
                {/* Solution Tags Row */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#laboratory-capacity"
                  >
                    #Laboratory Capacity
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#biosafety-biosecurity"
                  >
                    #Biosafety &amp; Biosecurity
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#quality-management"
                  >
                    #Quality Systems
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Block 2: Soft Sage Tint (#F4F8F5) - Content LEFT, Image RIGHT */}
        <section className="w-full bg-surface-container py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
                {/* Category & Status Badge Row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    [Equipment Support &amp; ISO 15189 Quality Systems]
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    [Status: Completed / Successfully Accreditated]
                  </span>
                </div>
                {/* Title H2 */}
                <h2 className="font-headline-md text-headline-sm lg:text-headline-md text-on-surface font-semibold mb-4 leading-snug">
                  [Project Title: National Quality Management Scale-Up &amp; Diagnostic Tech
                  Transfer]
                </h2>
                {/* Meta Row */}
                <div className="bg-surface-container-lowest rounded-lg p-3.5 mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant font-label-sm text-label-sm shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <Icon name="location_on" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Location:</strong> [Location / Region]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="calendar_today" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Timeline:</strong> [Date / Timeline]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="corporate_fare" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Partner:</strong> [Institutional Partner / Ministry]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="verified_user" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Status:</strong> [Status: Completed]
                    </span>
                  </div>
                </div>
                {/* Overview Paragraph */}
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  This initiative focused on institutionalizing standard operational rigor and
                  preventive maintenance protocols for high-throughput diagnostic equipment. The
                  program addressed recurring analyzer downtime, uncalibrated assay variability, and
                  gaps in documentation required for ISO 15189 compliance. Through structured
                  equipment technical transfers, staff re-skilling, and routine internal audit
                  simulations, the project transformed regional diagnostic hubs into internationally
                  credible testing reference points.
                </p>
                {/* What We Did Section */}
                <div className="mb-7">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3 flex items-center gap-2">
                    <Icon name="build_circle" className=" text-primary-container" />
                    Key Interventions &amp; Scope of Work
                  </h3>
                  <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Diagnostic Tech Transfer:</strong> Procurement facilitation, vendor
                        qualification, and commissioning of high-accuracy automated analyzers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Preventive Maintenance Systems:</strong> Calibration schedule
                        deployment, cold-chain monitoring integration, and spare part pipeline
                        management.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>ISO 15189 Quality Roadmap:</strong> Drafting standardized quality
                        manuals, non-conformance management processes, and pre-audit readiness
                        trials.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Performance Verification:</strong> Establishing strict analytical
                        sensitivity and specificity benchmarks across all active testing menus.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Outcomes & Key Results */}
                <div className="mb-7">
                  <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide mb-3">
                    Outcomes &amp; Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-primary-container font-bold mb-1">
                        [Outcome Metric 1]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Benchmark Achieved]
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-secondary font-bold mb-1">
                        [Outcome Metric 2]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Standard Met]
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-on-surface font-bold mb-1">
                        [Outcome Metric 3]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Operational Impact]
                      </div>
                    </div>
                  </div>
                </div>
                {/* Solution Tags Row */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm shadow-sm"
                    href="#equipment-support"
                  >
                    #Equipment Support
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm shadow-sm"
                    href="#quality-management"
                  >
                    #ISO 15189 Accreditation
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm shadow-sm"
                    href="#assay-scale-up"
                  >
                    #Assay Scale-Up
                  </a>
                </div>
              </div>
              {/* Right Column: Visual Media & Thumbnails */}
              <div className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Two laboratory medical specialists reviewing analytical readout curves on high-resolution clinical monitors beside diagnostic equipment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzqwTAzPMTfkdl-ELOmbw05CQIbti0Q8ZbFkCS91hx4-LnHS-hJ3Ck_LhEsbNKSngZTd4LIIPPja-ceOMnaLJAeXXfKstD7h-X5l2EYrcah220IQJSizDjboHxYNUx6PvlTHCZJris5K33_cmAzxnjwe_fvgM_GyfUeWOc4UQBnorcy2rSROSe9B48Myn1FEqHGRDhV-k_LA6ifqn0ZhiTDHMb6_3lPJh8FcYrSUM"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#131B16]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-label-sm font-label-sm flex items-center gap-1.5">
                    <Icon name="verified" className=" text-[16px] text-secondary-fixed" />
                    <span>Standardization Verified</span>
                  </div>
                </div>
                {/* 3-Thumbnail Gallery Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Biomedical engineer conducting precise optical calibration on an automated clinical chemistry platform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6BbKyeQtRw33vzzdi2gludQe_azJkqx6PVfaQRrcft5CrKYaKBV_WVKkJ-QrZftTSprxXP7IOJlVfwtI7ZMH8i6Ylof5hlazvHxSTyA6IZvm0K2xmloptDkEJ-5k_x6B7cuqza3MhQUEzYxkT7VmSFBOfypLLBdng2WkMyOeUXP69YbLRraW-UNvRVfwNg8QcO2EAqIrfHL6Pb1uCphsWIZUSA4fXob6gmv8eZVs"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Equipment Inspection]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Quality control supervisor reviewing audit binders and ISO compliance checklists with laboratory personnel"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmy8TcxYG2iXqizaezzXTYs2fztAgRg3DmX_MdVYI0g3lmsYsq6PthXgRFoHkFnC7QTPSUeTtbKB5mVaWukpt5ezADf6oTckASZi9cxDWcrky77vg04A5hNo5iB87V6X7l9hIZfJjEDJ5mTD_5pcxjbZycGA0RZCj490E5RRFKd8le8c-lyI5qsDFriyDklvqEeNtsLJsU0HssJz_O8FSFTPMerh4awJ8xK5n-c3g"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Audit Simulation]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Organized laboratory reagents cold storage units with calibrated temperature logging hardware"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaljUa2acRJk1FtMRfZKNenm-oO7X0l8LCary5IWhkuQ14ezWlC9609ejhjuQc1xEcpi-6XEYpmqDQvU_ml9yhA2SSdmh-gRWFpXMHgv3SfS4lpA43T0g7m7oAFiJq0fHRYHLgBgb-G4Fm91M63btjTyKtzLMiRdzGdJFpUmRMF1RbbMbkg-awVT6U81RfeEaxbd_cTEy-eoAEJwriXxgRmVxY0COquC3UctlDHk"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Cold Chain Control]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Block 3: Clean White (#FFFFFF) - Image LEFT, Content RIGHT */}
        <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Visual Media & Thumbnails */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Field laboratory rapid response team handling mobile diagnostic multiplex testing kits in a climate-controlled containment facility"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADIfdmIYxqF9L6BeR0n8uc3IDa-zq6_3Ixffm31VxeUv8MD6-RlyxhcwHBY_OmLbu1UbRMHIPwlvnAOLcoDTs8A4MgM_qFzNahfWolLDpFhbKqNemusbZ2mqvH1T-AO5MB7PpiJOExaI8m1CvwSETrifkcWtPVhcLAWcVjnoph0RtHk8ErF6e_FoRKESnIhGZ2KDCzMSFW4SOdwBhuyuo5uuqwCxMh20EL6rxcCTE"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#131B16]/85 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-label-sm font-label-sm flex items-center gap-1.5">
                    <Icon name="speed" className=" text-[16px] text-secondary-fixed" />
                    <span>Emergency Deployment</span>
                  </div>
                </div>
                {/* 3-Thumbnail Gallery Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Epidemiological laboratory team sorting viral transport media tubes in high-containment biosafety hood"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvwI41a_-A0E6PDwmZZsX54rTNtt13U8pxwgiMG6J4ZcopUnxoSi3Jt3rt3pLxfWpmw_ZzyrWBxQj8fkOXidqwB7YnKWtm-V0-AP7SYuDjZwLEBABpgdjSDxytqjezsagKuVdptDnepcMuPFRt_6ggSAWyi5knrtaaw6ugvl4rHp4jkLJl3NqlYfMioIbLrzLv_EOp25xZmVSL1ED9nl8Tc0lQmutpmI1D8bcIRI"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Field Sample Triage]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Technician operating mobile sequencing platform during decentralized outbreak simulation drill"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm9k_KlsTMHq--FRHJRwCZPePy6FdXF1R4n0hxfzEAe1vHpvVXFub0gyjw4xdd7rqtZDOJFbCXqOtdNE6GSejGh0W02vpRfVIRkno_Hsc1QRZ0vBNBaxg5Eo7wdXYqE__bVA-GZ_gJW8bD9gchCpJ5HzuJvf-BgGWR0OK4chZB0I8oUDD0NnzQXeIeGxEKyW3HTajNsJB5xKVcJrFmNs4KfOPIjhS2e-UT02GtySo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Mobile Sequencing]
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm group cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      data-alt="Epidemic surveillance control room displaying real-time geographic transmission maps and laboratory confirmation graphs"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9PM-ykJnWYWqXerLVLQNUQnf7XJKpsZTl5WZoNRoyPTafCdJRChOmwZnSvDSLiN7XJadZTEHTxzElylhxrIyP8aae4xyuxjVXauwuJ_btYN4YV47wKo84P510w5J37X-YLO7lALKhu2l2VebUxuxt0ZRmaDrEXYE-ihnXl3W7dMvGrHhO9l9hVp1UG7t4oFp2hBS-2pPu8eSVZlqApyTupi3BhOHSsTU9z_dcRwc"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[11px] font-semibold text-white truncate">
                        [Data Interoperability]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Content */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Category & Status Badge Row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-primary-fixed/50 text-primary-container font-label-sm text-label-sm">
                    [Outbreak Investigation &amp; AMR Surveillance]
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    [Status: Active Emergency Network]
                  </span>
                </div>
                {/* Title H2 */}
                <h2 className="font-headline-md text-headline-sm lg:text-headline-md text-on-surface font-semibold mb-4 leading-snug">
                  [Project Title: Rapid Response Outbreak Surveillance &amp; Antimicrobial
                  Resistance Network]
                </h2>
                {/* Meta Row */}
                <div className="bg-surface-container-low rounded-lg p-3.5 mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-1.5">
                    <Icon name="location_on" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Location:</strong> [Location / Region]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="calendar_today" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Timeline:</strong> [Date / Timeline]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="corporate_fare" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Partner:</strong> [Institutional Partner / Ministry]
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="verified_user" className=" text-[18px] text-secondary" />
                    <span>
                      <strong>Status:</strong> [Status: Multi-Year Active]
                    </span>
                  </div>
                </div>
                {/* Overview Paragraph */}
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  In response to recurrent biological threats and accelerating antimicrobial
                  resistance in cross-border zones, Global LabConnect engineered a decentralized
                  surveillance network connecting district facilities with primary reference hubs.
                  The intervention established standardized specimen transport chains, synchronized
                  digital laboratory information systems, and rapid field sequencing deployments to
                  minimize delay between pathogen detection and public health countermeasures.
                </p>
                {/* What We Did Section */}
                <div className="mb-7">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-3 flex items-center gap-2">
                    <Icon name="coronavirus" className=" text-primary-container" />
                    Key Interventions &amp; Scope of Work
                  </h3>
                  <ul className="space-y-2.5 font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Surveillance Architecture:</strong> Deployment of harmonized AMR
                        testing algorithms and clinical diagnostic panels across target sentinel
                        sites.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Field Diagnostic Mobilization:</strong> Rapid response surge kits
                        deployed with mobile PCR and rapid diagnostic tests for localized clusters.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Data Interoperability:</strong> Direct linkage between laboratory
                        testing registries and national public health epidemiological command
                        databases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="check" className=" text-[14px]" />
                      </span>
                      <span>
                        <strong>Biosafety &amp; Specimen Custody:</strong> Safe triple-packaging
                        containment chains established for high-risk specimen dispatch to reference
                        hubs.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Outcomes & Key Results */}
                <div className="mb-7">
                  <h4 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wide mb-3">
                    Outcomes &amp; Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-primary-container font-bold mb-1">
                        [Outcome Metric 1]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Benchmark Achieved]
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-secondary font-bold mb-1">
                        [Outcome Metric 2]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Standard Met]
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl shadow-sm">
                      <div className="font-display-lg text-headline-sm text-on-surface font-bold mb-1">
                        [Outcome Metric 3]
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        [Outcome Description / Operational Impact]
                      </div>
                    </div>
                  </div>
                </div>
                {/* Solution Tags Row */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#outbreak-response"
                  >
                    #Outbreak Response
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#clinical-trial-support"
                  >
                    #Surveillance Systems
                  </a>
                  <a
                    className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container hover:text-white transition-colors text-label-sm font-label-sm"
                    href="#biorepository"
                  >
                    #Biorepository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4. Pre-Footer CTA Band: Partner With Us */}
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
