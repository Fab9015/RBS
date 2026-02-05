(function () {
    // Loader for HTML fragments (menu and footer). Uses fetch when possible,
    // otherwise falls back to embedded strings so file:// previews work.
    const EMBEDDED_MENU = `
<div class="overlay" id="menuOverlay" onclick="closeMenu()"></div>
<div class="menu-row">
  <div class="hamburger" id="menuToggle" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</div>
<nav>
  <ul id="menu"></ul>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <ul id="mobileMenuList"></ul>
</div>
`;

    const EMBEDDED_FOOTER = `<footer>\n  <p>Reserva Bosque Sereno · © 2026</p>\n  <div class="footer-links" id="footerLinks"></div>\n</footer>`;

    function insertHTML(selector, html) {
        const container = document.querySelector(selector);
        if (!container) {
            console.warn('load-fragments: placeholder not found for', selector);
            return;
        }
        container.innerHTML = html;
        console.log('load-fragments: injected into', selector);
    }

    function loadAndInsert(url, selector, fallbackHtml) {
        if (typeof location !== 'undefined' && location.protocol === 'file:') {
            insertHTML(selector, fallbackHtml);
            return Promise.resolve();
        }
        return fetch(url, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('no-frag'); return r.text(); }).then(t => insertHTML(selector, t)).catch(() => insertHTML(selector, fallbackHtml));
    }

    // Placeholders must exist in the page
    // load fragments and then load the menu/blog scripts so they run after injection
    Promise.all([
        loadAndInsert('includes/menu.html', '#menuInclude', (EMBEDDED_MENU)),
        loadAndInsert('includes/footer.html', '#footerInclude', (EMBEDDED_FOOTER))
    ]).then(() => {
        console.log('load-fragments: fragments loaded, attaching scripts');
        // dynamically load embedded-data and shared menu behaviour first, then the menu loader
        const sEmbedded = document.createElement('script'); sEmbedded.src = 'includes/embedded-data.js';
        sEmbedded.onload = () => {
            console.log('load-fragments: embedded-data loaded');
            try { document.dispatchEvent(new Event('embedded-data-ready')); } catch (e) { /* ignore */ }
        };
        sEmbedded.onerror = () => console.warn('load-fragments: failed to load embedded-data.js');
        document.body.appendChild(sEmbedded);

        const s0 = document.createElement('script'); s0.src = 'includes/menu-behavior.js';
        s0.onload = () => console.log('load-fragments: menu-behavior loaded');
        s0.onerror = () => console.error('load-fragments: failed to load menu-behavior.js');
        document.body.appendChild(s0);

        const s1 = document.createElement('script'); s1.src = 'includes/load-menu.js';
        s1.onload = () => console.log('load-fragments: load-menu loaded');
        s1.onerror = () => console.error('load-fragments: failed to load load-menu.js');
        document.body.appendChild(s1);
    }).catch(err => console.error('load-fragments: Promise.all failed', err));
})();
