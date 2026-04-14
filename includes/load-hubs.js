/**
 * load-hubs.js — Renderiza contenido dinámico para las páginas hub
 * (asambleas, transparencia, tutoriales) desde sus JSON respectivos.
 *
 * Uso: cada página incluye este script y llama a:
 *   loadHub('asambleas')  | loadHub('transparencia') | loadHub('tutoriales')
 *
 * En producción (GitHub Pages) carga el JSON vía fetch().
 * En file:// usa el fallback de window.EMBEDDED_* generado por build-embedded.js.
 */

/* ── Helpers ── */
function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

/* ── Renderers ── */

function renderAsambleas(data) {
    const container = document.getElementById('hubContent');
    if (!container || !data || !data.asambleas) return;
    container.innerHTML = '';
    data.asambleas.forEach(a => {
        const isPast = a.status === 'past';
        const card = document.createElement('div');
        card.className = 'card' + (isPast ? ' card-past' : '');

        let sublinksHtml = '';
        const activeSublinks = (a.sublinks || []).filter(s => !s.disabled);
        if (activeSublinks.length) {
            sublinksHtml = `<div class="card-sublinks">
                <span class="card-sublinks-label">${escapeHtml(a.sublinksLabel || '')}</span>
                ${activeSublinks.map(s => `<a href="${encodeURI(s.url)}" class="card-sublink">
                    <span class="sl-icon">${escapeHtml(s.icon)}</span> ${escapeHtml(s.label)}
                    <span class="sl-arrow">›</span>
                </a>`).join('')}
            </div>`;
        }

        card.innerHTML = `
            <div class="card-header">
                <span class="card-year">${a.year}</span>
                <span class="card-badge ${isPast ? 'badge-past' : 'badge-active'}">${escapeHtml(a.badgeLabel)}</span>
            </div>
            <p class="card-title">${escapeHtml(a.title)}</p>
            <p class="card-desc">${escapeHtml(a.desc)}</p>
            ${!a.mainLink.disabled ? `<a href="${encodeURI(a.mainLink.url)}" class="card-main-link">${escapeHtml(a.mainLink.label)}</a>` : ''}
            ${sublinksHtml}`;
        container.appendChild(card);
    });
}

function renderTransparencia(data) {
    const container = document.getElementById('hubContent');
    if (!container || !data || !data.items) return;
    container.innerHTML = '';
    data.items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'card';
        a.innerHTML = `
            <span class="card-emoji">${escapeHtml(item.emoji)}</span>
            <div class="card-content">
                <p class="card-title">${escapeHtml(item.title)}</p>
                <p class="card-desc">${escapeHtml(item.desc)}</p>
                <span class="card-cta">${escapeHtml(item.cta)}</span>
            </div>`;
        container.appendChild(a);
    });
}

function renderTutoriales(data) {
    const container = document.getElementById('hubContent');
    if (!container || !data) return;
    container.innerHTML = '';

    // Tutoriales section
    if (data.tutoriales && data.tutoriales.length) {
        const section = document.createElement('div');
        section.className = 'section';
        let gridHtml = data.tutoriales.map(t => `
            <a href="${encodeURI(t.url)}" class="tut-card">
                <div class="tut-top">
                    <span class="tut-emoji">${escapeHtml(t.emoji)}</span>
                    <span class="tut-type">${escapeHtml(t.type)}</span>
                </div>
                <div class="tut-body">
                    <h3>${escapeHtml(t.title)}</h3>
                    <p>${escapeHtml(t.desc)}</p>
                    <span class="tut-cta">${escapeHtml(t.cta)}</span>
                </div>
            </a>`).join('');

        section.innerHTML = `
            <div class="section-header">
                <div class="section-icon tutorials">📱</div>
                <div>
                    <h2>Tutoriales</h2>
                    <p>Aprende a usar las herramientas del condominio</p>
                </div>
            </div>
            <div class="tut-grid">${gridHtml}</div>`;
        container.appendChild(section);
    }

    // Divider
    if (data.tutoriales && data.tutoriales.length && data.documentos && data.documentos.length) {
        const hr = document.createElement('hr');
        hr.className = 'section-divider';
        container.appendChild(hr);
    }

    // Documentos section
    if (data.documentos && data.documentos.length) {
        const section = document.createElement('div');
        section.className = 'section';
        let docsHtml = data.documentos.map(d => {
            const target = d.target ? ` target="${d.target}"` : '';
            return `<a href="${encodeURI(d.url)}" class="doc-card"${target}>
                <div class="doc-icon">${escapeHtml(d.fileType)}</div>
                <div class="doc-info">
                    <h3>${escapeHtml(d.title)}</h3>
                    <p>${escapeHtml(d.desc)}</p>
                </div>
                <span class="doc-arrow">›</span>
            </a>`;
        }).join('');

        section.innerHTML = `
            <div class="section-header">
                <div class="section-icon docs">📄</div>
                <div>
                    <h2>Documentos oficiales</h2>
                    <p>Archivos legales y normativos del condominio</p>
                </div>
            </div>
            ${docsHtml}`;
        container.appendChild(section);
    }
}

/* ── Loader ── */

const HUB_CONFIG = {
    asambleas: { json: 'data/asambleas.json', embedded: 'EMBEDDED_ASAMBLEAS', render: renderAsambleas },
    transparencia: { json: 'data/transparencia.json', embedded: 'EMBEDDED_TRANSPARENCIA', render: renderTransparencia },
    tutoriales: { json: 'data/tutoriales.json', embedded: 'EMBEDDED_TUTORIALES', render: renderTutoriales }
};

async function loadHub(hubName) {
    const cfg = HUB_CONFIG[hubName];
    if (!cfg) { console.error('loadHub: unknown hub', hubName); return; }

    let data = null;

    // Try fetch first (works on http/https)
    try {
        const url = new URL(cfg.json, location.href).toString();
        const resp = await fetch(url, { cache: 'no-store' });
        if (!resp.ok) throw new Error(cfg.json + ' not available');
        data = await resp.json();
    } catch (e) {
        console.warn('loadHub: fetch failed for ' + cfg.json + ', trying embedded fallback', e);

        // Wait for embedded data if not yet available
        if (!window[cfg.embedded]) {
            await new Promise(resolve => {
                // Check if it appeared already
                if (window[cfg.embedded]) { resolve(); return; }
                const onReady = () => {
                    document.removeEventListener('embedded-data-ready', onReady);
                    resolve();
                };
                document.addEventListener('embedded-data-ready', onReady);
                // Safety timeout in case event was already fired
                let attempts = 0;
                const poll = setInterval(() => {
                    attempts++;
                    if (window[cfg.embedded] || attempts > 40) {
                        clearInterval(poll);
                        document.removeEventListener('embedded-data-ready', onReady);
                        resolve();
                    }
                }, 100);
            });
        }

        data = window[cfg.embedded] || null;
    }

    if (data) {
        cfg.render(data);
    } else {
        console.error('loadHub: no data available for', hubName);
    }
}
