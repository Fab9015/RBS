(function () {
    // EMBEDDED_BLOG is provided by includes/embedded-data.js as window.EMBEDDED_BLOG
    function applyBlog(data) {
        if (!data || !data.blog) return;
        try { window.blogData = data.blog; } catch (e) { /* ignore */ }
        try { if (typeof blogData !== 'undefined') blogData = data.blog; } catch (e) { /* ignore */ }
        console.info('load-blog: applied', (data.blog && data.blog.length) || 0, 'entries');
        if (typeof renderBlog === 'function') {
            try { renderBlog(); } catch (e) { console.error('renderBlog() error', e); }
            return;
        }

        // Fallback renderer if the page's renderBlog isn't available for any reason
        try {
            const blogEl = document.getElementById('blog');
            const paginationEl = document.getElementById('pagination');
            if (blogEl) {
                blogEl.innerHTML = '';
                (data.blog || []).forEach(entry => {
                    const statusClass = entry.activo ? 'status-active' : 'status-inactive';
                    const statusText = entry.activo ? 'Próximo evento' : 'Evento realizado';
                    blogEl.innerHTML += `\n<div class="blog-entry">\n  <h3>${entry.title}</h3>\n  <p>${entry.description}</p>\n  <p><strong>Fecha:</strong> ${entry.date}</p>\n  <p><strong>Hora:</strong> ${entry.time}</p>\n  <p><strong>Lugar:</strong> ${entry.place}</p>\n  <div class="status-tag ${statusClass}">${statusText}</div>\n</div>`;
                });
            }
            if (paginationEl) paginationEl.innerHTML = '';
        } catch (e) { console.error('fallback render error', e); }
    }
    try {
        if (typeof location !== 'undefined' && location.protocol === 'file:') {
            // If embedded data already present, apply immediately
            if (typeof window.EMBEDDED_BLOG !== 'undefined' && window.EMBEDDED_BLOG) {
                console.warn('Running from file:// - applying embedded blog fallback (ready)');
                applyBlog(window.EMBEDDED_BLOG);
            } else {
                console.warn('Running from file:// - waiting for embedded blog fallback');
                // Wait for embedded-data to load (dispatched by load-fragments)
                const onReady = () => {
                    try { applyBlog(window.EMBEDDED_BLOG); }
                    catch (e) { console.error('applyBlog after ready failed', e); }
                    finally { document.removeEventListener('embedded-data-ready', onReady); }
                };
                document.addEventListener('embedded-data-ready', onReady);
                // Safety: also poll briefly in case event missed
                let attempts = 0;
                const poll = setInterval(() => {
                    attempts++;
                    if (typeof window.EMBEDDED_BLOG !== 'undefined' && window.EMBEDDED_BLOG) {
                        clearInterval(poll);
                        document.removeEventListener('embedded-data-ready', onReady);
                        try { applyBlog(window.EMBEDDED_BLOG); } catch (e) { console.error(e); }
                    } else if (attempts > 20) { // ~2s
                        clearInterval(poll);
                        console.warn('Embedded blog did not appear after waiting');
                    }
                }, 100);
            }
        } else {
            // Fetch blog.json relative to the current page URL (not the script file).
            const blogUrl = (typeof location !== 'undefined') ? new URL('blog.json', location.href).toString() : 'blog.json';
            console.log('load-blog: fetching', blogUrl);
            fetch(blogUrl, { cache: 'no-store' })
                .then(r => { if (!r.ok) throw new Error('no-blog'); return r.json(); })
                .then(applyBlog)
                .catch((err) => {
                    console.warn('load-blog: blog.json not available at', blogUrl, err);
                    if (typeof location !== 'undefined' && (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
                        console.warn('load-blog: using embedded fallback for local preview');
                        try { applyBlog(window.EMBEDDED_BLOG); } catch (e) { console.error('load-blog: apply embedded failed', e); }
                    } else {
                        console.error('load-blog: fetch failed in production; embedded fallback not applied');
                    }
                });
        }
    } catch (e) {
        if (typeof location !== 'undefined' && (location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
            try { applyBlog(window.EMBEDDED_BLOG); } catch (err) { console.error('load-blog: final fallback failed', err); }
        } else {
            console.error('load-blog: unexpected error and not using embedded fallback', e);
        }
    }
})();
