/**
 * analytics.js — Google Analytics 4 para Reserva Bosque Sereno
 *
 * Este módulo inyecta el script de GA4 en el <head> y expone helpers
 * para disparar eventos personalizados desde cualquier parte del sitio.
 *
 * Solo se activa en producción (fab9015.github.io).
 * En localhost o file:// los eventos se registran en consola para debug.
 */

(function () {
    'use strict';

    var GA_ID = 'G-5WMEQGFBFP';
    var IS_PROD = typeof location !== 'undefined' &&
        location.hostname === 'fab9015.github.io';
    var IS_LOCAL = !IS_PROD;

    // ── Inyectar gtag.js en <head> ─────────────────────────────────────────────
    function injectGtag() {
        if (!IS_PROD) {
            console.info('[Analytics] Modo local — GA4 desactivado. Los eventos se mostrarán aquí.');
            return;
        }

        // Script async del loader de GA
        var s1 = document.createElement('script');
        s1.async = true;
        s1.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s1);

        // Inicialización del dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', GA_ID, {
            anonymize_ip: true,
            // Excluir parámetros de query internos si los hubiera
            page_title: document.title
        });

        console.info('[Analytics] GA4 iniciado (' + GA_ID + ')');
    }

    // ── API pública: window.rbsTrack(eventName, params) ───────────────────────
    /**
     * Dispara un evento GA4. En local solo loguea en consola.
     * @param {string} eventName  - Nombre del evento
     * @param {Object} [params]   - Parámetros adicionales
     */
    window.rbsTrack = function (eventName, params) {
        if (IS_LOCAL) {
            console.info('[Analytics][DEV] Evento:', eventName, params || '');
            return;
        }
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, params || {});
        }
    };

    // ── Tracking automático: descargas de PDF y links externos ────────────────
    function attachGlobalDelegation() {
        document.addEventListener('click', function (e) {
            var anchor = e.target.closest('a[href]');
            if (!anchor) return;

            var href = anchor.getAttribute('href') || '';
            var text = (anchor.textContent || '').trim().slice(0, 100);

            // Descarga de PDF
            if (href.toLowerCase().endsWith('.pdf')) {
                var parts = href.split('/');
                var fileName = parts[parts.length - 1];
                window.rbsTrack('file_download', {
                    file_name: fileName,
                    link_text: text,
                    page_location: window.location.href
                });
                return;
            }

            // Links externos (WhatsApp, mailto, dominios distintos)
            var isExternal = href.startsWith('http') &&
                typeof location !== 'undefined' &&
                !href.includes(location.hostname);
            var isMailto = href.startsWith('mailto:');
            var isWa = href.startsWith('https://wa.me');
            var isTel = href.startsWith('tel:');

            if (isExternal || isMailto || isWa || isTel) {
                window.rbsTrack('outbound_click', {
                    link_url: href,
                    link_text: text
                });
            }
        });
    }

    // ── Inicialización ─────────────────────────────────────────────────────────
    injectGtag();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachGlobalDelegation);
    } else {
        attachGlobalDelegation();
    }

})();
