import './style.css';
import { initRouter } from './router.js';
import { initCustomCursor } from './cursor.js';
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the single page application client-side router
  initRouter();

  // Initialize the premium custom cursor follower
  initCustomCursor();

  // Run the premium preloader screen
  runPreloader();
});

function runPreloader() {
  const preloader = document.getElementById('hooke-preloader');
  const brand = document.getElementById('preloader-brand');
  const subtitle = document.getElementById('preloader-subtitle');
  const barContainer = document.getElementById('preloader-bar-container');
  const progressBar = document.getElementById('preloader-bar-progress');
  const percentageEl = document.getElementById('preloader-percentage');

  if (!preloader) return;

  // Prevent scroll during loading
  document.body.style.overflow = 'hidden';

  // 1. Initial micro-fades for branding elements
  const tl = gsap.timeline();
  tl.to(brand, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    .to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
    .to([barContainer, percentageEl], { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.4');

  // 2. Numerical counter progress animation
  let loadingProgress = { val: 0 };
  gsap.to(loadingProgress, {
    val: 100,
    duration: 2.0, // Luxurious visual load timing
    ease: 'power2.out',
    onUpdate: () => {
      const pct = Math.floor(loadingProgress.val);
      if (percentageEl) percentageEl.textContent = `${pct}%`;
      if (progressBar) progressBar.style.width = `${pct}%`;
    },
    onComplete: () => {
      // 3. Elegant exit transition
      gsap.timeline()
        .to([brand, subtitle, barContainer, percentageEl], {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power3.in',
          stagger: 0.1
        })
        .to(preloader, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            preloader.remove();
            // Restore scrolling
            document.body.style.overflow = '';
          }
        }, '-=0.3');
    }
  });
}
