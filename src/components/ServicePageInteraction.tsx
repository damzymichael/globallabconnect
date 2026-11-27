'use client'

import { useEffect } from 'react'

export default function ServicesPageInteractions() {
  useEffect(() => {
    // Active state highlighting for side index during scroll
    const sections = document.querySelectorAll<HTMLElement>('article[id]')
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('#solution-side-nav a')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id')
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('bg-surface-container-high', 'font-bold')
              } else {
                link.classList.remove('bg-surface-container-high', 'font-bold')
              }
            })
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sections.forEach((sec) => observer.observe(sec))

    // Mobile menu toggle & mobile services accordion
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuIcon = document.getElementById('mobile-menu-icon')

    const handleMobileMenuClick = () => {
      if (!mobileMenu) return
      const isHidden = mobileMenu.classList.contains('hidden')
      if (isHidden) {
        mobileMenu.classList.remove('hidden')
        if (mobileMenuIcon) mobileMenuIcon.textContent = 'close'
      } else {
        mobileMenu.classList.add('hidden')
        if (mobileMenuIcon) mobileMenuIcon.textContent = 'menu'
      }
    }

    mobileMenuBtn?.addEventListener('click', handleMobileMenuClick)

    const mobileServicesBtn = document.getElementById('mobile-services-btn')
    const mobileServicesMenu = document.getElementById('mobile-services-menu')
    const mobileServicesChevron = document.getElementById('mobile-services-chevron')

    const handleMobileServicesClick = (e: Event) => {
      e.preventDefault()
      if (!mobileServicesMenu) return
      const isHidden = mobileServicesMenu.classList.contains('hidden')
      if (isHidden) {
        mobileServicesMenu.classList.remove('hidden')
        mobileServicesChevron?.classList.add('rotate-180')
      } else {
        mobileServicesMenu.classList.add('hidden')
        mobileServicesChevron?.classList.remove('rotate-180')
      }
    }

    mobileServicesBtn?.addEventListener('click', handleMobileServicesClick)

    return () => {
      observer.disconnect()
      mobileMenuBtn?.removeEventListener('click', handleMobileMenuClick)
      mobileServicesBtn?.removeEventListener('click', handleMobileServicesClick)
    }
  }, [])

  return null
}
