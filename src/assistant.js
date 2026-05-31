import { gsap } from 'gsap';

export function initHookeAssistant() {
  const chatWindow = document.getElementById('hooke-assistant-chat');
  const launcher = document.getElementById('hooke-assistant-launcher');
  const closeBtn = document.getElementById('hooke-assistant-close');
  const sendBtn = document.getElementById('hooke-assistant-send');
  const inputField = document.getElementById('hooke-assistant-input');
  const messagesContainer = document.getElementById('hooke-assistant-messages');
  const iconChat = document.getElementById('hooke-assistant-icon-chat');
  const iconClose = document.getElementById('hooke-assistant-icon-close');
  const micBtn = document.getElementById('hooke-assistant-mic');

  if (!chatWindow || !launcher || !closeBtn || !sendBtn || !inputField || !messagesContainer) {
    console.warn('Hooke Assistant elements missing.');
    return;
  }

  // Speech Recognition dictation setup
  let isRecording = false;
  let recognition = null;

  if (micBtn) {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'es-ES';
      recognition.interimResults = false;

      recognition.onstart = () => {
        isRecording = true;
        micBtn.classList.add('mic-recording');
        inputField.placeholder = 'Escuchando tu voz...';
      };

      recognition.onend = () => {
        isRecording = false;
        micBtn.classList.remove('mic-recording');
        inputField.placeholder = 'Escribe tu consulta estratégica...';
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputField.value = transcript;
        inputField.focus();
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        isRecording = false;
        micBtn.classList.remove('mic-recording');
        inputField.placeholder = 'Escribe tu consulta estratégica...';

        if (event.error === 'not-allowed') {
          addMessage('bot', `
            <p class="font-bold text-[#ba1a1a] mb-1 flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">lock</span> 
              Permiso de Micrófono Requerido
            </p>
            <p class="mb-2">No he podido acceder a tu micrófono. Esto suele ocurrir por dos motivos:</p>
            <ul class="list-disc pl-4 space-y-1.5 mb-1 text-[10px] leading-relaxed">
              <li><strong>Configuración:</strong> Asegúrate de otorgar permisos en la configuración del navegador.</li>
              <li><strong>Entorno Seguro (HTTPS):</strong> Los navegadores restringen el reconocimiento de voz en entornos locales HTTP no seguros. Funcionará inmediatamente en producción bajo HTTPS.</li>
            </ul>
          `);
        }
      };

      micBtn.addEventListener('click', () => {
        if (isRecording) {
          recognition.stop();
        } else {
          recognition.start();
        }
      });
    } else {
      micBtn.style.display = 'none';
    }
  }

  let isOpen = false;
  let isTyping = false;

  // Conversational qualifier trackers
  let currentFlow = null; // 'quote' or 'audit'
  let flowStep = 0;
  let leadData = {
    name: '',
    brand: '',
    objective: '',
    email: '',
    instagram: ''
  };
  let auditData = {
    brandName: '',
    focusArea: ''
  };

  function toggleChat(forceState = null) {
    isOpen = forceState !== null ? forceState : !isOpen;

    if (isOpen) {
      chatWindow.classList.remove('pointer-events-none');
      gsap.to(chatWindow, {
        x: 0,
        duration: 0.45,
        ease: 'power3.out'
      });
      iconChat.classList.add('hidden');
      iconClose.classList.remove('hidden');
      document.body.classList.add('assistant-open');

      if (messagesContainer.children.length === 0) {
        triggerWelcomeSequence();
      }
    } else {
      gsap.to(chatWindow, {
        x: '100%',
        duration: 0.35,
        ease: 'power2.inOut',
        onComplete: () => {
          chatWindow.classList.add('pointer-events-none');
        }
      });
      iconClose.classList.add('hidden');
      iconChat.classList.remove('hidden');
      document.body.classList.remove('assistant-open');
    }
  }

  launcher.addEventListener('click', () => toggleChat());
  closeBtn.addEventListener('click', () => toggleChat(false));

  function addMessage(sender, content, options = {}) {
    const { allowHtml = sender !== 'user' } = options;
    const bubbleWrapper = document.createElement('div');
    bubbleWrapper.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} w-full opacity-0 translate-y-2 animate-message`;

    const bubble = document.createElement('div');
    bubble.className = `max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm transition-all duration-300 ${
      sender === 'user'
        ? 'bg-primary text-pure-white rounded-tr-none font-medium'
        : 'bg-surface-container-low text-primary rounded-tl-none border border-outline-variant/15 text-left'
    }`;

    if (allowHtml) {
      bubble.innerHTML = content;
    } else {
      bubble.textContent = content;
    }

    bubbleWrapper.appendChild(bubble);
    messagesContainer.appendChild(bubbleWrapper);
    scrollToBottom();

    if (typeof window.refreshCursorListeners === 'function') {
      window.refreshCursorListeners();
    }

    return bubbleWrapper;
  }

  function showTypingIndicator() {
    if (isTyping) return;
    isTyping = true;

    const indicator = document.createElement('div');
    indicator.id = 'hooke-typing-indicator';
    indicator.className = 'flex justify-start w-full opacity-0 translate-y-2 animate-message';
    indicator.innerHTML = `
      <div class="bg-surface-container-low text-primary/50 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1 border border-outline-variant/15">
        <div class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></div>
      </div>
    `;
    messagesContainer.appendChild(indicator);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('hooke-typing-indicator');
    if (indicator) {
      indicator.remove();
    }
    isTyping = false;
  }

  function scrollToBottom() {
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 50);
  }

  function addQuickReplyChips(chips) {
    const chipsContainer = document.createElement('div');
    chipsContainer.className = 'flex flex-wrap gap-2 pt-1.5 justify-start w-full animate-message';

    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'bg-surface border border-primary/20 text-primary hover:bg-primary hover:text-pure-white px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wide transition-all shadow-sm active:scale-95 duration-200';
      btn.textContent = chip.text;
      btn.addEventListener('click', () => {
        chipsContainer.remove();
        addMessage('user', chip.text, { allowHtml: false });
        chip.callback();
      });
      chipsContainer.appendChild(btn);
    });

    messagesContainer.appendChild(chipsContainer);
    scrollToBottom();

    if (typeof window.refreshCursorListeners === 'function') {
      window.refreshCursorListeners();
    }
  }

  function triggerWelcomeSequence() {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p class="font-bold mb-1 text-sm text-primary flex items-center gap-1.5">
          <span class="material-symbols-outlined text-base">spa</span>
          ¡Hola! Soy Hooke Assistant
        </p>
        <p class="mb-2">Tu estratega de dirección creativa e identidad en Hooke Studio. Diseñamos universos visuales con intención y coherencia editorial.</p>
        <p class="font-semibold text-vibrant-pink">¿En qué podemos enfocar tu proyecto de marca hoy?</p>
      `);

      addQuickReplyChips([
        { text: '🔍 Auditar Estética de mi Marca', callback: () => startAuditFlow() },
        { text: '💼 Cotizar Dirección Creativa', callback: () => startQuoteFlow() },
        { text: '🌿 Explorar Casos de Éxito', callback: () => showPortfolioChips() }
      ]);
    }, 1200);
  }

  function showPortfolioChips() {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p class="font-bold mb-1 text-primary">Nuestras Transformaciones Editoriales</p>
        <p class="mb-2">Diseñamos bajo la premisa de "identidad antes que algoritmo", destacando:</p>
        <ul class="space-y-1.5 list-disc pl-4 mb-2">
          <li><strong>Caso de Estudio 01 (Estilismo & Inspo):</strong> Redefinición cruda y premium de marca personal con fotografía de alto impacto.</li>
          <li><strong>Caso de Estudio 02 (El Brief):</strong> Estructuración y conceptualización asimétrica de moodboards y estilismos limpios.</li>
        </ul>
      `);

      addQuickReplyChips([
        { text: '🔍 Auditar mi marca', callback: () => startAuditFlow() },
        { text: '💼 Cotizar proyecto', callback: () => startQuoteFlow() },
        { text: '🔙 Volver al inicio', callback: () => triggerWelcomeSequence() }
      ]);
    }, 1000);
  }

  function startQuoteFlow() {
    currentFlow = 'quote';
    flowStep = 1;

    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p class="font-bold mb-1 text-primary">Iniciemos tu Cotización Estratégica</p>
        <p>Para formular una propuesta visual coherente, necesito algunos datos breves. ¿Cómo te llamás?</p>
      `);
    }, 1000);
  }

  function handleQuoteFlowInput(text) {
    switch (flowStep) {
      case 1:
        leadData.name = text;
        flowStep = 2;
        showTypingIndicator();
        setTimeout(() => {
          removeTypingIndicator();
          addMessage('bot', `
            <p>Mucho gusto, <strong>${text}</strong>. ¿Cuál es el nombre de tu proyecto o marca?</p>
          `);
        }, 900);
        break;
      case 2:
        leadData.brand = text;
        flowStep = 3;
        showTypingIndicator();
        setTimeout(() => {
          removeTypingIndicator();
          addMessage('bot', `
            <p>Excelente, <strong>${text}</strong>. ¿Cuál es tu objetivo estético primordial?</p>
          `);
          addQuickReplyChips([
            { text: '🛍️ Branding & Identidad', callback: () => { leadData.objective = 'Branding & Identidad'; resumeQuoteFlow(); } },
            { text: '📸 Producción Editorial', callback: () => { leadData.objective = 'Producción Editorial'; resumeQuoteFlow(); } },
            { text: '👗 Asesoramiento de Estilismo', callback: () => { leadData.objective = 'Asesoramiento de Estilismo'; resumeQuoteFlow(); } }
          ]);
        }, 900);
        break;
      case 3:
        leadData.objective = text;
        resumeQuoteFlow();
        break;
      case 4:
        if (!text.includes('@') || !text.includes('.')) {
          addMessage('bot', '⚠️ Por favor, introduce un correo electrónico válido para enviarte la propuesta conceptual.', { allowHtml: false });
          return;
        }
        leadData.email = text;
        flowStep = 5;
        showTypingIndicator();
        setTimeout(() => {
          removeTypingIndicator();
          addMessage('bot', `
            <p>Perfecto. Finalmente, ¿cuál es tu usuario de **Instagram** o sitio web actual? Nos servirá para evaluar tus cimientos estéticos actuales.</p>
          `);
        }, 900);
        break;
      case 5:
        leadData.instagram = text;
        flowStep = 6;
        dispatchQuoteSubmission();
        break;
    }
  }

  function resumeQuoteFlow() {
    flowStep = 4;
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p>Entendido. ¿A qué **correo electrónico** te hacemos llegar el plan conceptual y los rangos de cotización?</p>
      `);
    }, 900);
  }

  function dispatchQuoteSubmission() {
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p class="font-bold text-[#ba1a1a] mb-1">¡Iniciación Registrada!</p>
        <p class="mb-2">Gracias <strong>${leadData.name}</strong>. Hemos procesado tus objetivos de dirección creativa para <strong>${leadData.brand}</strong>. Enviaremos el dossier de inversión estimado a <strong>${leadData.email}</strong> y analizaremos tu cuenta <strong>${leadData.instagram}</strong> para nuestra sesión.</p>
        <p class="font-semibold text-vibrant-pink">¡Si quieres acelerar el proceso, no dudes en completar el formulario de contacto oficial en la web!</p>
      `);

      addQuickReplyChips([
        { text: '🔙 Volver al inicio', callback: () => { currentFlow = null; triggerWelcomeSequence(); } }
      ]);
    }, 1500);
  }

  function startAuditFlow() {
    currentFlow = 'audit';
    flowStep = 1;

    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      addMessage('bot', `
        <p class="font-bold mb-1 text-primary">Herramienta de Auditoría Estética Express</p>
        <p class="mb-2">Evaluaremos la coherencia de tu marca frente a los estándares de lujo editorial e intención visual.</p>
        <p>Escribe **el nombre o enlace de tu marca/sitio** (ej. @minegocio o www.miapp.com).</p>
      `);
    }, 1000);
  }

  function handleAuditFlowInput(text) {
    if (flowStep === 1) {
      auditData.brandName = text;
      flowStep = 2;

      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addMessage('bot', `
          <p>Perfecto, analizaremos <strong>${auditData.brandName}</strong>. ¿En qué área considerás que tu identidad tiene mayor fricción o ruido?</p>
        `);

        addQuickReplyChips([
          { text: '🛍️ Imagen y Coherencia de Marca', callback: () => runAestheticAudit('branding') },
          { text: '📸 Fotografía y Estilismo Editorial', callback: () => runAestheticAudit('photography') },
          { text: '⚡ Claridad de Propuesta Visual', callback: () => runAestheticAudit('clarity') }
        ]);
      }, 900);
    }
  }

  function runAestheticAudit(focus) {
    auditData.focusArea = focus;
    showTypingIndicator();

    setTimeout(() => {
      const indicatorBubble = document.querySelector('#hooke-typing-indicator div');
      if (indicatorBubble) {
        indicatorBubble.innerHTML = '<div class="flex items-center gap-1.5"><span class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></span> <span class="text-[10px] text-primary font-bold">Escaneando coherencia cromática...</span></div>';
      }

      setTimeout(() => {
        if (indicatorBubble) {
          indicatorBubble.innerHTML = '<div class="flex items-center gap-1.5"><span class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></span> <span class="text-[10px] text-primary font-bold">Analizando jerarquías tipográficas...</span></div>';
        }

        setTimeout(() => {
          if (indicatorBubble) {
            indicatorBubble.innerHTML = '<div class="flex items-center gap-1.5"><span class="typing-dot w-1.5 h-1.5 bg-primary rounded-full"></span> <span class="text-[10px] text-primary font-bold">Midiendo balance y asimetría de layouts...</span></div>';
          }

          setTimeout(() => {
            removeTypingIndicator();
            renderAuditReport();
          }, 1200);
        }, 1000);
      }, 1000);
    }, 500);
  }

  function renderAuditReport() {
    let scores = {};
    let recommendations = [];
    let globalScore = 78;

    if (auditData.focusArea === 'branding') {
      globalScore = 65;
      scores = { cohesion: 60, typography: 72, layouts: 64 };
      recommendations = [
        '<strong>Cromática inconsistente:</strong> Utilizas demasiados matices secundarios. Simplifica a una paleta stark monocroma + 1 color de acento estratégico.',
        '<strong>Falta de contraste de peso:</strong> Las fuentes de catálogo restan elegancia. Emplea un serif de alto contraste (como Playfair) para cabeceras.',
        '<strong>Imágenes genéricas:</strong> El uso de fotografías de stock comerciales diluye tu autoridad conceptual. Planifica producciones editoriales crudas.'
      ];
    } else if (auditData.focusArea === 'photography') {
      globalScore = 70;
      scores = { cohesion: 68, typography: 80, layouts: 62 };
      recommendations = [
        '<strong>Falta de intención narrativa:</strong> La fotografía muestra productos de forma pasiva en lugar de evocar una escena artística o editorial.',
        '<strong>Composiciones rígidas:</strong> Los layouts están excesivamente centrados y predecibles. Aplica asimetría y recortes marcados.',
        '<strong>Estilismo genérico:</strong> Las piezas no se complementan. Agrega accesorios de diseño u objetos de autor para elevar la sutil sofisticación.'
      ];
    } else {
      globalScore = 74;
      scores = { cohesion: 70, typography: 74, layouts: 78 };
      recommendations = [
        '<strong>Ruido digital:</strong> Hay demasiada sobrecarga de elementos interactivos (popups, badges). Despeja espacio y deja que el diseño respire.',
        '<strong>Mensaje diluido:</strong> La propuesta en cabecera se pierde entre explicaciones técnicas en lugar de plantar una postura clara.',
        '<strong>Bordes redondeados rígidos:</strong> Se mezclan componentes muy redondeados con imágenes muy angulares. Elige un shape language constante.'
      ];
    }

    const cardHtml = `
      <div class="bg-surface dark:bg-[#1E1E1E] rounded-xl p-4 border border-primary/20 space-y-3.5 my-1 text-left">
        <div class="flex justify-between items-center border-b border-outline-variant/30 pb-2">
          <div>
            <span class="text-[8px] font-bold tracking-widest text-vibrant-pink uppercase block">Auditoría Estética Express</span>
            <h5 class="font-headline-lg-mobile text-xs font-bold text-primary">${auditData.brandName.substring(0, 22)}</h5>
          </div>
          <div class="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex flex-col items-center justify-center">
            <span class="text-[14px] font-bold text-primary leading-none">${globalScore}</span>
            <span class="text-[7px] text-primary/60 font-semibold leading-none">/100</span>
          </div>
        </div>

        <div class="space-y-2.5">
          <div>
            <div class="flex justify-between text-[9px] font-bold text-on-surface-variant mb-0.5 uppercase tracking-wide">
              <span>Cohesión de Marca</span>
              <span>${scores.cohesion}%</span>
            </div>
            <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden">
              <div class="progress-bar-fill h-full bg-primary" style="width: ${scores.cohesion}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-on-surface-variant mb-0.5 uppercase tracking-wide">
              <span>Dirección Tipográfica</span>
              <span>${scores.typography}%</span>
            </div>
            <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden">
              <div class="progress-bar-fill h-full bg-vibrant-pink" style="width: ${scores.typography}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-on-surface-variant mb-0.5 uppercase tracking-wide">
              <span>Estructura de Layouts</span>
              <span>${scores.layouts}%</span>
            </div>
            <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden">
              <div class="progress-bar-fill h-full bg-secondary" style="width: ${scores.layouts}%"></div>
            </div>
          </div>
        </div>

        <div class="bg-surface-container-low p-3 rounded-lg border border-outline-variant/15 text-[10px] space-y-1.5">
          <span class="block font-bold text-primary text-[10px] uppercase tracking-wider mb-1">Oportunidades de Mejora:</span>
          <p class="leading-relaxed text-on-surface-variant flex items-start gap-1">🌸 ${recommendations[0]}</p>
          <p class="leading-relaxed text-on-surface-variant flex items-start gap-1">🌸 ${recommendations[1]}</p>
          <p class="leading-relaxed text-on-surface-variant flex items-start gap-1">🌸 ${recommendations[2]}</p>
        </div>

        <button class="w-full bg-primary hover:bg-neutral-900 text-pure-white py-2 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1.5 audit-resolve-btn">
          Resolver Estos Puntos <span class="material-symbols-outlined text-xs">arrow_forward</span>
        </button>
      </div>
    `;

    addMessage('bot', cardHtml);

    setTimeout(() => {
      const btn = messagesContainer.querySelector('.audit-resolve-btn:last-child');
      if (btn) {
        btn.addEventListener('click', () => {
          addMessage('user', 'Quiero agendar una asesoría para resolver las fallas de mi identidad visual');
          currentFlow = null;
          startQuoteFlow();
        });
      }
    }, 100);

    addQuickReplyChips([
      { text: '💼 Cotizar Proyecto Premium', callback: () => startQuoteFlow() },
      { text: '🔙 Volver al inicio', callback: () => { currentFlow = null; triggerWelcomeSequence(); } }
    ]);
  }

  async function handleHeuristicUserInput(text) {
    const query = text.toLowerCase().trim();

    if (currentFlow === 'quote') {
      handleQuoteFlowInput(text);
      return;
    }
    if (currentFlow === 'audit') {
      handleAuditFlowInput(text);
      return;
    }

    showTypingIndicator();

    // Local heuristic keyword router
    setTimeout(() => {
      removeTypingIndicator();

      if (query.includes('precio') || query.includes('costo') || query.includes('cuanto cuesta') || query.includes('presupuesto') || query.includes('inversion')) {
        addMessage('bot', `
          <p class="font-bold mb-1 text-primary">Inversión y Presupuesto en Hooke Studio</p>
          <p class="mb-2">Nuestras producciones editoriales y desarrollos de identidad visual se configuran a medida para garantizar exclusividad y retorno estético:</p>
          <ul class="space-y-1 list-disc pl-4 mb-2">
            <li><strong>Dirección de Arte & Branding:</strong> $2,500 - $4,000 USD.</li>
            <li><strong>Campañas & Producciones Fotográficas:</strong> $4,000 - $7,000 USD (incluye scouting, casting y preproducción).</li>
            <li><strong>Ecosistemas visuales 360°:</strong> $8,000+ USD.</li>
          </ul>
          <p>Podemos armarte una pre-cotización express inmediatamente en este chat.</p>
        `);

        addQuickReplyChips([
          { text: '💼 Cotizar Proyecto', callback: () => startQuoteFlow() },
          { text: '🔙 Volver al inicio', callback: () => triggerWelcomeSequence() }
        ]);
      } 
      else if (query.includes('estilismo') || query.includes('ropa') || query.includes('look') || query.includes('ropa') || query.includes('personal')) {
        addMessage('bot', `
          <p class="font-bold mb-1 text-primary">Asesoramiento & Estilismo de Autor</p>
          <p class="mb-2">En Hooke Studio entendemos que el estilismo es el cimiento de la pre-producción. Diseñamos directrices de guardarropa, accesorios y siluetas para reflejar la esencia real de la marca personal o de moda.</p>
          <p class="mb-2">Rechazamos las combinaciones clichés de stock. Buscamos asimetría, texturas crudas y piezas de diseñadores independientes.</p>
          <p>¿Quieres cotizar una producción o auditar tu estética actual?</p>
        `);

        addQuickReplyChips([
          { text: '💼 Cotizar proyecto', callback: () => startQuoteFlow() },
          { text: '🔍 Auditar estética actual', callback: () => startAuditFlow() }
        ]);
      }
      else if (query.includes('ia') || query.includes('chatbot') || query.includes('automatizacion') || query.includes('tecnologia')) {
        addMessage('bot', `
          <p class="font-bold mb-1 text-primary">Estética Visual Frente al Algoritmo</p>
          <p class="mb-2">Nuestra filosofía es tajante: **Identidad antes que algoritmo**. Aunque aplicamos tecnología de vanguardia para cimentar procesos de consulta y agendamiento, nunca permitimos que las tendencias mecánicas dominen la expresión visual.</p>
          <p class="mb-2">Las inteligencias artificiales deben servir para estructurar el backend, no para homogeneizar el arte o la dirección de arte en el frontend.</p>
          <p>¿Te gustaría auditar tu identidad visual express?</p>
        `);

        addQuickReplyChips([
          { text: '🔍 Auditar identidad express', callback: () => startAuditFlow() },
          { text: '🔙 Volver al inicio', callback: () => triggerWelcomeSequence() }
        ]);
      }
      else {
        addMessage('bot', `
          <p class="mb-2">Es una consulta conceptual sumamente oportuna. En **Hooke Studio** abordamos cada proyecto de diseño e imagen bajo una rigurosa dirección de arte orientada a la trascendencia estética y comercial de marcas premium.</p>
          <p class="mb-2">¿Te gustaría que realicemos una **Auditoría Express** de tu coherencia visual actual o prefieres **cotizar una dirección creativa estructurada** desde cero?</p>
        `);

        addQuickReplyChips([
          { text: '🔍 Auditar mi estética actual', callback: () => startAuditFlow() },
          { text: '💼 Cotizar dirección creativa', callback: () => startQuoteFlow() }
        ]);
      }
    }, 1200);
  }

  function handleSend() {
    const text = inputField.value.trim();
    if (!text) return;

    inputField.value = '';
    addMessage('user', text, { allowHtml: false });
    handleHeuristicUserInput(text);
  }

  sendBtn.addEventListener('click', handleSend);
  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
}
