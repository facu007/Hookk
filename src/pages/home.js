export function renderHome() {
  return `
    <!-- Hero Section (Cinemático Absoluto) -->
    <section class="min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop pt-20 relative overflow-hidden bg-black text-pure-white">
      <!-- Full Screen Background Video Layer -->
      <div class="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video id="hero-editorial-video" autoplay muted loop playsinline class="w-full h-full object-cover opacity-70 z-0">
          <source src="/fts/puedes_quitar_esa_frase_del_vi.mp4" type="video/mp4">
          Tu navegador no soporta la etiqueta de video.
        </video>
        <!-- Overlay de gradientes oscuros para legibilidad cinemática -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-black/30 z-10"></div>
        <div class="absolute inset-0 bg-black/25 mix-blend-overlay z-10"></div>
      </div>

      <!-- Typography and Content Overlaid -->
      <div class="relative z-10 max-w-7xl mx-auto w-full py-12 flex flex-col gap-6 text-left">
        <h1 class="font-display-xl text-[42px] sm:text-[68px] md:text-display-xl tracking-tighter leading-none text-pure-white uppercase font-bold">
          Identidad<br/>
          <span class="italic font-quote-it text-[32px] sm:text-[48px] md:text-[80px] lowercase tracking-normal font-normal text-transparent" style="-webkit-text-stroke: 1.5px #FFFFFF;">antes que</span><br/>
          Algoritmo.
        </h1>
        <p class="font-body-md text-body-md text-pure-white max-w-xl border-l-2 border-pure-white pl-4 md:pl-6 mt-4 opacity-90">
          Creamos universos visuales para marcas y personas que quieren ser recordadas. Rechazamos el ruido digital en favor de una estética editorial de alto impacto.
        </p>
      </div>



      <!-- Floating Glassmorphic Video Play/Pause Control -->
      <div class="absolute bottom-10 right-margin-mobile md:right-margin-desktop z-20">
        <button id="hero-video-toggle" class="flex items-center justify-center h-12 w-12 rounded-full bg-pure-white/10 backdrop-blur-md border border-pure-white/20 text-pure-white hover:bg-pure-white/25 active:scale-95 transition-colors duration-300 shadow-xl cursor-pointer" aria-label="Pausar video">
          <span class="material-symbols-outlined text-xl pointer-events-none">pause</span>
        </button>
      </div>
    </section>

    <!-- The Problem Section (Asymmetric Manifesto) -->
    <section class="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div class="md:col-span-6 md:col-start-1 text-left">
            <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight font-semibold">El mar de la <br/>homogeneidad.</h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6">
              Hoy, las marcas se copian unas a otras persiguiendo métricas vacías. El resultado es un paisaje visual aburrido, predecible y olvidable.
            </p>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Nosotros creemos que la verdadera diferenciación no viene de un filtro de moda, sino de una comprensión profunda de quién eres y cómo quieres ser percibido en el mundo.
            </p>
          </div>
          <div class="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative group">
            <div class="bg-surface-container-highest w-full aspect-[3/4] hard-shadow relative overflow-hidden flex items-center justify-center p-8">
              <img src="/fts/img3.jpg" alt="Estética e identidad con intención" class="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-black/50 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
              <span class="relative z-20 font-quote-it text-quote-it text-pure-white italic text-center">"Si te ves como todos, no eres nadie."</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy / Editorial Spread -->
    <section class="py-section-gap bg-deep-gray text-pure-white overflow-hidden">
      <div class="w-full mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div class="lg:col-span-4 lg:order-2 flex flex-col justify-center mb-12 lg:mb-0 text-left">
            <div class="border-b border-surface-tint/30 pb-4 mb-8">
              <span class="font-label-caps text-label-caps tracking-widest uppercase text-outline-variant text-xs">Nuestra Filosofía</span>
            </div>
            <h3 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight font-semibold">Diseño con<br/>Intención.</h3>
            <p class="font-body-md text-body-md text-surface-variant mb-8 opacity-80">
              Cada decisión visual, desde la paleta de colores hasta la tipografía, está meticulosamente calculada para evocar una emoción específica. No dejamos nada al azar.
            </p>
            <a class="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase hover:text-soft-blush transition-colors w-fit border-b border-pure-white pb-1 text-xs router-link" href="#" data-page="services">
              Descubre el proceso
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div class="lg:col-span-7 lg:order-1 relative">
            <div class="relative w-full aspect-video md:aspect-[16/9] hard-shadow bg-surface-tint">
              <img alt="Tactile briefing design process" class="w-full h-full object-cover object-center opacity-90" src="/fts/img88.png"/>
              <div class="absolute top-0 right-0 h-full flex flex-col justify-between py-4 pr-4 text-right mix-blend-difference">
                <span class="font-display-xl text-[60px] md:text-[80px] leading-none opacity-20 font-bold">01</span>
                <span class="font-display-xl text-[60px] md:text-[80px] leading-none opacity-20 font-bold">02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Manifesto Highlight -->
    <section class="py-section-gap px-margin-mobile md:px-margin-desktop bg-soft-blush text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div class="max-w-4xl mx-auto">
        <span class="material-symbols-outlined text-5xl mb-8 text-primary">format_quote</span>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12 font-semibold">
          Las marcas que sobreviven no son las que siguen tendencias. Son las que construyen <span class="italic font-quote-it text-[1.1em] font-normal">identidad</span>.
        </h2>
        <a class="bg-primary text-pure-white px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-neutral-800 transition-colors inline-block text-xs router-link" href="#" data-page="services">
          Lee el Manifiesto Completo
        </a>
      </div>
    </section>
  `;
}

export function setupHome() {
  const video = document.getElementById('hero-editorial-video');
  const toggleBtn = document.getElementById('hero-video-toggle');
  if (!video || !toggleBtn) return;

  const icon = toggleBtn.querySelector('span');

  // Modern browsers block autoplay or delay it under strict policies.
  // We check if the video is successfully playing, otherwise set the play icon.
  video.play().then(() => {
    if (icon) icon.textContent = 'pause';
    toggleBtn.setAttribute('aria-label', 'Pausar video');
  }).catch(err => {
    console.log('Autoplay deferred or blocked. User interaction required:', err);
    if (icon) icon.textContent = 'play_arrow';
    toggleBtn.setAttribute('aria-label', 'Reproducir video');
  });

  toggleBtn.addEventListener('click', () => {
    const currentIcon = toggleBtn.querySelector('span');
    if (video.paused) {
      video.play().then(() => {
        if (currentIcon) currentIcon.textContent = 'pause';
        toggleBtn.setAttribute('aria-label', 'Pausar video');
      }).catch(err => console.log('Playback failed:', err));
    } else {
      video.pause();
      if (currentIcon) currentIcon.textContent = 'play_arrow';
      toggleBtn.setAttribute('aria-label', 'Reproducir video');
    }
  });
}

