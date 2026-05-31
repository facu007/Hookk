import { gsap } from 'gsap';

export function initCustomCursor() {
  const cursor = document.getElementById('hooke-cursor');
  const glow = document.getElementById('hooke-cursor-glow');
  const visual = document.getElementById('hooke-cursor-visual');

  if (!cursor || !glow || !visual) return;

  // Track global coordinates
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Render on mouse movement
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      duration: 0.1,
      ease: 'power2.out'
    });
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

      el.addEventListener('mousemove', (e) => {
        isSnapping = true;
        
        // Element coordinates
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Relative mouse delta
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // Magnetically pull the element slightly towards the mouse
        gsap.to(el, {
          x: dx * 0.22,
          y: dy * 0.22,
          duration: 0.3,
          ease: 'power2.out'
        });

        // Snap and expand custom cursor visuals
        gsap.to(visual, {
          scale: 1.5,
          borderColor: '#FF2D55',
          borderWidth: '2px',
          duration: 0.3
        });
        
        gsap.to(glow, {
          scale: 2,
          backgroundColor: '#FF2D55',
          opacity: 0.25,
          duration: 0.3
        });
      });

      el.addEventListener('mouseleave', () => {
        isSnapping = false;

        // Return element to center with springy elastic bounce
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1.1, 0.4)'
        });

        // Restore default cursor scales
        gsap.to(visual, {
          scale: 1,
          borderColor: '#ffffff',
          borderWidth: '1px',
          duration: 0.3
        });

        gsap.to(glow, {
          scale: 1,
          backgroundColor: 'transparent',
          opacity: 0,
          duration: 0.3
        });
      });
    });
  };

  // Initial binding
  setTimeout(() => {
    window.refreshCursorListeners();
  }, 1000);
}
