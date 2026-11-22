/**
 * Global LabConnect — Design Prototype
 * Vanilla JS: full-width navigation, services dropdowns, mobile submenu accordion,
 * animated scrolling with sticky header offset, filters, project toggles, form handling.
 */

(function () {
  'use strict';

  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      const openIcon = menuToggle.querySelector('.icon-menu');
      const closeIcon = menuToggle.querySelector('.icon-close');
      if (openIcon && closeIcon) {
        openIcon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });
  }

  // ===== MOBILE SUBMENU TOGGLE (Services 1 & Services 2) =====
  document.querySelectorAll('.mobile-submenu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var targetId = btn.getAttribute('aria-controls');
      var submenu = document.getElementById(targetId);
      if (!submenu) return;
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      submenu.classList.toggle('is-open', !isExpanded);
    });
  });

  // ===== ANIMATED SCROLLING FOR SOLUTION LINKS =====
  // Ensure clicking any solution in the navigation scrolls smoothly to that
  // solution's section and positions it appropriately beneath the sticky navigation.
  function smoothScrollToTarget(hash) {
    if (!hash || hash === '#') return;
    var targetEl = document.querySelector(hash);
    if (!targetEl) return;

    var header = document.querySelector('.site-header');
    var headerHeight = header ? header.offsetHeight : 74;
    var targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20);

    window.scrollTo({
      top: Math.max(0, targetPos),
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('a[href*="#pillar-"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      var hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      var hash = href.substring(hashIndex);

      // Check if current page is services.html (or if link points to current page)
      var currentPath = window.location.pathname;
      var isServicesPage = currentPath.endsWith('services.html') || currentPath.endsWith('services') || document.querySelector(hash);

      if (isServicesPage && document.querySelector(hash)) {
        e.preventDefault();

        // Close mobile nav drawer if open
        if (mainNav && mainNav.classList.contains('is-open')) {
          mainNav.classList.remove('is-open');
          if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            var openIcon = menuToggle.querySelector('.icon-menu');
            var closeIcon = menuToggle.querySelector('.icon-close');
            if (openIcon && closeIcon) {
              openIcon.style.display = 'block';
              closeIcon.style.display = 'none';
            }
          }
        }

        smoothScrollToTarget(hash);
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
      }
    });
  });

  // Handle direct URL hash landing on page load (e.g. services.html#pillar-4)
  if (window.location.hash && window.location.hash.startsWith('#pillar-')) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        smoothScrollToTarget(window.location.hash);
      }, 100);
    });
  }

  // ===== EXPAND / COLLAPSE (Leadership profile & other toggles) =====
  document.querySelectorAll('[data-expand-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-expand-toggle');
      var target = document.getElementById(targetId);
      if (!target) return;
      var isExpanded = target.classList.toggle('is-expanded');
      btn.setAttribute('aria-expanded', isExpanded);
      btn.textContent = isExpanded
        ? (btn.getAttribute('data-collapse-text') || 'Show less')
        : (btn.getAttribute('data-expand-text') || 'Read full profile');
    });
  });

  // ===== PROJECT FILTER TABS =====
  var filterTabs = document.querySelectorAll('[data-filter-tab]');
  var projectCards = document.querySelectorAll('[data-project-type]');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filterValue = tab.getAttribute('data-filter-tab');

      // Update active states
      filterTabs.forEach(function (t) {
        t.setAttribute('aria-pressed', 'false');
        t.classList.remove('is-active');
      });
      tab.setAttribute('aria-pressed', 'true');
      tab.classList.add('is-active');

      // Filter cards
      projectCards.forEach(function (card) {
        if (filterValue === 'all' || card.getAttribute('data-project-type') === filterValue) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== BLOG CATEGORY FILTER CHIPS =====
  var categoryChips = document.querySelectorAll('[data-category-filter]');
  var blogCards = document.querySelectorAll('[data-blog-category]');

  categoryChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var filterValue = chip.getAttribute('data-category-filter');

      categoryChips.forEach(function (c) {
        c.setAttribute('aria-pressed', 'false');
        c.classList.remove('is-active');
      });
      chip.setAttribute('aria-pressed', 'true');
      chip.classList.add('is-active');

      blogCards.forEach(function (card) {
        if (filterValue === 'all' || card.getAttribute('data-blog-category') === filterValue) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===== PROJECT TYPE TOGGLE (prototype single page) =====
  var typeToggleBtns = document.querySelectorAll('[data-type-toggle]');
  var contractedPanel = document.getElementById('panel-contracted');
  var managedPanel = document.getElementById('panel-managed');

  typeToggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var type = btn.getAttribute('data-type-toggle');

      typeToggleBtns.forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      if (contractedPanel && managedPanel) {
        if (type === 'contracted') {
          contractedPanel.style.display = 'block';
          managedPanel.style.display = 'none';
        } else {
          contractedPanel.style.display = 'none';
          managedPanel.style.display = 'block';
        }
      }

      // Update badge on page
      var pageBadge = document.getElementById('project-type-badge');
      if (pageBadge) {
        if (type === 'contracted') {
          pageBadge.className = 'type-badge type-badge--contracted';
          pageBadge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg> Contracted';
        } else {
          pageBadge.className = 'type-badge type-badge--managed';
          pageBadge.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg> Managed';
        }
      }
    });
  });

  // ===== FORM SUBMISSION PREVENTION =====
  document.querySelectorAll('form[data-prototype-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.prototype-message');
      if (msg) {
        msg.classList.add('is-visible');
        msg.textContent = 'This is a design prototype only — form submission is disabled.';
      }
    });
  });

})();
