import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#0D1310] text-[#eaf3ea] border-t border-white/10 pt-16 pb-12"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Bio, Logo & RC */}
          <div className="lg:col-span-2 space-y-4">
            <Link className="flex items-center shrink-0" href="/">
              <img
                alt="Global LabConnect"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/ALJJyrC7khK5IRYWi2y3fvG8zDMo8n47kdy_Et1-MPECErgFLG2pGCKYk_-6Tlaci3yfp8G2e3CiCPG8DlR8vYZQmquV0_1ADHlkIr1dswjT3jocm0e7wsicVaDDfM560Ze7rcMJqfnxUwxslhFHXsiJfnPOuJuSgo6NmVKoVtIW8zn64rIQtJYxaCbKmVYmMU4OeLhejfIG58BHpYcI2-KDICqoxZKUDokzYwLwRIVDLTCcBbDxgD7UBW-dGPE"
              />
            </Link>
            <p className="font-body-sm text-body-sm text-inverse-on-surface/70 leading-relaxed max-w-sm">
              Empowering healthcare systems, scientific laboratories, and diagnostics networks
              across the globe through quality frameworks, technical development, and capacity
              building.
            </p>
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-secondary-fixed font-semibold tracking-wider">
                TAGLINE: “All Your Tests In One Place”
              </div>
              <div className="font-label-sm text-label-sm text-inverse-on-surface/50 font-mono">
                Registration RC 9435175
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <div className="font-label-lg text-label-lg text-white font-bold uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-inverse-on-surface/70">
              <li>
                <Link className="hover:text-white transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/about">
                  About GLC
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/services">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/projects">
                  Projects &amp; Impact
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/blogs">
                  Blog &amp; Publications
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Focus */}
          <div className="space-y-4">
            <div className="font-label-lg text-label-lg text-white font-bold uppercase tracking-wider">
              Core Focus
            </div>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-inverse-on-surface/70">
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#laboratory-capacity"
                >
                  Workforce Training
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#quality-management"
                >
                  ISO 15189 Standards
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#equipment-support"
                >
                  Technology Transfer
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#clinical-trial-support"
                >
                  Clinical Research Support
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#amr-surveillance"
                >
                  AMR Surveillance
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors"
                  href="/services#outbreak-investigation"
                >
                  Outbreak Readiness
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-4 lg:col-span-1">
            <div className="font-label-lg text-label-lg text-white font-bold uppercase tracking-wider">
              Contact Us
            </div>
            <div className="space-y-3 font-body-sm text-body-sm text-inverse-on-surface/80">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-fixed text-lg">call</span>
                <div className="flex flex-col">
                  <a className="hover:text-white transition-colors" href="tel:+2349129054546">
                    +234-912-905-4546
                  </a>
                  <a className="hover:text-white transition-colors" href="tel:+2348032424965">
                    +234-803-242-4965
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-fixed text-lg">mail</span>
                <div className="flex flex-col">
                  <a className="hover:text-white transition-colors" href="mailto:info@eclaboratory.com">
                    info@eclaboratory.com
                  </a>
                  <a
                    className="hover:text-white transition-colors"
                    href="mailto:contact@globallabconnect.org"
                  >
                    contact@globallabconnect.org
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary-fixed text-lg">
                  language
                </span>
                <a
                  className="hover:text-white transition-colors"
                  href="https://www.eclaboratory.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  www.eclaboratory.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-inverse-on-surface/50">
          <div>
            © 2026 Global LabConnect. All rights reserved. Registered under Nigerian CAC laws (RC
            9435175).
          </div>
          <div className="flex items-center gap-6">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Technical Engagement
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Ethics &amp; Governance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
