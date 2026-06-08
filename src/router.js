import { renderHome, setupHome } from './pages/home.js';
import { renderServices, setupServices } from './pages/services.js';
import { renderPortfolio, setupPortfolio } from './pages/portfolio.js';
import { renderContact } from './pages/contact.js';
import { gsap } from 'gsap';

const pages = {
  home: renderHome,
  services: renderServices,
  portfolio: renderPortfolio,
  contact: renderContact
};

export function initRouter() {
  const canvas = document.getElementById('app-canvas');
  if (!canvas) return;

  // Single global click event delegation listener for client-side routing
  document.addEventListener('click', (e) => {
    const routerLink = e.target.closest('.router-link');
    if (routerLink) {
      e.preventDefault();
      const page = routerLink.getAttribute('data-page');
      if (page) {
        loadPage(page);
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
          mobileMenu.classList.add('translate-x-full');
        }
      }
    }
  });

  function loadPage(pageName, pushToHistory = true) {
    const renderer = pages[pageName] || pages.home;
    
    // Page swap animation
    gsap.to(canvas, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        // Swap content
        canvas.innerHTML = renderer();
        
        // Highlight active navbar items
        updateNavLinks(pageName);
        
        // Setup page specific logic (e.g. contact form)
        if (pageName === 'contact') {
          setupContactForm();
        }
        if (pageName === 'home') {
          setupHome();
        }
        if (pageName === 'services') {
          setupServices();
        }
        if (pageName === 'portfolio') {
          setupPortfolio();
        }

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Fade in new content
        gsap.to(canvas, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out'
        });

        // Re-bind cursor snapping listeners
        if (typeof window.refreshCursorListeners === 'function') {
          window.refreshCursorListeners();
        }
      }
    });

    if (pushToHistory) {
      const path = pageName === 'home' ? '/' : `/${pageName}`;
      history.pushState({ page: pageName }, '', path);
    }
  }

  function updateNavLinks(activePage) {
    const links = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const updateEl = (el) => {
      const page = el.getAttribute('data-page');
      if (page === activePage) {
        el.className = 'nav-link router-link text-primary dark:text-on-background font-bold border-b border-primary pb-1 font-label-caps text-label-caps uppercase text-xs cursor-pointer select-none';
      } else {
        el.className = 'nav-link router-link text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase text-xs cursor-pointer select-none';
      }
    };

    links.forEach(updateEl);
    
    mobileLinks.forEach(el => {
      const page = el.getAttribute('data-page');
      if (page === activePage) {
        el.className = 'mobile-nav-link router-link text-2xl font-headline-lg uppercase font-bold border-b border-primary cursor-pointer select-none';
      } else {
        el.className = 'mobile-nav-link router-link text-2xl font-headline-lg uppercase cursor-pointer select-none';
      }
    });
  }

  function setupContactForm() {
    const form = document.getElementById('inquiry-form');
    const successBlock = document.getElementById('form-success');
    if (!form || !successBlock) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('nombre')?.value || '';
      const brand = document.getElementById('marca')?.value || '';
      
      document.getElementById('success-name').textContent = name;
      document.getElementById('success-brand').textContent = brand;

      gsap.to(form, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        onComplete: () => {
          form.classList.add('hidden');
          successBlock.classList.remove('hidden');
          gsap.fromTo(successBlock, {
            opacity: 0,
            y: 10
          }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    });
  }

  // Handle history back/forward buttons
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
      loadPage(e.state.page, false);
    } else {
      loadPage('home', false);
    }
  });

  // Mobile menu open/close toggles
  const mobileMenu = document.getElementById('mobile-menu');
  const trigger = document.getElementById('mobile-menu-trigger');
  const close = document.getElementById('mobile-menu-close');

  if (mobileMenu && trigger && close) {
    trigger.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });
    close.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });
  }

  // Initialize first page load based on pathname
  const path = window.location.pathname.replace(/^\//, '');
  const initialPage = pages[path] ? path : 'home';
  loadPage(initialPage, false);
}
