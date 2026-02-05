(function () {
    function adjustMenuPosition() {
        const row = document.querySelector('.menu-row');
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const menu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('menuOverlay');
        const topOffset = rect.bottom;
        if (menu) { menu.style.top = topOffset + "px"; menu.style.height = `calc(100% - ${topOffset}px)`; }
        if (overlay) { overlay.style.top = topOffset + "px"; overlay.style.height = `calc(100% - ${topOffset}px)`; }
    }

    window.toggleMenu = function () {
        adjustMenuPosition();
        const menu = document.getElementById('mobileMenu');
        const toggle = document.getElementById('menuToggle');
        const overlay = document.getElementById('menuOverlay');
        if (!menu) return;
        menu.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        if (toggle) toggle.classList.toggle('close');
        document.body.style.overflow = menu.classList.contains('active') ? "hidden" : "";
    };

    window.closeMenu = function () {
        const menu = document.getElementById('mobileMenu');
        const toggle = document.getElementById('menuToggle');
        const overlay = document.getElementById('menuOverlay');
        if (menu) menu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (toggle) toggle.classList.remove('close');
        document.body.style.overflow = "";
    };

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', adjustMenuPosition);
        window.addEventListener('scroll', adjustMenuPosition);
        adjustMenuPosition();
    });
})();
