'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Cpu,
  BadgeCheck,
  Dna,
  Shield,
  Archive,
  FlaskConical,
  Gavel,
  Virus,
  AlertCircle,
} from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const getDesktopNavLinkClass = (path: string) => {
    if (isActive(path)) {
      return 'font-label-lg text-label-lg transition-colors text-primary-container font-semibold border-b-2 border-primary-container pb-0.5'
    }
    return 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container hover:border-primary-container/40 transition-colors pb-0.5 border-b-2 border-transparent'
  }

  const getMobileNavLinkClass = (path: string) => {
    if (isActive(path)) {
      return 'font-label-lg text-label-lg text-primary-container font-bold py-2 transition-colors'
    }
    return 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container py-2 transition-colors'
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant/40">
      <div className="h-20 w-full px-6 md:px-10 lg:px-12 flex items-center justify-between gap-space-lg">
        <Link className="flex items-center shrink-0" href="/">
          <img
            alt="Global LabConnect"
            className="h-8 w-auto object-contain"
            src="/glc_logo.png"
          />
        </Link>
        <nav className="hidden lg:flex items-center justify-center gap-space-lg mx-auto">
          <Link
            aria-current={isActive('/') ? 'page' : undefined}
            className={getDesktopNavLinkClass('/')}
            href="/"
          >
            Home
          </Link>
          <Link
            aria-current={isActive('/about') ? 'page' : undefined}
            className={getDesktopNavLinkClass('/about')}
            href="/about"
          >
            About
          </Link>
          <div
            className="relative py-4 group"
            id="services-dropdown-container"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              id="services-menu-link"
              className={
                isActive('/services')
                  ? 'font-label-lg text-label-lg transition-colors text-primary-container font-semibold border-b-2 border-primary-container pb-0.5 flex items-center gap-1 cursor-pointer focus:outline-none'
                  : 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container hover:border-primary-container/40 transition-colors flex items-center gap-1 cursor-pointer focus:outline-none pb-0.5 border-b-2 border-transparent'
              }
              href="/services"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-outline group-hover:rotate-180 ${
                  servicesDropdownOpen ? 'rotate-180 text-primary-container' : ''
                }`}
              />
            </Link>
            <div
              id="services-dropdown-menu"
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-150 transition-all duration-200 ${
                servicesDropdownOpen ? 'block opacity-100 visible' : 'hidden group-hover:block'
              }`}
            >
              <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/40 p-4 grid grid-cols-2 gap-2 text-left">
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#laboratory-capacity"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-primary-container transition-colors">
                      Laboratory Capacity
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Workforce development
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#equipment-support"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-secondary transition-colors">
                      Equipment Support
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Diagnostic tech transfer
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#quality-management"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <BadgeCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-primary-container transition-colors">
                      Quality Management
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Standards &amp; accreditation
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#diagnostic-services"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                    <Dna className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-secondary transition-colors">
                      Assay Scale-Up
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Diagnostic services
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#biosafety-biosecurity"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-primary-container transition-colors">
                      Biosafety &amp; Biosecurity
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      International best practices
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#biorepository-development"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                    <Archive className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-secondary transition-colors">
                      Biorepository
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Biospecimen systems
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#clinical-trial-support"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-primary-container transition-colors">
                      Clinical Trial Support
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Research laboratory readiness
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#regulatory-ethics"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                    <Gavel className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-secondary transition-colors">
                      Regulatory &amp; Ethics
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Compliance &amp; governance
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#amr-surveillance"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <Virus className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-primary-container transition-colors">
                      AMR Surveillance
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Antimicrobial monitoring
                    </div>
                  </div>
                </Link>
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#outbreak-investigation"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-body-sm text-on-surface group-hover/item:text-secondary transition-colors">
                      Outbreak Response
                    </div>
                    <div className="text-[12px] leading-tight text-on-surface-variant">
                      Emergency preparedness
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link
            aria-current={isActive('/contact') ? 'page' : undefined}
            className={getDesktopNavLinkClass('/contact')}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3 md:gap-space-lg shrink-0">
          <Link
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary hover:text-on-primary font-label-lg text-label-lg px-6 lg:px-7 py-2.5 lg:py-3 transition-colors whitespace-nowrap shadow-sm font-semibold"
            href="/contact"
          >
            Partner With Us
          </Link>
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-on-surface hover:text-primary-container focus:outline-none flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden w-full bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3">
            <Link
              className={getMobileNavLinkClass('/')}
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={getMobileNavLinkClass('/about')}
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="border-y border-outline-variant/20 py-1">
              <button
                id="mobile-services-btn"
                className="w-full flex items-center justify-between py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer focus:outline-none"
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-primary-container' : ''
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div
                  id="mobile-services-menu"
                  className="pl-2 pr-1 py-2 space-y-2 bg-surface-container-low/60 rounded-xl my-1"
                >
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#laboratory-capacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Users className="w-4 h-4 text-primary-container" />
                    <span>Laboratory Capacity</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#equipment-support"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Cpu className="w-4 h-4 text-secondary" />
                    <span>Equipment Support</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#quality-management"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <BadgeCheck className="w-4 h-4 text-primary-container" />
                    <span>Quality Management</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#diagnostic-services"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Dna className="w-4 h-4 text-secondary" />
                    <span>Assay Scale-Up</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#biosafety-biosecurity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Shield className="w-4 h-4 text-primary-container" />
                    <span>Biosafety &amp; Biosecurity</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#biorepository-development"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Archive className="w-4 h-4 text-secondary" />
                    <span>Biorepository</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#clinical-trial-support"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FlaskConical className="w-4 h-4 text-primary-container" />
                    <span>Clinical Trial Support</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#regulatory-ethics"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Gavel className="w-4 h-4 text-secondary" />
                    <span>Regulatory &amp; Ethics</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#amr-surveillance"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Virus className="w-4 h-4 text-primary-container" />
                    <span>AMR Surveillance</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#outbreak-investigation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <AlertCircle className="w-4 h-4 text-secondary" />
                    <span>Outbreak Response</span>
                  </Link>
                </div>
              )}
            </div>
            <Link
              className={getMobileNavLinkClass('/contact')}
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 sm:hidden">
              <Link
                className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg py-3 transition-colors shadow-sm font-semibold"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
