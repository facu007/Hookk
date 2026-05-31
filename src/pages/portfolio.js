export function renderPortfolio() {
  return `
    <section class="w-full px-margin-mobile md:px-margin-desktop pt-24 pb-16 flex flex-col items-center text-center max-w-7xl mx-auto">
      <h1 class="font-display-xl text-[48px] sm:text-[64px] md:text-display-xl text-primary max-w-5xl leading-none font-bold">
        Identity Before Algorithm.
      </h1>
      <p class="mt-8 font-body-md text-body-md text-on-surface-variant max-w-2xl">
        A curated selection of editorial transformations. We build coherent visual identities that prioritize intentionality over noise.
      </p>
    </section>

    <!-- Editorial Case Study 1: The Asymmetric Spread -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-16 bg-soft-blush">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center max-w-7xl mx-auto text-left">
        <!-- Text Content -->
        <div class="md:col-span-4 flex flex-col gap-6 order-2 md:order-1 relative z-10">
          <span class="font-label-caps text-label-caps border border-primary px-3 py-1 inline-block w-max text-[10px] font-bold">Case Study 01</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-semibold leading-tight">
            Estilismo &amp; Inspo
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant border-l border-primary pl-4">
            <strong>Contexto:</strong> Marca personal buscando elevar su presencia digital.<br/>
            <strong>Problema:</strong> Falta de cohesión y estética genérica.<br/>
            <strong>Concepto:</strong> "Nada se improvisa". Un enfoque crudo y elegante en la preproducción.
          </p>
          <!-- Glassmorphic Overlay Card -->
          <div class="mt-8 bg-pure-white/90 backdrop-blur-md p-8 border border-outline-variant/50 hard-shadow relative md:-mr-16 z-20">
            <p class="font-quote-it text-quote-it text-primary text-center italic">
              "Sirve para que cada foto, video y detalle tenga intención. Se construye una identidad visual coherente."
            </p>
          </div>
        </div>
        <!-- Imagery -->
        <div class="md:col-span-8 order-1 md:order-2 relative group">
          <div class="aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden bg-surface-variant hard-shadow">
            <img alt="Editorial shot showing styling and inspiration process" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" src="/fts/img4.jpg"/>
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
          <span class="font-label-caps text-label-caps text-on-surface-variant text-[10px] font-bold">Case Study 02</span>
          <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2 font-semibold">
            El Brief
          </h2>
        </div>
        <button class="hidden md:flex items-center gap-2 font-label-caps text-label-caps hover:opacity-70 transition-opacity text-xs font-bold uppercase router-link" data-page="contact">
          Inquire About Project <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter text-left">
        <!-- Large Image Block -->
        <div class="lg:col-span-8 group relative overflow-hidden bg-surface-variant hard-shadow aspect-video">
          <img alt="Briefing and creative direction process" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale contrast-125" src="/fts/img5.jpg"/>
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
          <div class="bg-primary text-pure-white p-8 h-full flex flex-col justify-end min-h-[250px] relative overflow-hidden hard-shadow">
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

    <!-- CTA Section -->
    <section class="w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col items-center text-center bg-deep-gray text-pure-white mt-section-gap">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 max-w-3xl font-semibold leading-tight">
        Ready to redefine your visual identity?
      </h2>
      <button class="font-label-caps text-label-caps tracking-widest border border-pure-white px-8 py-4 bg-pure-white text-primary hover:bg-transparent hover:text-pure-white transition-colors duration-300 text-xs font-bold uppercase router-link" data-page="contact">
        Start a Project
      </button>
    </section>
  `;
}
