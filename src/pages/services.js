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
          <ul class="flex flex-col gap-4 font-label-caps text-label-caps text-primary text-xs w-full">
            <!-- Item 1 -->
            <li class="border-b border-deep-gray pb-4 flex flex-col group cursor-pointer transition-all duration-300 services-accordion-item text-left w-full select-none">
              <div class="flex justify-between items-center w-full py-2 hover:opacity-70 transition-opacity">
                <span class="font-bold tracking-widest text-[11px] sm:text-xs">Dirección Creativa</span>
                <span class="material-symbols-outlined text-sm transition-transform duration-300 arrow-icon">expand_more</span>
              </div>
              <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="font-body-md text-[11px] sm:text-xs text-on-surface-variant pt-2 leading-relaxed opacity-80 normal-case tracking-normal">
                  Conceptualizamos la visión artística global de tu marca o persona. Definimos directrices estéticas sólidas, moodboards curatoriales y narrativas visuales de alto impacto para asegurar que cada elemento comunique con absoluta intención.
                </p>
              </div>
            </li>
            <!-- Item 2 -->
            <li class="border-b border-deep-gray pb-4 flex flex-col group cursor-pointer transition-all duration-300 services-accordion-item text-left w-full select-none">
              <div class="flex justify-between items-center w-full py-2 hover:opacity-70 transition-opacity">
                <span class="font-bold tracking-widest text-[11px] sm:text-xs">Branding &amp; Identidad</span>
                <span class="material-symbols-outlined text-sm transition-transform duration-300 arrow-icon">expand_more</span>
              </div>
              <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="font-body-md text-[11px] sm:text-xs text-on-surface-variant pt-2 leading-relaxed opacity-80 normal-case tracking-normal">
                  Diseñamos sistemas de identidad visual coherentes y memorables. Desde la selección tipográfica de autor y paletas cromáticas exclusivas hasta el desarrollo de logotipos y pautas estéticas que resisten el paso del tiempo.
                </p>
              </div>
            </li>
            <!-- Item 3 -->
            <li class="border-b border-deep-gray pb-4 flex flex-col group cursor-pointer transition-all duration-300 services-accordion-item text-left w-full select-none">
              <div class="flex justify-between items-center w-full py-2 hover:opacity-70 transition-opacity">
                <span class="font-bold tracking-widest text-[11px] sm:text-xs">Producciones Visuales</span>
                <span class="material-symbols-outlined text-sm transition-transform duration-300 arrow-icon">expand_more</span>
              </div>
              <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="font-body-md text-[11px] sm:text-xs text-on-surface-variant pt-2 leading-relaxed opacity-80 normal-case tracking-normal">
                  Coordinamos y ejecutamos sesiones fotográficas y de video de nivel editorial. Nos encargamos del set design, el casting estratégico, la iluminación artística y la dirección creativa en set para materializar imágenes con fuerza y nitidez absoluta.
                </p>
              </div>
            </li>
            <!-- Item 4 -->
            <li class="border-b border-deep-gray pb-4 flex flex-col group cursor-pointer transition-all duration-300 services-accordion-item text-left w-full select-none">
              <div class="flex justify-between items-center w-full py-2 hover:opacity-70 transition-opacity">
                <span class="font-bold tracking-widest text-[11px] sm:text-xs">Campañas</span>
                <span class="material-symbols-outlined text-sm transition-transform duration-300 arrow-icon">expand_more</span>
              </div>
              <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="font-body-md text-[11px] sm:text-xs text-on-surface-variant pt-2 leading-relaxed opacity-80 normal-case tracking-normal">
                  Desarrollamos campañas estéticas integrales para lanzamientos y posicionamiento. Creamos narrativas asimétricas y piezas digitales diseñadas para conectar profundamente con audiencias que valoran el diseño de vanguardia.
                </p>
              </div>
            </li>
            <!-- Item 5 -->
            <li class="border-b border-deep-gray pb-4 flex flex-col group cursor-pointer transition-all duration-300 services-accordion-item text-left w-full select-none">
              <div class="flex justify-between items-center w-full py-2 hover:opacity-70 transition-opacity">
                <span class="font-bold tracking-widest text-[11px] sm:text-xs">Estética Personal</span>
                <span class="material-symbols-outlined text-sm transition-transform duration-300 arrow-icon">expand_more</span>
              </div>
              <div class="accordion-content max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="font-body-md text-[11px] sm:text-xs text-on-surface-variant pt-2 leading-relaxed opacity-80 normal-case tracking-normal">
                  Asesoramos y refinamos la proyección visual de directores creativos, fundadores y figuras públicas. Diseñamos un manual de estilismo físico, pautas de vestuario de autor e identidad digital coherente y sofisticada.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Methodology Section -->
    <section class="bg-primary text-pure-white py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden w-full">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col md:flex-row gap-gutter justify-between items-start md:items-end mb-24 text-left">
          <h2 class="font-display-xl text-[36px] xs:text-[42px] sm:text-[56px] md:text-display-xl text-soft-blush opacity-90 leading-none font-bold tracking-tight">
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
            <div class="hidden md:flex w-full md:aspect-auto md:h-auto md:w-2/5 relative overflow-hidden hard-shadow bg-surface-variant/10 self-center items-center justify-center">
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

export function setupServices() {
  const accordionItems = document.querySelectorAll('.services-accordion-item');
  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.accordion-content');
      const arrow = item.querySelector('.arrow-icon');
      
      const isActive = item.classList.contains('active');
      
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        const otherArrow = otherItem.querySelector('.arrow-icon');
        if (otherContent) otherContent.style.maxHeight = '0px';
        if (otherArrow) {
          otherArrow.style.transform = 'rotate(0deg)';
        }
      });

      if (!isActive) {
        item.classList.add('active');
        if (content) content.style.maxHeight = `${content.scrollHeight}px`;
        if (arrow) {
          arrow.style.transform = 'rotate(180deg)';
        }
      }
    });
  });
}
