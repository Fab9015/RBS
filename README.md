# 🏡 Reserva Bosque Sereno - Sitio Web Oficial

Sitio web del condominio **Reserva Bosque Sereno**. Portal digital completo con información, noticias, directorio de servicios y herramientas para la comunidad.

🌐 **URL:** [https://fab9015.github.io/RBS/](https://fab9015.github.io/RBS/)

---

## 📋 Contenido del Sitio

### Páginas Principales

- **[Inicio](index.html)** - Tablero de eventos y noticias del condominio
- **[Novedades](novedades-condominio.html)** - Anuncio de las 3 grandes innovaciones (sitio web, QR, reconocimiento facial)
- **[Directorio](directorio.html)** - Contactos importantes y proveedores recomendados
- **[Logros](logros.html)** - Eventos realizados y logros alcanzados
- **[Preguntas Frecuentes](preguntas-frecuentes.html)** - Dudas comunes resueltas

### Herramientas y Recursos

- **[Tutorial QR Condovive](qr-condovive.html)** - Guía para generar y usar invitaciones digitales
- **[¿Qué Cubre Mi Cuota?](que-cubre-mi-cuota.html)** - Desglose de gastos del condominio
- **[Pagos Adelantados](pagos-adelantados.html)** - Registro de pagos anticipados
- **[Reporte de Agua](reporte-agua.html)** - Reportes de consumo de agua

### Documentos y Reportes

- **[Informe Mesa de Trabajo](informe-mesa-trabajo.html)**
- **[Resolución de Asamblea](resolucion-asamblea.html)**
- **[Reglas del Juego](reglas-del-juego.html)**
- **[Encuesta de Aceptación](encuesta-aceptacion.html)**

### Herramientas de Gestión

- **[Generador de Directorio](generador-directorio.html)** - Herramienta para actualizar el directorio
- **[JSON Generator](json-generator.html)** - Generador de datos estructurados
- **[Image Resizer](image-resizer.html)** - Redimensionador de imágenes
- **[Menú de Accesos Rápidos](menu-accesos-rapidos.html)**

---

## 🗂️ Estructura del Proyecto

```
RBS/
├── index.html                    # Página principal
├── novedades-condominio.html     # Página de anuncios principales
├── directorio.html               # Directorio de contactos
├── logros.html                   # Logros y eventos
├── preguntas-frecuentes.html     # FAQ
├── qr-condovive.html            # Tutorial QR
├── styles/
│   └── main.css                 # Estilos globales del sitio
├── includes/
│   ├── footer.html              # Footer compartido
│   ├── menu.html                # Menú de navegación
│   ├── load-fragments.js        # Cargador de componentes
│   ├── load-menu.js             # Cargador del menú
│   ├── menu-behavior.js         # Comportamiento del menú
│   └── embedded-data.js         # Datos embebidos
├── img/                         # Imágenes del sitio
│   ├── logo.png
│   ├── favicon.png
│   └── logros/                  # Imágenes de logros
├── scripts/                     # Scripts personalizados
├── media/                       # Archivos multimedia
├── files/                       # Documentos y archivos
├── *.json                       # Datos estructurados (blog, directorio, FAQ, etc.)
└── README.md                    # Este archivo
```

---

## 🎨 Características

✅ **Diseño Responsivo** - Optimizado para móviles, tablets y escritorio  
✅ **Navegación Modular** - Menú y footer cargados dinámicamente  
✅ **Open Graph** - Optimizado para compartir en redes sociales  
✅ **SEO Friendly** - Metadatos y estructura semántica  
✅ **Componentes Reutilizables** - Sistema de includes con JavaScript  
✅ **Datos en JSON** - Fácil actualización de contenido  
✅ **Paleta de Colores Personalizada** - Variables CSS con colores del condominio

---

## 🎨 Paleta de Colores

El sitio utiliza colores personalizados definidos en `styles/main.css`:

- **Beige claro:** `#fdfaf5` - Fondo principal
- **Verde oliva:** `#a1b27a` - Color de acento
- **Marrón:** `#5c4033` - Títulos y texto importante

---

## 🚀 Despliegue

El sitio está alojado en **GitHub Pages**:

```
https://fab9015.github.io/RBS/
```

### Actualizar el Sitio

1. Realizar cambios en los archivos locales
2. Commit y push al repositorio:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin main
   ```
3. GitHub Pages actualizará automáticamente el sitio

---

## 📦 Archivos de Datos (JSON)

El sitio utiliza archivos JSON para gestionar contenido dinámico:

- `blog.json` - Noticias y publicaciones del blog
- `directorio.json` - Contactos y proveedores
- `logros.json` - Eventos y logros alcanzados
- `faq.json` - Preguntas frecuentes
- `menu.json` - Estructura del menú de navegación
- `pagos_adelantados.json` - Registro de pagos anticipados

---

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript Vanilla** - Funcionalidad y carga dinámica
- **GitHub Pages** - Hosting gratuito
- **JSON** - Almacenamiento de datos estructurados

---

## 👥 Mantenimiento

**Actualizado por:** Comité de Administración - Reserva Bosque Sereno  
**Última actualización:** Febrero 2026

---

## 📄 Licencia

© 2026 Reserva Bosque Sereno. Todos los derechos reservados.

Este sitio web es de uso exclusivo para residentes del condominio Reserva Bosque Sereno.
