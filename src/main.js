import './style.css';
import { initRouter } from './router.js';
import { initCustomCursor } from './cursor.js';
import { initHookeAssistant } from './assistant.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the single page application client-side router
  initRouter();

  // Initialize the premium custom cursor follower
  initCustomCursor();

  // Initialize the interactive conversational qualifier chat assistant
  initHookeAssistant();
});
