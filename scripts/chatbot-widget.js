/**
 * chatbot-widget.js — Chatbot de árbol de conversación para RBS
 *
 * Uso básico (añadir al final del <body> de cualquier página):
 *   <script src="scripts/chatbot-widget.js"></script>
 *
 * Para usar un archivo de flujo distinto:
 *   <script src="scripts/chatbot-widget.js" data-flow="data/chatbot-flow.json"></script>
 *
 * El widget resuelve la ruta del JSON relativa a la página actual automáticamente.
 */

(function () {
    'use strict';

    // ── Flujo embebido (fallback para file:// y cuando fetch falla) ────────────
    const EMBEDDED_FLOW = { "welcome": "¡Hola! 👋 Soy el asistente virtual de **Reserva Bosque Sereno**. ¿En qué puedo ayudarte hoy?", "nodes": { "start": { "message": "¿Qué tema te interesa?", "options": [{ "label": "💰 Pagos y cuotas", "next": "pagos" }, { "label": "🏊 Amenidades", "next": "amenidades" }, { "label": "📋 Reglamentos", "next": "reglamentos" }, { "label": "🐾 Mascotas", "next": "mascotas" }, { "label": "🕐 Horarios", "next": "horarios" }, { "label": "🆘 Emergencias", "next": "emergencias" }, { "label": "📞 Contacto", "next": "contacto" }] }, "pagos": { "message": "¿Qué necesitas saber sobre pagos?", "options": [{ "label": "¿Cómo pago mi cuota?", "next": "pagos-como" }, { "label": "Datos bancarios", "next": "pagos-cuenta" }, { "label": "¿A dónde envío mi comprobante?", "next": "pagos-comprobante" }, { "label": "¿Cómo identifican mi pago?", "next": "pagos-identificar" }, { "label": "¿Cuándo llega mi recibo?", "next": "pagos-recibo" }, { "label": "⬅ Menú principal", "next": "start" }] }, "pagos-como": { "type": "answer", "message": "Puedes pagar tu cuota de las siguientes formas:\n• **Transferencia o depósito bancario** a nuestra cuenta BBVA\n• **En oficina de administración** con terminal bancaria (débito/crédito)\n• **Cajero multipago**\n\nRecuerda siempre enviar tu comprobante a Administración.", "back": "pagos" }, "pagos-cuenta": { "type": "answer", "message": "<p><strong>Datos bancarios:</strong></p><p>🏦 BANCO: BBVA BANCOMER<br>🏢 Responsable: Administracion Condo M<br>📄 RFC: ACR 251107 182 <a href='#' class='copy-btn' data-copy='ACR251107182' aria-label='Copiar RFC'><i class='fa-regular fa-copy' aria-hidden='true'></i></a><br>🔢 Cuenta: 012 649 7268 <a href='#' class='copy-btn' data-copy='0126497268' aria-label='Copiar cuenta'><i class='fa-regular fa-copy' aria-hidden='true'></i></a><br>💳 CLABE: 012 010 0012 6497 2689 <a href='#' class='copy-btn' data-copy='012010001264972689' aria-label='Copiar CLABE'><i class='fa-regular fa-copy' aria-hidden='true'></i></a></p>", "back": "pagos" }, "pagos-comprobante": { "type": "answer", "message": "<p>Envía tu comprobante de pago por:</p><p>📱 <a href='https://wa.me/524492133944?text=Hola%2C%20adjunto%20mi%20comprobante%20de%20pago.' target='_blank' rel='noopener noreferrer'><strong>WhatsApp: 449 213 3944</strong></a><br>📧 <a href='mailto:admonreservabosquesereno@gmail.com'>admonreservabosquesereno@gmail.com</a></p><p>Administración aplica el pago en 72 hrs.</p>", "back": "pagos" }, "pagos-identificar": { "type": "answer", "message": "Escribe tu domicilio en el **concepto de la transferencia** (o en el voucher si pagas en efectivo). Omite la palabra «Reserva de», por ejemplo:\n\n• Sequoia 402\n• Sakura 207\n• Sabino 105\n\nEn el concepto también puedes indicar para qué es el pago: *Sequoia 402 Salón*, *Sequoia 402 Tag*, etc.", "back": "pagos" }, "pagos-recibo": { "type": "answer", "message": "Tu recibo se envía a través de la **Plataforma Condovive** una vez que Administración haya cotejado tu pago (plazo de 72 horas hábiles).", "link": { "label": "Ir a Condovive", "url": "condovive.html" }, "back": "pagos" }, "amenidades": { "message": "¿Qué amenidad te interesa?", "options": [{ "label": "🏊 Alberca", "next": "alberca" }, { "label": "🍖 Asadores", "next": "asadores" }, { "label": "🎉 Salón de eventos", "next": "salon" }, { "label": "⬅ Menú principal", "next": "start" }] }, "alberca": { "message": "¿Qué necesitas saber sobre la alberca?", "options": [{ "label": "Horarios de uso", "next": "alberca-horario" }, { "label": "Reglamento", "next": "reg-alberca" }, { "label": "Tríptico informativo", "next": "triptico-alberca" }, { "label": "⬅ Amenidades", "next": "amenidades" }] }, "alberca-horario": { "type": "answer", "message": "**Horario de alberca:**\n\n🚫 Lunes: sin servicio\n⏰ Martes: 12:00 pm – 8:00 pm\n⏰ Miércoles a Domingo: 8:00 am – 8:00 pm", "back": "alberca" }, "triptico-alberca": { "type": "answer", "message": "Puedes consultar el tríptico completo de la alberca con todas las reglas e información de uso.", "link": { "label": "Ver tríptico alberca", "url": "triptico-alberca.html" }, "back": "alberca" }, "asadores": { "message": "¿Qué necesitas saber sobre los asadores?", "options": [{ "label": "Horarios de uso", "next": "asadores-horario" }, { "label": "¿Cómo reservar?", "next": "asadores-reservar" }, { "label": "Reglamento", "next": "reg-asadores" }, { "label": "⬅ Amenidades", "next": "amenidades" }] }, "asadores-horario": { "type": "answer", "message": "**Horario de asadores:**\n\n⏰ Lunes a Domingo: 9:00 am – 9:00 pm\n\nRecuerda que el uso requiere reservación previa.", "back": "asadores" }, "asadores-reservar": { "type": "answer", "message": "Para reservar un asador:\n\n1. Contacta a Administración para revisar disponibilidad\n2. Debes estar al corriente en tus cuotas\n3. Es gratuito, pero obligatorio registrar un responsable\n4. Notifica si no lo vas a usar\n\n📱 WhatsApp: 449 213 3944", "back": "asadores" }, "salon": { "message": "¿Qué necesitas saber sobre el salón de eventos?", "options": [{ "label": "¿Cómo reservar?", "next": "salon-reservar" }, { "label": "¿Qué incluye la renta?", "next": "salon-incluye" }, { "label": "Reglamento", "next": "reg-salon" }, { "label": "⬅ Amenidades", "next": "amenidades" }] }, "salon-reservar": { "type": "answer", "message": "Para reservar el salón:\n\n1. Contacta a Administración para ver disponibilidad\n2. La cuota es equivalente a **1 mes de mantenimiento ($1,050)**\n3. Debes estar al corriente en tus cuotas\n4. El apartado se confirma con el pago\n\n📱 WhatsApp: 449 213 3944\n📞 Tel: 449 213 3944", "back": "salon" }, "salon-incluye": { "type": "answer", "message": "La renta del salón incluye:\n\n• 6 mesas redondas (sin mantelería)\n• 34 sillas\n• Baño abastecido (papel, sanitas, jabón)\n• Salón entregado limpio\n\n❌ No se permite: confeti, cañones de polvo, bengalas, bombas de humo ni elementos que dañen las instalaciones.", "back": "salon" }, "reglamentos": { "message": "¿Qué reglamento quieres consultar?", "options": [{ "label": "🏊 Alberca", "next": "reg-alberca" }, { "label": "🍖 Asadores", "next": "reg-asadores" }, { "label": "🎉 Salón", "next": "reg-salon" }, { "label": "🐾 Mascotas", "next": "reg-mascotas" }, { "label": "🅿 Estacionamientos", "next": "reg-estacionamientos" }, { "label": "📄 Reglamento protocolizado", "next": "reg-general" }, { "label": "⬅ Menú principal", "next": "start" }] }, "reg-alberca": { "type": "answer", "message": "Puedes consultar el reglamento completo de la alberca en línea.", "link": { "label": "Ver reglamento alberca", "url": "reglamento-alberca.html" }, "back": "reglamentos" }, "reg-asadores": { "type": "answer", "message": "Puedes consultar el reglamento completo de los asadores en línea.", "link": { "label": "Ver reglamento asadores", "url": "reglamento-asadores.html" }, "back": "reglamentos" }, "reg-salon": { "type": "answer", "message": "Puedes consultar el reglamento completo del salón de usos múltiples en línea.", "link": { "label": "Ver reglamento salón", "url": "reglamento-salon.html" }, "back": "reglamentos" }, "reg-mascotas": { "type": "answer", "message": "Puedes consultar el reglamento completo para mascotas en línea.", "link": { "label": "Ver reglamento mascotas", "url": "reglamento-mascotas.html" }, "back": "reglamentos" }, "reg-estacionamientos": { "type": "answer", "message": "Puedes consultar el reglamento completo de estacionamientos en línea.", "link": { "label": "Ver reglamento estacionamientos", "url": "reglamento-estacionamientos.html" }, "back": "reglamentos" }, "reg-general": { "type": "answer", "message": "El Reglamento Interno Protocolizado contiene todas las normas del condominio.", "link": { "label": "Descargar reglamento protocolizado (PDF)", "url": "files/reglamento_protocolizado.pdf" }, "back": "reglamentos" }, "mascotas": { "message": "¿Qué necesitas saber sobre mascotas en el condominio?", "options": [{ "label": "Reglamento mascotas", "next": "reg-mascotas" }, { "label": "Padrón de mascotas", "next": "padron-mascotas" }, { "label": "Tríptico mascotas", "next": "triptico-mascotas" }, { "label": "⬅ Menú principal", "next": "start" }] }, "padron-mascotas": { "type": "answer", "message": "Todos los residentes con mascotas deben registrarlas en el padrón del condominio. Consulta la información actualizada aquí:", "link": { "label": "Ver padrón de mascotas", "url": "padron-mascotas.html" }, "back": "mascotas" }, "triptico-mascotas": { "type": "answer", "message": "El tríptico de mascotas contiene un resumen de las reglas más importantes para convivencia con mascotas.", "link": { "label": "Ver tríptico mascotas", "url": "triptico-mascotas.html" }, "back": "mascotas" }, "horarios": { "message": "¿De qué horarios necesitas información?", "options": [{ "label": "🏊 Alberca", "next": "alberca-horario" }, { "label": "🍖 Asadores", "next": "asadores-horario" }, { "label": "🏢 Administración", "next": "horario-admin" }, { "label": "⬅ Menú principal", "next": "start" }] }, "horario-admin": { "type": "answer", "message": "<p><strong>Horario de Administración:</strong></p><p>🗓 Lunes a Viernes: 9:00 am – 5:00 pm<br>🗓 Sábado: 10:00 am – 1:00 pm<br>🚫 Domingo: cerrado</p><p>📱 <a href='https://wa.me/524492133944' target='_blank' rel='noopener noreferrer'>WhatsApp: 449 213 3944</a><br>📞 <a href='tel:+524492133944'>Llamar: 449 213 3944</a></p>", "back": "horarios" }, "emergencias": { "type": "answer", "message": "<p><strong>Números de emergencia:</strong></p><ul><li>🚨 Emergencias: <a href='tel:911'><strong>911</strong></a></li><li>🚨 Guardia Nacional: <a href='tel:088'><strong>088</strong></a></li><li>🔕 Denuncia anónima: <a href='tel:089'>089</a></li><li>👮 Fiscalía FGE: <a href='tel:+524494782800'>449 478 2800</a></li><li>🚔 SSPM Ags C4: <a href='tel:+524499946640'>449 994 6640</a></li><li>🚔 SSPE Ags C5: <a href='tel:+524499102055'>449 910 2055</a></li></ul><p>Para urgencias también contacta a Vigilancia en la caseta principal.</p>", "back": "start" }, "contacto": { "message": "¿Cómo quieres contactar a Administración?", "options": [{ "label": "💬 WhatsApp", "next": "contacto-wa" }, { "label": "📧 Correo electrónico", "next": "contacto-email" }, { "label": "🏢 Ir en persona", "next": "contacto-oficina" }, { "label": "🌐 Condovive", "next": "contacto-condovive" }, { "label": "⬅ Menú principal", "next": "start" }] }, "contacto-wa": { "type": "answer", "message": "Puedes enviar un WhatsApp a Administración directamente:", "link": { "label": "Abrir WhatsApp", "url": "https://wa.me/524492133944?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20condominio." }, "back": "contacto" }, "contacto-email": { "type": "answer", "message": "📧 Correo de Administración:\n**admonreservabosquesereno@gmail.com**\n\nRecuerda incluir tu domicilio en el asunto.", "link": { "label": "Enviar correo", "url": "mailto:admonreservabosquesereno@gmail.com" }, "back": "contacto" }, "contacto-oficina": { "type": "answer", "message": "La oficina de Administración se encuentra dentro del condominio.\n\n🗓 Lunes a Viernes: 9:00 am – 5:00 pm\n🗓 Sábado: 10:00 am – 1:00 pm", "back": "contacto" }, "contacto-condovive": { "type": "answer", "message": "Condovive es la plataforma oficial del condominio donde puedes:\n• Generar QR para visitas\n• Consultar estados de cuenta\n• Reportar tickets y quejas\n• Ver comunicados", "link": { "label": "Ir a Condovive", "url": "condovive.html" }, "back": "contacto" } } };

    // ── Configuración ──────────────────────────────────────────────────────────
    const DEFAULTS = {
        flowUrl: 'data/chatbot-flow.json',
        title: 'Asistente RBS',
        accentColor: '#a1b27a',
        textColor: '#5c4033',
        bgColor: '#fdfaf5',
        borderColor: '#e6e2dc',
        delay: 350,               // ms entre el clic y la respuesta del bot
    };

    // ── Helpers ────────────────────────────────────────────────────────────────

    /** Renderiza texto del JSON: HTML directo si contiene etiquetas (fuente confiable), de lo contrario markdown básico. */
    function formatText(raw) {
        if (!raw) return '';
        // Si el contenido ya contiene etiquetas HTML, usarlo tal cual (fuente confiable: JSON del propio sitio)
        if (/<[a-zA-Z][\s\S]*?>/i.test(raw)) return raw;
        // De lo contrario aplicar markdown mínimo: **negrita** y \n → <br>
        return raw
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    /** Resuelve la URL del JSON relativa al script o a la página. */
    function resolveFlowUrl(raw) {
        // Si el atributo es absoluto o comienza con http, usarlo tal cual
        if (/^https?:\/\//i.test(raw) || raw.startsWith('/')) return raw;
        // Relativo a la página actual (más predecible para el desarrollador)
        const base = window.location.href.replace(/[^/]*$/, '');
        return base + raw;
    }

    // ── Inyectar estilos ───────────────────────────────────────────────────────
    function injectStyles(accent, text, bg, border) {
        const css = `
        /* ── chatbot-widget ── */
        #rbs-chat-toggle {
            position: fixed; bottom: 24px; right: 24px; z-index: 9999;
            width: 56px; height: 56px; border-radius: 50%;
            background: ${accent}; border: none; cursor: pointer;
            box-shadow: 0 4px 14px rgba(0,0,0,.25);
            display: flex; align-items: center; justify-content: center;
            transition: transform .2s, box-shadow .2s;
        }
        #rbs-chat-toggle:hover { transform: scale(1.08); box-shadow: 0 6px 18px rgba(0,0,0,.3); }
        #rbs-chat-toggle svg { width: 28px; height: 28px; fill: #fff; }

        #rbs-chat-window {
            position: fixed; bottom: 92px; right: 24px; z-index: 9998;
            width: 340px; max-width: calc(100vw - 32px);
            height: 500px; max-height: calc(100vh - 110px);
            background: ${bg}; border: 1px solid ${border};
            border-radius: 14px; box-shadow: 0 8px 32px rgba(0,0,0,.18);
            display: flex; flex-direction: column; overflow: hidden;
            font-family: 'Lato', sans-serif;
            transition: opacity .25s, transform .25s;
        }
        #rbs-chat-window.rbs-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; }

        #rbs-chat-header {
            background: ${accent}; padding: .75em 1em;
            display: flex; align-items: center; justify-content: space-between;
        }
        #rbs-chat-header span { color: #fff; font-weight: 700; font-size: .95rem; }
        #rbs-chat-close {
            background: none; border: none; cursor: pointer; padding: 2px;
            color: #fff; font-size: 1.2rem; line-height: 1; opacity: .85;
        }
        #rbs-chat-close:hover { opacity: 1; }

        #rbs-chat-messages {
            flex: 1; overflow-y: auto; padding: .75em 1em;
            display: flex; flex-direction: column; gap: .6em;
        }
        #rbs-chat-messages::-webkit-scrollbar { width: 4px; }
        #rbs-chat-messages::-webkit-scrollbar-thumb { background: ${border}; border-radius: 4px; }

        .rbs-msg {
            max-width: 85%; padding: .55em .85em; border-radius: 12px;
            font-size: .875rem; line-height: 1.45; word-break: break-word;
        }
        .rbs-msg-bot {
            background: #fff; border: 1px solid ${border}; color: ${text};
            border-bottom-left-radius: 3px; align-self: flex-start;
        }
        .rbs-msg-user {
            background: ${accent}; color: #fff;
            border-bottom-right-radius: 3px; align-self: flex-end;
        }
        .rbs-msg a { color: inherit; }
        .rbs-msg a[href^="tel"], .rbs-msg a[href^="mailto"], .rbs-msg a[href*="wa.me"] {
            color: ${accent}; font-weight: 600; text-decoration: none;
        }
        .rbs-msg a[href^="tel"]:hover, .rbs-msg a[href^="mailto"]:hover, .rbs-msg a[href*="wa.me"]:hover {
            text-decoration: underline;
        }
        .rbs-msg ul { padding-left: 1.3em; margin: .3em 0; }
        .rbs-msg li { margin: .2em 0; }
        .rbs-msg .copy-btn {
            display: inline-flex; align-items: center; justify-content: center;
            width: 1.4em; height: 1.4em; border-radius: 4px;
            background: transparent; border: 1px solid ${border};
            color: ${text}; cursor: pointer; font-size: .78em;
            vertical-align: middle; margin-left: .2em;
            text-decoration: none; transition: background .15s, color .15s, border-color .15s;
        }
        .rbs-msg .copy-btn:hover { background: ${accent}; color: #fff; border-color: ${accent}; }
        .rbs-msg .copy-btn.rbs-copied { background: #2e8b57; color: #fff; border-color: #2e8b57; }

        .rbs-options {
            display: flex; flex-direction: column; gap: .4em;
            align-self: stretch; padding: 0 .25em;
        }
        .rbs-option-btn {
            background: #fff; border: 1.5px solid ${accent}; color: ${text};
            border-radius: 8px; padding: .45em .75em;
            font-size: .82rem; text-align: left; cursor: pointer;
            transition: background .15s, color .15s;
            font-family: inherit;
        }
        .rbs-option-btn:hover { background: ${accent}; color: #fff; }

        .rbs-link-btn {
            display: inline-block; margin-top: .4em;
            background: ${accent}; color: #fff !important;
            padding: .4em .85em; border-radius: 7px;
            font-size: .82rem; text-decoration: none;
            transition: opacity .15s;
        }
        .rbs-link-btn:hover { opacity: .88; }

        .rbs-typing {
            display: flex; gap: 4px; align-items: center;
            padding: .55em .85em; align-self: flex-start;
        }
        .rbs-typing span {
            display: block; width: 7px; height: 7px;
            border-radius: 50%; background: ${border};
            animation: rbs-bounce .9s infinite;
        }
        .rbs-typing span:nth-child(2) { animation-delay: .15s; }
        .rbs-typing span:nth-child(3) { animation-delay: .30s; }
        @keyframes rbs-bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40%            { transform: translateY(-5px); }
        }

        #rbs-chat-restart {
            width: 100%; padding: .55em; border: none; border-top: 1px solid ${border};
            background: transparent; color: ${text}; font-size: .78rem;
            cursor: pointer; opacity: .6; font-family: inherit;
        }
        #rbs-chat-restart:hover { opacity: 1; background: ${border}; }

        @media (max-width: 420px) {
            #rbs-chat-window { right: 8px; left: 8px; width: auto; bottom: 84px; }
            #rbs-chat-toggle { bottom: 16px; right: 16px; }
        }
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    // ── Construir DOM del widget ───────────────────────────────────────────────
    function buildWidget(cfg) {
        // Botón flotante
        const toggle = document.createElement('button');
        toggle.id = 'rbs-chat-toggle';
        toggle.setAttribute('aria-label', 'Abrir asistente virtual');
        toggle.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>`;

        // Ventana de chat
        const win = document.createElement('div');
        win.id = 'rbs-chat-window';
        win.classList.add('rbs-hidden');
        win.setAttribute('role', 'dialog');
        win.setAttribute('aria-label', 'Asistente virtual RBS');

        win.innerHTML = `
            <div id="rbs-chat-header">
                <span>${cfg.title}</span>
                <button id="rbs-chat-close" aria-label="Cerrar">&times;</button>
            </div>
            <div id="rbs-chat-messages" role="log" aria-live="polite"></div>
            <button id="rbs-chat-restart">↺ Volver al inicio</button>
        `;

        document.body.appendChild(toggle);
        document.body.appendChild(win);

        return {
            toggle,
            win,
            messages: win.querySelector('#rbs-chat-messages'),
            closeBtn: win.querySelector('#rbs-chat-close'),
            restartBtn: win.querySelector('#rbs-chat-restart'),
        };
    }

    // ── Motor de conversación ──────────────────────────────────────────────────
    function ChatEngine(flow, dom, cfg) {
        const { messages } = dom;
        let currentNodeId = 'start';

        // Delegación: copiar al portapapeles con .copy-btn[data-copy]
        messages.addEventListener('click', e => {
            const btn = e.target.closest('.copy-btn[data-copy]');
            if (!btn) return;
            e.preventDefault();
            const text = btn.getAttribute('data-copy');
            const markCopied = () => {
                btn.classList.add('rbs-copied');
                setTimeout(() => btn.classList.remove('rbs-copied'), 1800);
            };
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(markCopied).catch(markCopied);
            } else {
                const ta = document.createElement('textarea');
                ta.value = text;
                Object.assign(ta.style, { position: 'fixed', opacity: '0', top: '0', left: '0' });
                document.body.appendChild(ta);
                ta.focus(); ta.select();
                try { document.execCommand('copy'); } catch (_) { }
                document.body.removeChild(ta);
                markCopied();
            }
        });

        function scrollBottom() {
            messages.scrollTop = messages.scrollHeight;
        }

        function addMsg(html, role) {
            const div = document.createElement('div');
            div.className = 'rbs-msg ' + (role === 'user' ? 'rbs-msg-user' : 'rbs-msg-bot');
            div.innerHTML = html;
            messages.appendChild(div);
            scrollBottom();
            return div;
        }

        function showTyping() {
            const el = document.createElement('div');
            el.className = 'rbs-typing';
            el.innerHTML = '<span></span><span></span><span></span>';
            messages.appendChild(el);
            scrollBottom();
            return el;
        }

        function removeOptions() {
            const existing = messages.querySelectorAll('.rbs-options');
            existing.forEach(el => el.remove());
        }

        function showOptions(options) {
            const wrap = document.createElement('div');
            wrap.className = 'rbs-options';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'rbs-option-btn';
                btn.textContent = opt.label;
                btn.addEventListener('click', () => handleOptionClick(opt));
                wrap.appendChild(btn);
            });
            messages.appendChild(wrap);
            scrollBottom();
        }

        function renderNode(nodeId) {
            currentNodeId = nodeId;
            const node = flow.nodes[nodeId];
            if (!node) return;

            const typing = showTyping();
            setTimeout(() => {
                typing.remove();
                addMsg(formatText(node.message), 'bot');

                if (node.type === 'answer') {
                    // Nodo terminal: mostrar enlace opcional y botón de regreso
                    if (node.link) {
                        const wrap = document.createElement('div');
                        wrap.className = 'rbs-msg rbs-msg-bot';
                        const a = document.createElement('a');
                        a.className = 'rbs-link-btn';
                        a.href = node.link.url;
                        a.textContent = node.link.label;
                        // Solo abrir en nueva pestaña si es URL externa
                        if (/^https?:\/\//i.test(node.link.url) || node.link.url.startsWith('mailto:')) {
                            a.target = '_blank';
                            a.rel = 'noopener noreferrer';
                        }
                        wrap.appendChild(a);
                        messages.appendChild(wrap);
                        scrollBottom();
                    }
                    const backId = node.back || 'start';
                    const backNode = flow.nodes[backId];
                    const backLabel = backId === 'start' ? '⬅ Menú principal' : '⬅ Volver';
                    showOptions([{ label: backLabel, next: backId }].concat(
                        backNode && backNode.options ? [] : []
                    ));
                } else if (node.options && node.options.length) {
                    showOptions(node.options);
                }
            }, cfg.delay);
        }

        function handleOptionClick(opt) {
            removeOptions();
            addMsg(opt.label, 'user');
            renderNode(opt.next);
        }

        // API pública
        return {
            start() {
                messages.innerHTML = '';
                addMsg(formatText(flow.welcome), 'bot');
                renderNode('start');
            },
            restart() {
                messages.innerHTML = '';
                addMsg(formatText(flow.welcome), 'bot');
                renderNode('start');
            },
        };
    }

    // ── Inicialización ─────────────────────────────────────────────────────────
    function init() {
        const scriptEl = document.currentScript ||
            document.querySelector('script[src*="chatbot-widget"]');

        // Inyectar Font Awesome si la página no lo carga ya
        if (!document.querySelector('link[href*="font-awesome"], link[href*="fontawesome"]')) {
            const fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
            fa.crossOrigin = 'anonymous';
            document.head.appendChild(fa);
        }

        const cfg = {
            ...DEFAULTS,
            flowUrl: (scriptEl && scriptEl.getAttribute('data-flow')) || DEFAULTS.flowUrl,
            title: (scriptEl && scriptEl.getAttribute('data-title')) || DEFAULTS.title,
        };

        injectStyles(cfg.accentColor, cfg.textColor, cfg.bgColor, cfg.borderColor);
        const dom = buildWidget(cfg);

        // Cargar flujo JSON — usar fallback embebido en file:// para evitar CORS
        const flowPromise = (typeof location !== 'undefined' && location.protocol === 'file:')
            ? Promise.resolve(EMBEDDED_FLOW)
            : fetch(resolveFlowUrl(cfg.flowUrl))
                .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
                .catch(() => EMBEDDED_FLOW);

        flowPromise.then(flow => {
            const engine = ChatEngine(flow, dom, cfg);

            // Abrir / cerrar widget
            let isOpen = false;
            function openChat() {
                isOpen = true;
                dom.win.classList.remove('rbs-hidden');
                dom.toggle.setAttribute('aria-label', 'Cerrar asistente virtual');
                dom.toggle.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>`;
                if (dom.messages.children.length === 0) engine.start();
            }
            function closeChat() {
                isOpen = false;
                dom.win.classList.add('rbs-hidden');
                dom.toggle.setAttribute('aria-label', 'Abrir asistente virtual');
                dom.toggle.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>`;
            }

            dom.toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
            dom.closeBtn.addEventListener('click', closeChat);
            dom.restartBtn.addEventListener('click', () => engine.restart());
        }).catch(err => {
            console.warn('[chatbot-widget]', err.message);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
