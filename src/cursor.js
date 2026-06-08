import { gsap } from 'gsap';

export function initCustomCursor() {
  const cursor = document.getElementById('hooke-cursor');
  const glow = document.getElementById('hooke-cursor-glow');
  const visual = document.getElementById('hooke-cursor-visual');

  if (!cursor || !glow || !visual) return;

  // Detect touch devices and disable custom cursor completely to prevent memory/performance issues on mobile
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  if (isTouchDevice) {
    cursor.style.display = 'none';
    window.refreshCursorListeners = function() {}; // No-op
    return;
  }

  // Use gsap.quickTo for smooth cursor positioning with zero allocation overhead during mousemove
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power2.out" });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power2.out" });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Keep track of snapping state
  let isSnapping = false;

  window.refreshCursorListeners = function() {
    // Select all interactive targets
    const targets = document.querySelectorAll(
      'button, a, input, select, textarea, [data-page], .cursor-pointer'
    );

    targets.forEach(el => {
      if (el.getAttribute('data-cursor-bound')) return;
      el.setAttribute('data-cursor-bound', 'true');

      let elXTo = null;
      let elYTo = null;

      el.addEventListener('mouseenter', () => {
        isSnapping = true;
        // Instantiating quickTo setters only when entering the hover zone
        elXTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power2.out" });
        elYTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power2.out" });

        // Expand custom cursor visuals (runs once per enter, not on move)
        gsap.to(visual, {
          scale: 1.5,
          borderColor: '#FF2D55',
          borderWidth: '2px',
          duration: 0.3,
          overwrite: 'auto'
        });
        
        gsap.to(glow, {
          scale: 2,
          backgroundColor: '#FF2D55',
          opacity: 0.25,
          duration: 0.3,
          overwrite: 'auto'
        });
      });

      el.addEventListener('mousemove', (e) => {
        if (!elXTo || !elYTo) return;
        
        // Element coordinates
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Relative mouse delta
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // Magnetically pull the element slightly towards the mouse using quickTo
        elXTo(dx * 0.22);
        elYTo(dy * 0.22);
      });

      el.addEventListener('mouseleave', () => {
        isSnapping = false;
        elXTo = null;
        elYTo = null;

        // Return element to center with springy elastic bounce
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1.1, 0.4)',
          overwrite: 'auto'
        });

        // Restore default cursor scales
        gsap.to(visual, {
          scale: 1,
          borderColor: '#ffffff',
          borderWidth: '1px',
          duration: 0.3,
          overwrite: 'auto'
        });

        gsap.to(glow, {
          scale: 1,
          backgroundColor: 'transparent',
          opacity: 0,
          duration: 0.3,
          overwrite: 'auto'
        });
      });
    });
  };

  // Initial binding
  setTimeout(() => {
    window.refreshCursorListeners();
  }, 1000);
}
