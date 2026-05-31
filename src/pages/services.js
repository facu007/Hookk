export function renderServices() {
  return `
    <section class="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center max-w-7xl mx-auto">
        <div class="md:col-span-7 relative">
          <div class="absolute -inset-4 bg-soft-blush -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
          <img alt="Blazer de lujo editorial" class="w-full h-auto object-cover hard-shadow" src="/fts/img2.jpg"/>
        </div>
        <div class="md:col-span-4 md:col-start-9 flex flex-col justify-center text-left">
          <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8 leading-tight font-semibold">
            Identidad<br/>Visual.
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant mb-12">
            Diseñamos la imagen de marcas y personas con una mirada creativa y estratégica. Desarrollamos identidad estética, branding, comunicación visual y universos de marca coherentes.
          </p>
          <ul class="flex flex-col gap-6 font-label-caps text-label-caps text-primary text-xs">
            <li class="border-b border-deep-gray pb-2 flex justify-between items-center group cursor-pointer hover:opacity-70 transition-opacity">
              <span>Dirección Creativa</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </li>
            <li class="border-b border-deep-gray pb-2 flex justify-between items-center group cursor-pointer hover:opacity-70 transition-opacity">
              <span>Branding &amp; Identidad</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </li>
            <li class="border-b border-deep-gray pb-2 flex justify-between items-center group cursor-pointer hover:opacity-70 transition-opacity">
              <span>Producciones Visuales</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </li>
            <li class="border-b border-deep-gray pb-2 flex justify-between items-center group cursor-pointer hover:opacity-70 transition-opacity">
              <span>Campañas</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </li>
            <li class="border-b border-deep-gray pb-2 flex justify-between items-center group cursor-pointer hover:opacity-70 transition-opacity">
              <span>Estética Personal</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Methodology Section -->
    <section class="bg-primary text-pure-white py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden w-full">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col md:flex-row gap-gutter justify-between items-start md:items-end mb-24 text-left">
          <h2 class="font-display-xl text-[48px] sm:text-[64px] md:text-display-xl text-soft-blush opacity-90 leading-none font-bold">
            METOD<br class="hidden md:block"/>OLOGÍA
          </h2>
          <p class="font-quote-it text-quote-it md:w-1/3 mb-4 text-outline-variant italic">
            "Una buena producción no empieza con la cámara. Empieza mucho antes."
          </p>
        </div>
        <!-- Methodology Steps Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-deep-gray border border-deep-gray text-left">
          <!-- Step 01 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">01</span>
            <h3 class="font-headline-lg-mobile text-[28px] sm:text-[32px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Descubrimiento</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Análisis profundo de la esencia de la marca, mercado y objetivos. Entender el "por qué" antes del "qué".</p>
          </div>
          <!-- Step 02 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">02</span>
            <h3 class="font-headline-lg-mobile text-[28px] sm:text-[32px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Estrategia</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Definición de pilares comunicacionales, tono de voz y dirección de arte preliminar para asegurar coherencia.</p>
          </div>
          <!-- Step 03 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">03</span>
            <h3 class="font-headline-lg-mobile text-[28px] sm:text-[32px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Conceptualización</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Creación de moodboards, referencias visuales y el hilo conductor narrativo que guiará la producción.</p>
          </div>
          <!-- Step 04 -->
          <div class="bg-primary p-8 md:p-10 group hover:bg-neutral-900 transition-colors duration-500 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-8 items-stretch">
            <div class="w-full md:w-1/2 flex flex-col justify-center text-left">
              <span class="font-label-caps text-label-caps text-soft-blush block mb-6 md:mb-8 text-xs font-bold">04</span>
              <h3 class="font-headline-lg-mobile text-[32px] sm:text-[40px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Pre-producción</h3>
              <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Casting, scouting de locaciones, estilismo, set design y planificación técnica detallada.</p>
            </div>
            <div class="w-full h-[200px] md:h-auto md:w-2/5 relative overflow-hidden hard-shadow bg-surface-variant/10 self-center flex items-center justify-center">
              <img alt="Gráfico editorial de la marca HOOK" class="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-all duration-700" src="/fts/hook_editorial_graphic.png"/>
            </div>
          </div>
          <!-- Step 05 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">05</span>
            <h3 class="font-headline-lg-mobile text-[28px] sm:text-[32px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Ejecución</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Dirección en set, captura de imágenes y supervisión estética para garantizar la visión creativa.</p>
          </div>
          <!-- Step 06 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">06</span>
            <h3 class="font-headline-lg-mobile text-[28px] sm:text-[32px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Post-producción</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed">Retoque high-end, color grading y edición para perfeccionar la estética final de las piezas.</p>
          </div>
          <!-- Step 07 -->
          <div class="bg-primary p-10 group hover:bg-neutral-900 transition-colors duration-500 md:col-span-2">
            <span class="font-label-caps text-label-caps text-soft-blush block mb-8 text-xs font-bold">07</span>
            <h3 class="font-headline-lg-mobile text-[32px] sm:text-[40px] leading-tight mb-4 group-hover:text-soft-blush transition-colors font-semibold">Evolución</h3>
            <p class="font-body-md text-outline-variant text-xs opacity-80 leading-relaxed md:w-2/3">Entrega de assets, guías de implementación y revisión continua para asegurar que la identidad respire y crezca de forma coherente en todos los puntos de contacto.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
