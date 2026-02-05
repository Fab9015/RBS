(function () {
    // EMBEDDED_MENU is provided by includes/embedded-data.js as window.EMBEDDED_MENU

    function populateMenu(data) {
        if (!data || !data.menu) return;
        const menu = document.getElementById('menu');
        const mobileMenuList = document.getElementById('mobileMenuList');
        const footerLinks = document.getElementById('footerLinks') || document.querySelector('.footer-links');
        if (menu) menu.innerHTML = '';
        if (mobileMenuList) mobileMenuList.innerHTML = '';
        data.menu.forEach(item => {
            if (menu) menu.innerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
            if (mobileMenuList) mobileMenuList.innerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
            if (footerLinks) footerLinks.innerHTML += `<a href="${item.url}">${item.title}</a>`;
        });
    }

    // If opened via file://, avoid fetch (browser blocks it) and use embedded fallback
    try {
        function useEmbeddedWhenReady() {
            if (window && window.EMBEDDED_MENU) {
                populateMenu(window.EMBEDDED_MENU);
                return;
            }
            // wait for embedded-data to signal readiness (load-fragments dispatches this)
            window.addEventListener('embedded-data-ready', function onReady() {
                window.removeEventListener('embedded-data-ready', onReady);
                populateMenu(window.EMBEDDED_MENU);
            });
            // fallback: if not available shortly, try again after a small delay
            setTimeout(() => { if (window && window.EMBEDDED_MENU) populateMenu(window.EMBEDDED_MENU); }, 1200);
        }

        if (typeof location !== 'undefined' && location.protocol === 'file:') {
            console.warn('Running from file:// - deferring to embedded menu fallback');
            useEmbeddedWhenReady();
        } else {
            const menuUrl = (typeof location !== 'undefined') ? new URL('menu.json', location.href).toString() : 'menu.json';
            console.log('load-menu: fetching', menuUrl);
            fetch(menuUrl)
                .then(r => { if (!r.ok) throw new Error('no-menu'); return r.json(); })
                .then(populateMenu)
                .catch((err) => {
                    console.warn('load-menu: menu.json not available at', menuUrl, err);
                    if (typeof location !== 'undefined' && (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
                        console.warn('load-menu: using embedded fallback for local preview');
                        useEmbeddedWhenReady();
                    } else {
                        console.error('load-menu: fetch failed in production; not applying embedded fallback');
                    }
                });
        }
    } catch (e) {
        if (window && window.EMBEDDED_MENU) populateMenu(window.EMBEDDED_MENU);
    }
})();
