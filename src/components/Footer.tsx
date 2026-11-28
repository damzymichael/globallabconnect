'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const getFooterLinkClass = (path: string) => {
    if (isActive(path)) {
      return 'text-secondary-fixed font-semibold transition-colors'
    }
    return 'hover:text-white transition-colors text-inverse-on-surface/70'
  }

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
                src="/glc_logo.png"
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
              <div className="font-label-sm text-label-sm text-inverse-on-surface/50">
                Registration RC 9435175
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <div className="font-label-lg text-label-lg text-white font-bold uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <Link className={getFooterLinkClass('/')} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={getFooterLinkClass('/about')} href="/about">
                  About GLC
                </Link>
              </li>
              <li>
                <Link className={getFooterLinkClass('/services')} href="/services">
                  Our Solutions
                </Link>
              </li>
              {/* <li>
                <Link className={getFooterLinkClass('/projects')} href="/projects">
                  Projects &amp; Impact
                </Link>
              </li>
              <li>
                <Link className={getFooterLinkClass('/blogs')} href="/blogs">
                  Blog &amp; Publications
                </Link>
              </li> */}
              <li>
                <Link className={getFooterLinkClass('/contact')} href="/contact">
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
                <Phone className="w-4 h-4 text-secondary-fixed shrink-0" />
                <div className="flex flex-col">
                  <a className="hover:text-white transition-colors" href="tel:+2348032424965">
                    +234-803-242-4965
                  </a>
                  <a className="hover:text-white transition-colors" href="tel:+2349129054546">
                    +234-912-905-4546
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary-fixed shrink-0" />
                <div className="flex flex-col">
                  <a
                    className="hover:text-white transition-colors"
                    href="mailto:contact@globallabconnect.com"
                  >
                    contact@globallabconnect.com
                  </a>
                </div>
              </div>
              {/* <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-secondary-fixed shrink-0" />
                <a
                  className="hover:text-white transition-colors"
                  href="https://www.eclaboratory.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  www.eclaboratory.com
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Legal Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm text-inverse-on-surface/50">
          <div>
            © {new Date().getFullYear()} Global LabConnect. All rights reserved. Registered under Nigerian CAC laws (RC
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
