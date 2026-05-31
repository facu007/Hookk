export function renderContact() {
  return `
    <main class="pt-12 pb-section-gap">
      <!-- Quiénes Somos Section (Asymmetric Layout) -->
      <section class="px-margin-mobile md:px-margin-desktop mb-section-gap max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center text-left">
          <div class="md:col-span-4 order-2 md:order-1 flex flex-col justify-center">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-6 leading-tight font-semibold">
              Identidad<br/>antes que<br/>algoritmo.
            </h1>
            <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
              Diseñamos la imagen de marcas e individuos con una perspectiva creativa y estratégica. Desarrollamos identidad estética, branding, comunicación visual y universos de marca coherentes.
            </p>
            <div class="flex items-center gap-4">
              <span class="font-label-caps text-label-caps text-primary border border-primary px-4 py-2 uppercase tracking-widest text-[10px] font-bold">Estudio Creativo</span>
            </div>
          </div>
          <div class="md:col-span-8 order-1 md:order-2 relative group">
            <div class="absolute inset-0 bg-soft-blush translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 md:group-hover:translate-x-6 md:group-hover:translate-y-6 transition-transform duration-500"></div>
            <img alt="Retrato de las directoras creativas" class="w-full h-[60vh] md:h-[80vh] object-cover border-b border-primary hard-shadow" src="/fts/img6.jpg"/>
            <div class="absolute bottom-4 left-4 bg-background px-6 py-4 hard-shadow max-w-[85%] sm:max-w-md">
              <p class="font-quote-it text-quote-it italic text-primary text-sm sm:text-base leading-relaxed">
                "A good production doesn't start with the camera. It starts long before."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section (Minimalist Form) -->
      <section class="bg-deep-gray text-pure-white py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden w-full">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/10 opacity-10 pointer-events-none"></div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10 max-w-7xl mx-auto text-left">
          <div class="lg:col-span-6 flex flex-col justify-center">
            <h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-4 text-soft-blush font-semibold leading-tight">
              ¿Qué identidad querés construir?
            </h2>
            <p class="font-body-md text-body-md text-outline-variant mb-12 opacity-80">
              Curamos presencias digitales con intención. Cuéntanos sobre tu visión.
            </p>
            <form class="space-y-8" id="inquiry-form">
              <div class="relative">
                <input class="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-soft-blush focus:ring-0 px-0 py-2 font-body-md text-body-md text-pure-white placeholder-transparent peer transition-colors" id="nombre" placeholder="Nombre" type="text" required/>
                <label class="absolute left-0 -top-4 font-label-caps text-label-caps text-outline-variant/60 text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-soft-blush peer-focus:opacity-100 uppercase tracking-widest font-bold" for="nombre">Nombre</label>
              </div>
              <div class="relative">
                <input class="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-soft-blush focus:ring-0 px-0 py-2 font-body-md text-body-md text-pure-white placeholder-transparent peer transition-colors" id="marca" placeholder="Marca" type="text" required/>
                <label class="absolute left-0 -top-4 font-label-caps text-label-caps text-outline-variant/60 text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-soft-blush peer-focus:opacity-100 uppercase tracking-widest font-bold" for="marca">Marca / Proyecto</label>
              </div>
              <div class="relative">
                <select class="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-soft-blush focus:ring-0 px-0 py-2 font-body-md text-body-md text-pure-white/80 appearance-none transition-colors" id="objetivo" required>
                  <option class="text-deep-gray" disabled="" selected="" value="">Objetivo Principal</option>
                  <option class="text-deep-gray" value="branding">Branding &amp; Identidad</option>
                  <option class="text-deep-gray" value="editorial">Producción Editorial</option>
                  <option class="text-deep-gray" value="styling">Asesoramiento de Estilismo</option>
                  <option class="text-deep-gray" value="other">Otro</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-outline-variant">
                  <span class="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
              <div class="relative">
                <input class="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-soft-blush focus:ring-0 px-0 py-2 font-body-md text-body-md text-pure-white placeholder-transparent peer transition-colors" id="redes" placeholder="Redes" type="text"/>
                <label class="absolute left-0 -top-4 font-label-caps text-label-caps text-outline-variant/60 text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-soft-blush peer-focus:opacity-100 uppercase tracking-widest font-bold" for="redes">Redes Sociales (IG / Web)</label>
              </div>
              <div class="relative">
                <input class="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-soft-blush focus:ring-0 px-0 py-2 font-body-md text-body-md text-pure-white placeholder-transparent peer transition-colors" id="presupuesto" placeholder="Presupuesto" type="text"/>
                <label class="absolute left-0 -top-4 font-label-caps text-label-caps text-outline-variant/60 text-[10px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-soft-blush peer-focus:opacity-100 uppercase tracking-widest font-bold" for="presupuesto">Presupuesto Estimado</label>
              </div>
              <button class="mt-8 font-label-caps text-label-caps px-8 py-4 bg-pure-white text-primary hover:bg-soft-blush transition-colors duration-300 w-full md:w-auto uppercase tracking-[0.2em] text-xs font-bold" type="submit" id="submit-btn">
                Enviar Consulta
              </button>
            </form>
            <div id="form-success" class="hidden mt-8 p-6 bg-neutral-900 border border-soft-blush/30 hard-shadow">
              <p class="font-headline-lg-mobile text-[24px] text-soft-blush font-semibold mb-2">¡Consulta Enviada!</p>
              <p class="font-body-md text-sm text-outline-variant">Gracias <strong id="success-name"></strong>, nos pondremos en contacto contigo para construir la identidad de <strong id="success-brand"></strong>.</p>
            </div>
          </div>
          <div class="lg:col-span-5 lg:col-start-8 hidden lg:flex items-center justify-center relative">
            <div class="w-full h-[600px] bg-surface-inverse relative hard-shadow">
              <img alt="Bodegón minimalista de una laptop plateada sobre una mesa rosa" class="w-full h-full object-cover opacity-80" src="/fts/img7.jpg"/>
              <div class="absolute inset-0 bg-deep-gray/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
