'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const getDesktopNavLinkClass = (path: string) => {
    if (isActive(path)) {
      return 'font-label-lg text-label-lg transition-colors text-primary-container font-semibold border-b-2 border-primary-container pb-0.5'
    }
    return 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors pb-0.5 border-b-2 border-transparent'
  }

  const getMobileNavLinkClass = (path: string) => {
    if (isActive(path)) {
      return 'font-label-lg text-label-lg text-primary-container font-bold py-2 transition-colors'
    }
    return 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface py-2 transition-colors'
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
          <div className="relative py-2 group" id="services-dropdown-container">
            <Link
              id="services-menu-link"
              className={
                isActive('/services')
                  ? 'font-label-lg text-label-lg transition-colors text-primary-container font-semibold border-b-2 border-primary-container pb-0.5 flex items-center gap-1 cursor-pointer focus:outline-none'
                  : 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-1 cursor-pointer focus:outline-none pb-0.5 border-b-2 border-transparent'
              }
              href="/services"
            >
              <span>Services</span>
              <span
                id="services-chevron"
                className="material-symbols-outlined text-[18px] transition-transform duration-200 text-outline group-hover:rotate-180"
              >
                expand_more
              </span>
            </Link>
            <div
              id="services-dropdown-menu"
              className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-50 w-150"
            >
              <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/40 p-4 grid grid-cols-2 gap-2 text-left">
                <Link
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                  href="/services#laboratory-capacity"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-fixed/40 text-primary-container flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">groups</span>
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
                    <span className="material-symbols-outlined text-[18px]">
                      precision_manufacturing
                    </span>
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
                    <span className="material-symbols-outlined text-[18px]">verified</span>
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
                    <span className="material-symbols-outlined text-[18px]">biotech</span>
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
                    <span className="material-symbols-outlined text-[18px]">shield</span>
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
                    <span className="material-symbols-outlined text-[18px]">inventory_2</span>
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
                    <span className="material-symbols-outlined text-[18px]">science</span>
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
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
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
                    <span className="material-symbols-outlined text-[18px]">coronavirus</span>
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
                    <span className="material-symbols-outlined text-[18px]">emergency</span>
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
            aria-current={isActive('/projects') ? 'page' : undefined}
            className={getDesktopNavLinkClass('/projects')}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            aria-current={isActive('/blogs') ? 'page' : undefined}
            className={getDesktopNavLinkClass('/blogs')}
            href="/blogs"
          >
            Blog
          </Link>
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
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary hover:text-on-primary font-label-lg text-label-lg px-6 lg:px-7 py-2.5 lg:py-3 transition-colors whitespace-nowrap shadow-sm"
            href="/contact"
          >
            Partner With Us
          </Link>
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-on-surface hover:text-primary-container focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span id="mobile-menu-icon" className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
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
                className="w-full flex items-center justify-between py-2 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer focus:outline-none"
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <span
                  id="mobile-services-chevron"
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
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
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      groups
                    </span>
                    <span>Laboratory Capacity</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#equipment-support"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      precision_manufacturing
                    </span>
                    <span>Equipment Support</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#quality-management"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      verified
                    </span>
                    <span>Quality Management</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#diagnostic-services"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      biotech
                    </span>
                    <span>Assay Scale-Up</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#biosafety-biosecurity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      shield
                    </span>
                    <span>Biosafety &amp; Biosecurity</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#biorepository-development"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      inventory_2
                    </span>
                    <span>Biorepository</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#clinical-trial-support"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      science
                    </span>
                    <span>Clinical Trial Support</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#regulatory-ethics"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      gavel
                    </span>
                    <span>Regulatory &amp; Ethics</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#amr-surveillance"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      coronavirus
                    </span>
                    <span>AMR Surveillance</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-lowest transition-colors text-body-sm font-semibold text-on-surface"
                    href="/services#outbreak-investigation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      emergency
                    </span>
                    <span>Outbreak Response</span>
                  </Link>
                </div>
              )}
            </div>
            <Link
              className={getMobileNavLinkClass('/projects')}
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              className={getMobileNavLinkClass('/blogs')}
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              className={getMobileNavLinkClass('/contact')}
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 sm:hidden">
              <Link
                className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg py-3 transition-colors shadow-sm"
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
