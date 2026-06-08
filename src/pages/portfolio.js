import { gsap } from 'gsap';

export function renderPortfolio() {
  return `
    <section class="w-full px-margin-mobile md:px-margin-desktop pt-24 pb-16 flex flex-col items-center text-center max-w-7xl mx-auto">
      <h1 class="font-display-xl text-[48px] sm:text-[64px] md:text-display-xl text-primary max-w-5xl leading-none font-bold">
        Identidad antes que algoritmo.
      </h1>
      <p class="mt-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Una selección curada de transformaciones editoriales. Creamos identidades visuales coherentes que priorizan la intención sobre el ruido.
      </p>
    </section>

    <!-- Editorial Case Study 1: The Asymmetric Spread -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-16 bg-soft-blush">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center max-w-7xl mx-auto text-left">
        <!-- Text Content -->
        <div class="md:col-span-4 flex flex-col gap-6 order-2 md:order-1 relative z-10">
          <span class="font-label-caps text-label-caps border border-primary px-3 py-1 inline-block w-max text-[10px] font-bold">Caso de Estudio 01</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold leading-tight">
            Estilismo &amp; Inspo
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant border-l border-primary pl-4">
            <strong>Contexto:</strong> Marca personal buscando elevar su presencia digital.<br/>
            <strong>Problema:</strong> Falta de cohesión y estética genérica.<br/>
            <strong>Concepto:</strong> "Nada se improvisa". Un enfoque crudo y elegante en la preproducción.
          </p>
          <!-- Glassmorphic Overlay Card -->
          <div class="mt-8 bg-surface-container/90 backdrop-blur-md p-8 border border-outline-variant/50 hard-shadow relative md:-mr-16 z-20">
            <p class="font-quote-it text-quote-it text-primary text-center italic">
              "Sirve para que cada foto, video y detalle tenga intención. Se construye una identidad visual coherente."
            </p>
          </div>
        </div>
        <!-- Imagery -->
        <div class="md:col-span-8 order-1 md:order-2 relative group">
          <div class="aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-surface-variant hard-shadow">
            <img alt="Toma editorial que muestra el proceso de estilismo e inspiración" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/fts/img4.jpg"/>
          </div>
          <!-- Vertical Text Anchor -->
          <div class="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block mix-blend-difference z-20 pointer-events-none">
            <span class="text-vertical font-headline-lg text-headline-lg text-pure-white whitespace-nowrap tracking-widest opacity-80 uppercase select-none block writing-vertical">
              MARCA PERSONAL
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacer -->
    <div class="h-24 md:h-32 w-full"></div>

    <!-- Editorial Case Study 2: Bento Minimal -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-16 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-deep-gray pb-6 text-left">
        <div>
          <span class="font-label-caps text-label-caps text-on-surface-variant text-[10px] font-bold">Caso de Estudio 02</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2 font-semibold">
            El Brief
          </h2>
        </div>
        <button class="hidden md:flex items-center gap-2 font-label-caps text-label-caps hover:opacity-70 transition-opacity text-xs font-bold uppercase router-link" data-page="contact">
          Consultar sobre el proyecto <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter text-left">
        <!-- Large Image Block -->
        <div class="lg:col-span-8 group relative overflow-hidden bg-surface-variant hard-shadow aspect-video">
          <img alt="Proceso de brief y dirección creativa" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/fts/img5.jpg"/>
          <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <!-- Bento Stack -->
        <div class="lg:col-span-4 flex flex-col gap-gutter">
          <!-- Text Block -->
          <div class="bg-surface p-8 h-full flex flex-col justify-center relative border border-outline-variant/30 hard-shadow">
            <div class="absolute top-0 left-0 w-2 h-full bg-soft-blush"></div>
            <h3 class="font-headline-lg text-[28px] sm:text-[32px] leading-tight text-primary mb-4 font-semibold">Dirección Creativa</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              El documento donde bajamos ideas, objetivos, estética y dirección antes de producir. Antes de una producción, hay algo que define TODO.
            </p>
          </div>
          <!-- Accent Image/Block -->
          <div class="bg-deep-gray text-pure-white p-8 h-full flex flex-col justify-end min-h-[250px] relative overflow-hidden hard-shadow">
            <div class="absolute -bottom-10 -right-10 text-[120px] font-headline-lg opacity-10 pointer-events-none font-bold leading-none select-none">
              HOOK
            </div>
            <p class="font-label-caps text-label-caps tracking-widest mb-2 opacity-70 text-[10px] font-bold uppercase">Resultado</p>
            <p class="font-quote-it text-quote-it italic">
              Cabello con raya al medio y glam sutil. Acabado natural y elegante.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacer -->
    <div class="h-24 md:h-32 w-full"></div>

    <!-- The Visual Archive / Bento Grid Gallery -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-16 bg-surface-container-lowest text-left border-t border-outline-variant/30">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-6">
          <div>
            <span class="font-label-caps text-label-caps text-secondary text-[10px] font-bold">Galería</span>
            <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2 font-semibold">
              Archivo Editorial.
            </h2>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0 opacity-80">
            Una colección de fragmentos y texturas de producciones recientes. Haz clic en cualquier elemento para expandirlo.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter" id="portfolio-gallery">
          
          <!-- Item 1 (img1.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-square" data-src="/fts/img1.jpg" data-type="image" data-title="Diseño Editorial" data-desc="Composición minimalista y dirección de arte en set corporativo y de moda.">
            <img src="/fts/img1.jpg" alt="Diseño Editorial" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">PRODUCCIÓN</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Diseño Editorial</h4>
            </div>
          </div>

          <!-- Item 2 (img2.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-[3/4] sm:row-span-2" data-src="/fts/img2.jpg" data-type="image" data-title="Estilismo de Blazer" data-desc="Enfoque y sastrería de autor en set para campaña editorial de indumentaria de lujo.">
            <img src="/fts/img2.jpg" alt="Estilismo de Blazer" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">SASTRERÍA</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Estilismo de Blazer</h4>
            </div>
          </div>

          <!-- Item 3 (Video Loop) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-video sm:col-span-2" data-src="/fts/puedes_quitar_esa_frase_del_vi.mp4" data-type="video" data-title="Texturas y Movimiento" data-desc="Visuales cinematográficos en movimiento lento que capturan luz y sutileza formal.">
            <video autoplay muted loop playsinline class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <source src="/fts/puedes_quitar_esa_frase_del_vi.mp4" type="video/mp4">
            </video>
            <div class="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-pure-white/20 h-8 w-8 rounded-full flex items-center justify-center text-pure-white z-20">
              <span class="material-symbols-outlined text-sm">play_arrow</span>
            </div>
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">CINEMÁTICA</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Texturas en Movimiento</h4>
            </div>
          </div>

          <!-- Item 4 (img3.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-square" data-src="/fts/img3.jpg" data-type="image" data-title="Detalle de Silueta" data-desc="Juegos formales con contrastes marcados de luces y sombras para marcar texturas.">
            <img src="/fts/img3.jpg" alt="Detalle de Silueta" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">ILUMINACIÓN</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Detalle de Silueta</h4>
            </div>
          </div>

          <!-- Item 5 (img5.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-square" data-src="/fts/img5.jpg" data-type="image" data-title="Dirección Creativa" data-desc="El Brief y la conceptualización de referencias estéticas e históricas.">
            <img src="/fts/img5.jpg" alt="Dirección Creativa" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">EL BRIEF</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Dirección Creativa</h4>
            </div>
          </div>

          <!-- Item 6 (img6.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-[3/4]" data-src="/fts/img6.jpg" data-type="image" data-title="Detrás de Escena" data-desc="El equipo creativo analizando y planificando la toma final en el set de producción.">
            <img src="/fts/img6.jpg" alt="Detrás de Escena" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">PRODUCCIÓN</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Detrás de Escena</h4>
            </div>
          </div>

          <!-- Item 7 (img7.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-square" data-src="/fts/img7.jpg" data-type="image" data-title="Still Life / Bodegón" data-desc="Composiciones de bodegón minimalista sobre tonos pastel que resaltan la pureza de las formas.">
            <img src="/fts/img7.jpg" alt="Still Life / Bodegón" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">STILL LIFE</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Still Life / Bodegón</h4>
            </div>
          </div>

          <!-- Item 8 (img88.png) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-square" data-src="/fts/img88.png" data-type="image" data-title="Briefing Board" data-desc="El mapeo y plan táctico de estilismos antes de comenzar el rodaje.">
            <img src="/fts/img88.png" alt="Briefing Board" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">PROCESO</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Briefing Board</h4>
            </div>
          </div>

          <!-- Item 9 (img4.jpg) -->
          <div class="gallery-item group cursor-pointer relative overflow-hidden bg-surface-variant hard-shadow aspect-[3/4]" data-src="/fts/img4.jpg" data-type="image" data-title="Estilismo e Inspiración" data-desc="Moodboard y referencias iniciales para coordinar la línea editorial.">
            <img src="/fts/img4.jpg" alt="Estilismo e Inspiración" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
              <span class="font-label-caps text-label-caps text-secondary text-[9px] font-bold uppercase mb-1">INSPIRACIÓN</span>
              <h4 class="font-headline-lg text-[18px] text-pure-white font-semibold leading-tight">Estilismo & Inspo</h4>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Full-Screen Lightbox Modal -->
    <div id="gallery-lightbox" class="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md hidden opacity-0 flex flex-col justify-between p-6 md:p-12 transition-all duration-300">
      <!-- Lightbox Header / Controls -->
      <div class="flex justify-between items-center w-full z-[10002]">
        <div class="text-left">
          <span class="font-label-caps text-label-caps text-secondary text-[10px] font-bold tracking-widest uppercase">HOOK STUDIO / ARCHIVO</span>
        </div>
        <button id="lightbox-close" class="text-pure-white hover:opacity-75 transition-opacity h-12 w-12 flex items-center justify-center bg-pure-white/10 rounded-full border border-pure-white/10 cursor-pointer">
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      <!-- Lightbox Main Content Slot -->
      <div class="flex-grow flex items-center justify-center max-w-5xl mx-auto w-full relative z-[10001] my-8">
        <!-- Prev Arrow -->
        <button id="lightbox-prev" class="absolute left-0 md:-left-16 text-pure-white hover:opacity-75 transition-opacity h-12 w-12 flex items-center justify-center bg-pure-white/5 rounded-full border border-pure-white/10 cursor-pointer">
          <span class="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        <!-- Dynamic media element inserts here -->
        <div id="lightbox-media-container" class="w-full max-h-[70vh] flex items-center justify-center relative overflow-hidden shadow-2xl">
          <!-- Content injected dynamically -->
        </div>

        <!-- Next Arrow -->
        <button id="lightbox-next" class="absolute right-0 md:-right-16 text-pure-white hover:opacity-75 transition-opacity h-12 w-12 flex items-center justify-center bg-pure-white/5 rounded-full border border-pure-white/10 cursor-pointer">
          <span class="material-symbols-outlined text-2xl">arrow_forward</span>
        </button>
      </div>

      <!-- Lightbox Footer / Metadata -->
      <div class="w-full text-center z-[10002] max-w-3xl mx-auto flex flex-col gap-2">
        <h3 id="lightbox-title" class="font-headline-lg text-[24px] md:text-[32px] text-pure-white font-semibold">Title</h3>
        <p id="lightbox-desc" class="font-body-md text-sm md:text-base text-on-surface-variant opacity-80 max-w-xl mx-auto">Description</p>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center bg-deep-gray text-pure-white mt-section-gap">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 max-w-3xl font-semibold leading-tight">
        ¿Listo para redefinir tu identidad visual?
      </h2>
      <button class="font-label-caps text-label-caps tracking-widest border border-pure-white px-8 py-4 bg-pure-white text-primary hover:bg-transparent hover:text-pure-white transition-colors duration-300 text-xs font-bold uppercase router-link" data-page="contact">
        Comenzar un proyecto
      </button>
    </section>
  `;
}

export function setupPortfolio() {
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('gallery-lightbox');
  const mediaContainer = document.getElementById('lightbox-media-container');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');

  if (!lightbox || !mediaContainer || galleryItems.length === 0) return;

  let currentIndex = 0;

  function updateLightboxContent(index) {
    if (index < 0 || index >= galleryItems.length) return;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    const src = item.getAttribute('data-src');
    const type = item.getAttribute('data-type');
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');

    // Clear previous media
    mediaContainer.innerHTML = '';

    let mediaEl;
    if (type === 'video') {
      mediaEl = document.createElement('video');
      mediaEl.src = src;
      mediaEl.autoplay = true;
      mediaEl.muted = false;
      mediaEl.controls = true;
      mediaEl.loop = true;
      mediaEl.playsInline = true;
      mediaEl.className = 'max-w-full max-h-[70vh] object-contain shadow-2xl';
    } else {
      mediaEl = document.createElement('img');
      mediaEl.src = src;
      mediaEl.alt = title;
      mediaEl.className = 'max-w-full max-h-[70vh] object-contain shadow-2xl';
    }

    mediaContainer.appendChild(mediaEl);
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
  }

  function openLightbox(index) {
    updateLightboxContent(index);
    document.body.style.overflow = 'hidden';

    // GSAP Fade In
    lightbox.classList.remove('hidden');
    gsap.fromTo(lightbox, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.35, ease: 'power2.out' }
    );
  }

  function closeLightbox() {
    gsap.to(lightbox, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        lightbox.classList.add('hidden');
        mediaContainer.innerHTML = ''; // Stop video playback
        document.body.style.overflow = '';
      }
    });
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let nextIdx = currentIndex - 1;
      if (nextIdx < 0) nextIdx = galleryItems.length - 1;
      updateLightboxContent(nextIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let nextIdx = currentIndex + 1;
      if (nextIdx >= galleryItems.length) nextIdx = 0;
      updateLightboxContent(nextIdx);
    });
  }

  // Keyboard Navigation
  const keyHandler = (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevBtn?.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn?.click();
    }
  };
  
  document.addEventListener('keydown', keyHandler);
}
