/**
 * Genera includes/embedded-data.js para pruebas locales con file://
 * Uso: node scripts/build-embedded.js
 *
 * El archivo generado NO se sube al repo (.gitignore).
 * En producción (GitHub Pages) cada página carga sus JSON via fetch().
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// Mapa: nombre de variable => archivo JSON fuente
const sources = {
    EMBEDDED_DIRECTORIO: 'directorio.json',
    EMBEDDED_DATOS: 'datos.json',
    EMBEDDED_DATA: 'data.json',
    EMBEDDED_LOGROS: 'logros.json',
    EMBEDDED_BLOG: 'blog.json',
    EMBEDDED_MENU: 'menu.json',
    EMBEDDED_PAGOS: 'pagos_adelantados.json',
    EMBEDDED_FAQ: 'faq.json',
    EMBEDDED_GASTOS_EXTRAORDINARIAS: 'control-gastos-cuotas-extraordinarias.json',
    EMBEDDED_MASCOTAS: 'padron-mascotas.json',
};

const lines = [
    '/* AUTO-GENERADO — no editar manualmente.',
    '   Ejecuta: node scripts/build-embedded.js',
    '   Este archivo NO se sube al repo (ver .gitignore). */',
    '',
];

for (const [varName, file] of Object.entries(sources)) {
    const filePath = path.join(root, file);
    if (!fs.existsSync(filePath)) {
        console.warn(`AVISO: no se encontró ${file}, se omite ${varName}`);
        continue;
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    lines.push(`window.${varName} = ${JSON.stringify(data, null, 2)};`, '');
}

const dest = path.join(root, 'includes', 'embedded-data.js');
fs.writeFileSync(dest, lines.join('\n'), 'utf8');

const defined = lines
    .filter(l => l.startsWith('window.EMBEDDED_'))
    .map(l => l.split(' =')[0]);

console.log('embedded-data.js generado correctamente');
console.log('Variables:', defined.join(', '));
console.log('Tamaño:', fs.statSync(dest).size, 'bytes');
