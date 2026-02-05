// Centralized embedded data for file:// previews
// This file defines global variables used as fallbacks when fetch() is blocked.
(function () {
    // Menu object
    window.EMBEDDED_MENU = { "menu": [{ "title": "Home", "url": "index.html" }, { "title": "Directorio", "url": "directorio.html" }, { "title": "Condovive", "url": "https://app.condovive.com/" }, { "title": "Preguntas Frecuentes", "url": "preguntas-frecuentes.html" }, { "title": "Asamblea 2025", "url": "menu-accesos-rapidos.html" }, { "title": "Pagos Adelantados", "url": "pagos-adelantados.html" }, { "title": "Dashboard del Directorio", "url": "generador-directorio.html" }] };

    // Blog entries
    window.EMBEDDED_BLOG = {
        "blog": [
            {
                "title": "Presentación de avances y novedades",
                "description": "<p>La nueva administración y el comité invitan a una reunión especial donde compartiremos logros y presentaremos innovaciones que marcarán una nueva etapa en nuestro condominio.</p><p>Entre las sorpresas que se darán a conocer:</p><ul class='custom-list'><li>Una plataforma digital que reunirá información y accesos clave.</li><li>Mejoras en la seguridad peatonal con tecnología de última generación.</li><li>Nuevas formas de gestionar visitas y proveedores de manera práctica.</li></ul><p>Será la oportunidad de descubrir estas iniciativas y participar en su lanzamiento.</p>",
                "date": "11 de febrero de 2026",
                "time": "20:00 horas",
                "place": "Salón de eventos del condominio",
                "activo": true
            },
            {
                "title": "Reunion 6",
                "description": "Se discutirán medidas de seguridad y protocolos de emergencia para reforzar la tranquilidad en el condominio.",
                "date": "25 de febrero de 2026",
                "time": "19:00 horas",
                "place": "Área común de la caseta",
                "activo": false
            },
            {
                "title": "Reunion 5",
                "description": "Convocatoria para vecinos interesados en participar en la limpieza de áreas verdes y comunes.",
                "date": "1 de marzo de 2026",
                "time": "09:00 horas",
                "place": "Parque central del condominio",
                "activo": false
            },
            {
                "title": "Reunion 4",
                "description": "Se impartirá un taller práctico sobre separación de residuos y proyectos sustentables.",
                "date": "15 de marzo de 2026",
                "time": "17:00 horas",
                "place": "Salón de eventos",
                "activo": false
            },
            {
                "title": "Reunion 3",
                "description": "Revisión de cuentas, acuerdos de mantenimiento y propuestas de mejora para el condominio.",
                "date": "30 de marzo de 2026",
                "time": "18:00 horas",
                "place": "Salón de eventos",
                "activo": false
            },
            {
                "title": "Reunion 2",
                "description": "Evento social para fortalecer la comunidad con música, comida y actividades para todas las edades.",
                "date": "10 de abril de 2026",
                "time": "16:00 horas",
                "place": "Área de alberca",
                "activo": false
            },
            {
                "title": "Reunion 1",
                "description": "Capacitación básica en primeros auxilios impartida por personal especializado.",
                "date": "20 de abril de 2026",
                "time": "10:00 horas",
                "place": "Salón de eventos",
                "activo": false
            }
        ]
    };

    // Pagos adelantados (full)
    window.EMBEDDED_PAGOS = {
        "resumen": {
            "total": 68261.14,
            "count": 57,
            "avg": 1197.56
        },
        "sectores": {
            "labels": ["SABINO", "SAKURA", "SEQUOIA"],
            "values": [18, 14, 25]
        },
        "rangos": {
            "labels": ["≤600", "601-1200", "1201-3000", ">3000"],
            "values": [20, 25, 8, 4]
        },
        "montos": {
            "labels": [
                "SABINO 101", "SABINO 108", "SABINO 111", "SABINO 118", "SABINO 129", "SABINO 132", "SABINO 133", "SABINO 135", "SABINO 138", "SABINO 141", "SABINO 145", "SABINO 160", "SABINO 211", "SABINO 219", "SABINO 222", "SABINO 223", "SABINO 241", "SABINO 253",
                "SAKURA 112", "SAKURA 122", "SAKURA 125", "SAKURA 131", "SAKURA 140", "SAKURA 144", "SAKURA 160", "SAKURA 225", "SAKURA 227", "SAKURA 234", "SAKURA 237", "SAKURA 243", "SAKURA 258",
                "SEQUOIA 117", "SEQUOIA 118", "SEQUOIA 124", "SEQUOIA 130", "SEQUOIA 149", "SEQUOIA 153", "SEQUOIA 204", "SEQUOIA 209", "SEQUOIA 221", "SEQUOIA 238", "SEQUOIA 245", "SEQUOIA 248", "SEQUOIA 303", "SEQUOIA 318", "SEQUOIA 320", "SEQUOIA 339", "SEQUOIA 342", "SEQUOIA 345", "SEQUOIA 511", "SEQUOIA 513", "SEQUOIA 516", "SEQUOIA 519", "SEQUOIA 534"
            ],
            "values": [
                1200, 1200, 600, 1200, 4200, 1200, 600, 885.9, 1200, 1200, 1200, 6600, 600, 2400, 615.75, 600, 1200, 1200,
                564, 600, 600, 2400, 1010.1, 3000, 1200, 1200, 600, 1200, 1200, 600, 1200,
                600, 600, 600, 1200, 600, 600, 600, 2982, 2400, 1080, 1200, 580.9, 326.14, 1200, 1200, 587.1, 600, 1200, 1200, 1200, 1020, 1200, 1020
            ]
        },
        "detalle": [
            { "domicilio": "SABINO 101", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 108", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 111", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SABINO 118", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 129", "tipo": "Casa", "meses": "Nov-Mayo", "monto": 4200 },
            { "domicilio": "SABINO 132", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 133", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SABINO 135", "tipo": "Casa", "meses": "Nov-Dic", "monto": 885.9 },
            { "domicilio": "SABINO 138", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 141", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 145", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 160", "tipo": "Casa", "meses": "Nov-Sep", "monto": 6600 },
            { "domicilio": "SABINO 211", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SABINO 219", "tipo": "Casa", "meses": "Nov-Feb", "monto": 2400 },
            { "domicilio": "SABINO 222", "tipo": "Casa", "meses": "Nov-Dic", "monto": 615.75 },
            { "domicilio": "SABINO 223", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SABINO 241", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SABINO 253", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },

            { "domicilio": "SAKURA 112", "tipo": "Casa", "meses": "Nov", "monto": 564 },
            { "domicilio": "SAKURA 122", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SAKURA 125", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SAKURA 131", "tipo": "Casa", "meses": "Nov-Ene", "monto": 2400 },
            { "domicilio": "SAKURA 140", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1010.1 },
            { "domicilio": "SAKURA 144", "tipo": "Casa", "meses": "Nov-Feb", "monto": 3000 },
            { "domicilio": "SAKURA 160", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SAKURA 225", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SAKURA 227", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SAKURA 234", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SAKURA 237", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SAKURA 243", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SAKURA 258", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },

            { "domicilio": "SEQUOIA 117", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 118", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 124", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 130", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 149", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 153", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 204", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 209", "tipo": "Casa", "meses": "Nov-Mar", "monto": 2982 },
            { "domicilio": "SEQUOIA 221", "tipo": "Casa", "meses": "Nov-Feb", "monto": 2400 },
            { "domicilio": "SEQUOIA 238", "tipo": "Terreno", "meses": "Nov-Dic", "monto": 1080 },
            { "domicilio": "SEQUOIA 245", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 248", "tipo": "Casa", "meses": "Nov", "monto": 580.9 },
            { "domicilio": "SEQUOIA 303", "tipo": "Casa", "meses": "Nov", "monto": 326.14 },
            { "domicilio": "SEQUOIA 318", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 320", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 339", "tipo": "Casa", "meses": "Nov", "monto": 587.1 },
            { "domicilio": "SEQUOIA 342", "tipo": "Casa", "meses": "Nov", "monto": 600 },
            { "domicilio": "SEQUOIA 345", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 511", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 513", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 516", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1020 },
            { "domicilio": "SEQUOIA 519", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1200 },
            { "domicilio": "SEQUOIA 534", "tipo": "Casa", "meses": "Nov-Dic", "monto": 1020 }
        ]
    };

    // directorio full fallback
    window.EMBEDDED_DIRECTORIO = {
        "categorias": [
            { "nombre": "Plomero", "visible": true },
            { "nombre": "Electricista", "visible": true },
            { "nombre": "Carpintero", "visible": true },
            { "nombre": "Servicios de limpieza", "visible": true },
            { "nombre": "Jardinero", "visible": true },
            { "nombre": "Albañil", "visible": true },
            { "nombre": "Vigilancia", "visible": false },
            { "nombre": "Administración", "visible": false },
            { "nombre": "Oficiales", "visible": false },
            { "nombre": "Gaseras", "visible": true },
            { "nombre": "Taxi/Uber", "visible": true }
        ],
        "busquedasRelevantes": [
            { "categoria": "Plomero", "activo": true },
            { "categoria": "Electricista", "activo": true },
            { "categoria": "Carpintero", "activo": true },
            { "categoria": "Servicios de limpieza", "activo": true },
            { "categoria": "Jardinero", "activo": true },
            { "categoria": "Albañil", "activo": true },
            { "categoria": "Gaseras", "activo": true },
            { "categoria": "Taxi/Uber", "activo": true }
        ],
        "trabajadores": [
            {
                "id": "a6666666-ffff-4aaa-8bbb-000000000006",
                "nombre": "Administración",
                "telefono": "449-213-3944",
                "correo": "admin@condominio.com",
                "categoria": "Administrador",
                "imagen": "img/admin.png",
                "relevante": true
            },
            {
                "id": "a7777777-aaaa-4bbb-8ccc-000000000007",
                "nombre": "Caseta de vigilancia",
                "telefono": "314-378-5941",
                "correo": "caseta@condominio.com",
                "categoria": "Vigilancia",
                "imagen": "img/vigilancia.png",
                "relevante": true
            },
            {
                "id": "865c542d-3901-4a91-86b8-4df1d50df0ed",
                "nombre": "Ramón Gallardo",
                "telefono": "449-428-3185",
                "correo": "",
                "categoria": "Albañil",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "8820c33d-1384-4757-a0b1-66a97966362d",
                "nombre": "Construcciones Zamora",
                "telefono": "449-107-5522",
                "correo": "",
                "categoria": "Albañil",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "f8662870-a919-466a-802b-0e1eb6715f13",
                "nombre": "Ernesto Chata",
                "telefono": "449-168-1108",
                "correo": "",
                "categoria": "Jardinero",
                "imagen": "img/jardinero.png",
                "relevante": false
            },
            {
                "id": "22f3d383-2f27-4069-a6ae-6e48cbfa3960",
                "nombre": "Los Encinos",
                "telefono": "449-186-1561",
                "correo": "",
                "categoria": "Jardinero",
                "imagen": "img/jardinero.png",
                "relevante": false
            },
            {
                "id": "f1300015-dad0-45c4-90f0-e5970a8b8d00",
                "nombre": "Mario Galvan",
                "telefono": "886-136-9187",
                "correo": "",
                "categoria": "Jardinero",
                "imagen": "img/jardinero.png",
                "relevante": false
            },
            {
                "id": "34c9e1c2-aacb-40d5-acdf-7d311cceb8f7",
                "nombre": "José Luis",
                "telefono": "449-980-1019",
                "correo": "",
                "categoria": "Carpintero",
                "imagen": "img/carpintero.png",
                "relevante": false
            },
            {
                "id": "ce89f0b0-fdf9-48ae-bc72-000f8a82b640",
                "nombre": "La Sevillana",
                "telefono": "449-185-7885",
                "correo": "",
                "categoria": "Carpintero",
                "imagen": "img/carpintero.png",
                "relevante": false
            },
            {
                "id": "39f09f80-7c36-4a9f-8840-f79f3c992f31",
                "nombre": "Osvaldo Guerra",
                "telefono": "449-138-3110",
                "correo": "",
                "categoria": "Carpintero",
                "imagen": "img/carpintero.png",
                "relevante": false
            },
            {
                "id": "360f680a-11b1-4741-8225-d241d8eafc2e",
                "nombre": "Carlos Hernández",
                "telefono": "449-553-0538",
                "correo": "",
                "categoria": "Carpintero",
                "imagen": "img/carpintero.png",
                "relevante": false
            },
            {
                "id": "86210de2-b43b-4fba-9107-6fb9b6ca3b43",
                "nombre": "Servicios Juarez",
                "telefono": "449-197-6774",
                "correo": "",
                "categoria": "Plomero",
                "imagen": "img/plomero.png",
                "relevante": false
            },
            {
                "id": "4478d16d-780b-4642-8503-38f5ad714b52",
                "nombre": "Juan Juarez",
                "telefono": "449-552-7564",
                "correo": "",
                "categoria": "Plomero",
                "imagen": "img/plomero.png",
                "relevante": false
            },
            {
                "id": "63d23c57-567e-4b82-9e52-3c219a38b503",
                "nombre": "Jonás",
                "telefono": "449-263-5454",
                "correo": "",
                "categoria": "Plomero",
                "imagen": "img/plomero.png",
                "relevante": false
            },
            {
                "id": "b089cf94-2b0c-40aa-85ee-4151ac4f1521",
                "nombre": "Efrain NTN",
                "telefono": "449-186-8547",
                "correo": "",
                "categoria": "Electricista",
                "imagen": "img/electricista.png",
                "relevante": false
            },
            {
                "id": "878c3b4c-e6c4-46a3-9a05-7fcf595ed109",
                "nombre": "Manuel Mata",
                "telefono": "449-277-1260",
                "correo": "",
                "categoria": "Electricista",
                "imagen": "img/electricista.png",
                "relevante": false
            },
            {
                "id": "8bb7af62-af8f-44af-8450-c81bd97806d0",
                "nombre": "Gas Imperial",
                "telefono": "449-454-0069",
                "correo": "",
                "categoria": "Gaseras",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "876bcffc-2f43-4699-a8e2-a04a75c5151d",
                "nombre": "Central de Gas",
                "telefono": "449-912-2222",
                "correo": "",
                "categoria": "Gaseras",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "77fc7fae-2263-435b-a2fa-ad01d3a5b59f",
                "nombre": "Gas Noel",
                "telefono": "449-910-9010",
                "correo": "",
                "categoria": "Gaseras",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "d9f33f82-dc03-44d5-ac9a-c8adab448c36",
                "nombre": "Gas Rosa",
                "telefono": "449-158-1600",
                "correo": "",
                "categoria": "Gaseras",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "cc552702-90a6-4a1d-85d7-d5c3def63684",
                "nombre": "Sr. Luis",
                "telefono": "449-368-8719",
                "correo": "",
                "categoria": "Taxi/Uber",
                "imagen": "img/trabajador.png",
                "relevante": false
            },
            {
                "id": "4fd0766e-3e2e-478b-b851-88cbad5e9b9b",
                "nombre": "Luis Reyna",
                "telefono": "449-368-8719",
                "correo": "",
                "categoria": "Taxi/Uber",
                "imagen": "img/trabajador.png",
                "relevante": false
            }
        ]
    };

    // FAQ
    window.EMBEDDED_FAQ = [
        { "question": "¿Cómo puedo pagar mis cuotas de mantenimiento?", "answer": "Puedes realizar tu pago en la oficina de administración o mediante transferencia bancaria." },
        { "question": "¿Dónde encuentro el reglamento del condominio?", "answer": "El reglamento está disponible en la oficina de administración y en la página oficial del condominio." },
        { "question": "¿Qué hacer en caso de una emergencia dentro del condominio?", "answer": "Contacta inmediatamente a seguridad interna o llama a los números de emergencia locales." },
        { "question": "¿Cómo puedo registrar a un visitante?", "answer": "Debes notificar a la caseta de vigilancia con anticipación y proporcionar los datos del visitante." },
        { "question": "¿Cuáles son los horarios de uso de las áreas comunes?", "answer": "Las áreas comunes están disponibles de 8:00 am a 10:00 pm todos los días." }
    ];

    // Minimal datos fallback (encuesta) — pages may include larger embedded copies
    window.EMBEDDED_DATOS = [{ "calle": "Sakura", "domicilio": 101, "p1": 3, "p2": 5, "p3": 5, "p4": "Sí", "p5": 5 }];

    // reporte-agua full data (used for file:// previews)
    window.EMBEDDED_DATA = {
        "pactados": 15,
        "personas": [
            {
                "nombre": "CASETA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE BAOBAB",
                "numero_exterior": "101",
                "direccion": "RESERVA DE BAOBAB #101"
            },
            {
                "nombre": "CARLOS ROBERTO FELIX MARTINEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "101",
                "direccion": "RESERVA DE SAKURA #101"
            },
            {
                "nombre": "ANGELA  AZUCENA HERRERA RODRIGUEZ",
                "consumo": 12,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "102",
                "direccion": "RESERVA DE SAKURA #102"
            },
            {
                "nombre": "LUIS  ANTONIO GONZALEZ VALDIVIA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "103",
                "direccion": "RESERVA DE SAKURA #103"
            },
            {
                "nombre": "NORMA  ALICIA MARIN ALVARADO",
                "consumo": 2,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "104",
                "direccion": "RESERVA DE SAKURA #104"
            },
            {
                "nombre": "MARIO ALBERTO CASTAÑEDA LOPEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "105",
                "direccion": "RESERVA DE SAKURA #105"
            },
            {
                "nombre": "MARTA ESTHELA GONZALEZ HERNANDEZ",
                "consumo": 2,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "106",
                "direccion": "RESERVA DE SAKURA #106"
            },
            {
                "nombre": "EDUARDO ESCARCEGA RANGEL",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "107",
                "direccion": "RESERVA DE SAKURA #107"
            },
            {
                "nombre": "SARA  ALEJANDRA GONZALEZ PADILLA",
                "consumo": 19,
                "excedente": 4,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "108",
                "direccion": "RESERVA DE SAKURA #108"
            },
            {
                "nombre": "NANCY CARINA JIMENEZ DE LA TORRE",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "109",
                "direccion": "RESERVA DE SAKURA #109"
            },
            {
                "nombre": "VERONICA MARTINEZ PEREZCHICA",
                "consumo": 8,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "110",
                "direccion": "RESERVA DE SAKURA #110"
            },
            {
                "nombre": "ELIZABETH  GUADALUPE  RANGEL",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "111",
                "direccion": "RESERVA DE SAKURA #111"
            },
            {
                "nombre": "MARIA JHOANA ALBA DE ALBA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "112",
                "direccion": "RESERVA DE SAKURA #112"
            },
            {
                "nombre": "AYRA JUDITH  REYES LOPEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "113",
                "direccion": "RESERVA DE SAKURA #113"
            },
            {
                "nombre": "IMELDA LLAMAS LOZANO",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "114",
                "direccion": "RESERVA DE SAKURA #114"
            },
            {
                "nombre": "ROSALINDA FLORES GARCIA",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "116",
                "direccion": "RESERVA DE SAKURA #116"
            },
            {
                "nombre": "EMILIO PATIÑO PEREZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "117",
                "direccion": "RESERVA DE SAKURA #117"
            },
            {
                "nombre": "FRIDA ESTEFANIA ALVAREZ AGUIÑAGA",
                "consumo": 3,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "118",
                "direccion": "RESERVA DE SAKURA #118"
            },
            {
                "nombre": "JESUS  EDUARDO MUÑOZ DE LEON",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "119",
                "direccion": "RESERVA DE SAKURA #119"
            },
            {
                "nombre": "MA. GUADALUPE DIAZ MURILLO",
                "consumo": 22,
                "excedente": 7,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "120",
                "direccion": "RESERVA DE SAKURA #120"
            },
            {
                "nombre": "LAURA  ELENA VELOZ  ROMO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "121",
                "direccion": "RESERVA DE SAKURA #121"
            },
            {
                "nombre": "ISAIAS LOMELI VAZQUEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "122",
                "direccion": "RESERVA DE SAKURA #122"
            },
            {
                "nombre": "GERARDO PEREZ GONZALEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "123",
                "direccion": "RESERVA DE SAKURA #123"
            },
            {
                "nombre": "ALEJANDRA FLORES ARELLANO",
                "consumo": 16,
                "excedente": 1,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "124",
                "direccion": "RESERVA DE SAKURA #124"
            },
            {
                "nombre": "LUIS MARIANO SANDOVAL GONZALEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "125",
                "direccion": "RESERVA DE SAKURA #125"
            },
            {
                "nombre": "MARIA NAYELI SAUCEDO MUÑOZ",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "126",
                "direccion": "RESERVA DE SAKURA #126"
            },
            {
                "nombre": "CLAUDIO ROA LOPEZ VELARDE",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "127",
                "direccion": "RESERVA DE SAKURA #127"
            },
            {
                "nombre": "OMAR  ALEJANDRO CERVANTES TERAN",
                "consumo": 5,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "128",
                "direccion": "RESERVA DE SAKURA #128"
            },
            {
                "nombre": "OSWALDO GUILLERMO NAVARRO GARCIA",
                "consumo": 15,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "130",
                "direccion": "RESERVA DE SAKURA #130"
            },
            {
                "nombre": "ANGEL GONZALEZ SANCHEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "131",
                "direccion": "RESERVA DE SAKURA #131"
            },
            {
                "nombre": "ROBERTO EDUARDO TORRES OROZCO BERMEO",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "132",
                "direccion": "RESERVA DE SAKURA #132"
            },
            {
                "nombre": "ANDRES KOTHOLAY MEDINA MOTA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "133",
                "direccion": "RESERVA DE SAKURA #133"
            },
            {
                "nombre": "ANTONIO RODRIGUEZ FRAUSTO",
                "consumo": 48,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "134",
                "direccion": "RESERVA DE SAKURA #134"
            },
            {
                "nombre": "PABLO ARELLANO RAMIREZ ESPAÑA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "135",
                "direccion": "RESERVA DE SAKURA #135"
            },
            {
                "nombre": "RAFAEL CAMPA GARCIA",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "136",
                "direccion": "RESERVA DE SAKURA #136"
            },
            {
                "nombre": "SALVADOR VENEGAS ESCOBAR",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "137",
                "direccion": "RESERVA DE SAKURA #137"
            },
            {
                "nombre": "PATRICIA MUÑOZ MARIN",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "138",
                "direccion": "RESERVA DE SAKURA #138"
            },
            {
                "nombre": "ERNESTO PASILLAS LUEVANO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "139",
                "direccion": "RESERVA DE SAKURA #139"
            },
            {
                "nombre": "SUPERVISOR INTEGRAL DE  OBRA CIVIL",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "140",
                "direccion": "RESERVA DE SAKURA #140"
            },
            {
                "nombre": "LUZ MARIA ALEJANDRA LOPEZ ESPINOZA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "141",
                "direccion": "RESERVA DE SAKURA #141"
            },
            {
                "nombre": "KARLA NOHELIA RODRIGUEZ RUIZ",
                "consumo": 13,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "142",
                "direccion": "RESERVA DE SAKURA #142"
            },
            {
                "nombre": "HILDA XOCHITL HERRERA JARAMILLO",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "144",
                "direccion": "RESERVA DE SAKURA #144"
            },
            {
                "nombre": "MA. GUADALUPE HARO SANCHEZ",
                "consumo": 8,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "146",
                "direccion": "RESERVA DE SAKURA #146"
            },
            {
                "nombre": "JOSE ANTELMO SOLIS ORTEGA",
                "consumo": 12,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "148",
                "direccion": "RESERVA DE SAKURA #148"
            },
            {
                "nombre": "BERENICE MEDINA MOTA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "150",
                "direccion": "RESERVA DE SAKURA #150"
            },
            {
                "nombre": "ROXANA YARETH CHAVEZ DIAZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "152",
                "direccion": "RESERVA DE SAKURA #152"
            },
            {
                "nombre": "MARIA FERNANDA LOZANO REYES",
                "consumo": 13,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "154",
                "direccion": "RESERVA DE SAKURA #154"
            },
            {
                "nombre": "EDGAR ALEJANDRO SANTILLAN MARTINEZ",
                "consumo": 38,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "156",
                "direccion": "RESERVA DE SAKURA #156"
            },
            {
                "nombre": "FERNANDO HERNANDEZ CAMARILLO",
                "consumo": 8,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "158",
                "direccion": "RESERVA DE SAKURA #158"
            },
            {
                "nombre": "ALMA  ALEJANDRA DE LA VEGA LARA",
                "consumo": 19,
                "excedente": 4,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "160",
                "direccion": "RESERVA DE SAKURA #160"
            },
            {
                "nombre": "AGUSTÍN QUINTANA RODRIGUEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "201",
                "direccion": "RESERVA DE SAKURA #201"
            },
            {
                "nombre": "MIGUEL ANGEL GONZALEZ VILLEGAS",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "202",
                "direccion": "RESERVA DE SAKURA #202"
            },
            {
                "nombre": "ANA  LILIA CENA VALDES",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "203",
                "direccion": "RESERVA DE SAKURA #203"
            },
            {
                "nombre": "MONICA FABIOLA BAÑUELOS RODARTE",
                "consumo": 43,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "204",
                "direccion": "RESERVA DE SAKURA #204"
            },
            {
                "nombre": "MA. DE JESUS HERMOSILLO PADILLA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "205",
                "direccion": "RESERVA DE SAKURA #205"
            },
            {
                "nombre": "MARIA DEL CARMEN ARELLANO ESPINOZA",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "206",
                "direccion": "RESERVA DE SAKURA #206"
            },
            {
                "nombre": "CATALINA JAUREGUI GOMEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "207",
                "direccion": "RESERVA DE SAKURA #207"
            },
            {
                "nombre": "EDUARDO MENDEZ HERNANDEZ",
                "consumo": 106,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "208",
                "direccion": "RESERVA DE SAKURA #208"
            },
            {
                "nombre": "MA. CECILIA GUERRERO LOPEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "209",
                "direccion": "RESERVA DE SAKURA #209"
            },
            {
                "nombre": "AURORA MARTIN ALVAREZ",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "210",
                "direccion": "RESERVA DE SAKURA #210"
            },
            {
                "nombre": "JUAN  MANUEL VICENCIO JUAREZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "211",
                "direccion": "RESERVA DE SAKURA #211"
            },
            {
                "nombre": "FABIAN GERARDO GONZALES ANGELES",
                "consumo": 7,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "212",
                "direccion": "RESERVA DE SAKURA #212"
            },
            {
                "nombre": "LUZ MARIA SANCHEZ MARQUEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "213",
                "direccion": "RESERVA DE SAKURA #213"
            },
            {
                "nombre": "CAROLINA ROBLES RAMON",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "214",
                "direccion": "RESERVA DE SAKURA #214"
            },
            {
                "nombre": "ALAN VEGA LOPEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "215",
                "direccion": "RESERVA DE SAKURA #215"
            },
            {
                "nombre": "CHRISTIAN JESUS ORENDAY  GOURCY",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "216",
                "direccion": "RESERVA DE SAKURA #216"
            },
            {
                "nombre": "CONSTRUCTORA JOMAC, S.A. DE C.V.",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "217",
                "direccion": "RESERVA DE SAKURA #217"
            },
            {
                "nombre": "EDITH CARRILLO BRIANO",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "218",
                "direccion": "RESERVA DE SAKURA #218"
            },
            {
                "nombre": "JUANA  ANGELICA GARCIA  LUNA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "219",
                "direccion": "RESERVA DE SAKURA #219"
            },
            {
                "nombre": "FELIPE DE JESUS IBARRA TORRES",
                "consumo": 5,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "220",
                "direccion": "RESERVA DE SAKURA #220"
            },
            {
                "nombre": "ANA PAULINA LOPEZ GONZALEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "221",
                "direccion": "RESERVA DE SAKURA #221"
            },
            {
                "nombre": "JEANETH  IVONNE DELGADILLO CASILLAS",
                "consumo": 10,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "222",
                "direccion": "RESERVA DE SAKURA #222"
            },
            {
                "nombre": "KAREN LIZETH SOTO CASTILLO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "223",
                "direccion": "RESERVA DE SAKURA #223"
            },
            {
                "nombre": "DANIEL CHAVEZ MACIAS",
                "consumo": 16,
                "excedente": 1,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "224",
                "direccion": "RESERVA DE SAKURA #224"
            },
            {
                "nombre": "ANGEL MUÑOZ HERNANDEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "225",
                "direccion": "RESERVA DE SAKURA #225"
            },
            {
                "nombre": "RAUL HERMOSILLO GOMEZ",
                "consumo": 11,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "226",
                "direccion": "RESERVA DE SAKURA #226"
            },
            {
                "nombre": "RODOLFO DEMETRIO GONZALEZ TORRES",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "227",
                "direccion": "RESERVA DE SAKURA #227"
            },
            {
                "nombre": "MA. EUGENIA CASTILLO CASTRO",
                "consumo": 11,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "228",
                "direccion": "RESERVA DE SAKURA #228"
            },
            {
                "nombre": "LUIS  GABRIEL GUTIERREZ ACOSTA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "229",
                "direccion": "RESERVA DE SAKURA #229"
            },
            {
                "nombre": "ISABEL SARAHI RODRIGUEZ COLIS",
                "consumo": 7,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "230",
                "direccion": "RESERVA DE SAKURA #230"
            },
            {
                "nombre": "RAUL REYES FRAUSTO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "231",
                "direccion": "RESERVA DE SAKURA #231"
            },
            {
                "nombre": "JOSE MANUEL AVILA  SANCHEZ",
                "consumo": 8,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "232",
                "direccion": "RESERVA DE SAKURA #232"
            },
            {
                "nombre": "JOSE MANUEL MARTIN ESPARZA CHAVEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "233",
                "direccion": "RESERVA DE SAKURA #233"
            },
            {
                "nombre": "KARLA DOLORES AIDEE RAMIREZ LOPEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "234",
                "direccion": "RESERVA DE SAKURA #234"
            },
            {
                "nombre": "NORMA MARIANA DIAZ REGALADO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "235",
                "direccion": "RESERVA DE SAKURA #235"
            },
            {
                "nombre": "IVAN YOED GONZALEZ ARECHIGA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "236",
                "direccion": "RESERVA DE SAKURA #236"
            },
            {
                "nombre": "JONATHAN ULISES LOPEZ RAMOS",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "237",
                "direccion": "RESERVA DE SAKURA #237"
            },
            {
                "nombre": "CAROLINA  CONCEPCION VELASQUEZ  TISCAREÑO",
                "consumo": 11,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "238",
                "direccion": "RESERVA DE SAKURA #238"
            },
            {
                "nombre": "EDGAR AGUSTIN GOMEZ RUIZ ESPARZA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "239",
                "direccion": "RESERVA DE SAKURA #239"
            },
            {
                "nombre": "EDGAR PEREZ CRUZ",
                "consumo": 13,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "240",
                "direccion": "RESERVA DE SAKURA #240"
            },
            {
                "nombre": "JUAN MANUEL TORRES VARGAS",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "241",
                "direccion": "RESERVA DE SAKURA #241"
            },
            {
                "nombre": "MARINA SARAI ECHEVERRIA DIAZ DE LEON",
                "consumo": 12,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "242",
                "direccion": "RESERVA DE SAKURA #242"
            },
            {
                "nombre": "JESSICA ESCALANTE GARCIA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "243",
                "direccion": "RESERVA DE SAKURA #243"
            },
            {
                "nombre": "CRISTO NOMAR MARIN CRUZ",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "244",
                "direccion": "RESERVA DE SAKURA #244"
            },
            {
                "nombre": "JUAN FRANCISCO NAVARRO LLAMAS",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "245",
                "direccion": "RESERVA DE SAKURA #245"
            },
            {
                "nombre": "JORGE PRIETO TERRONES",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "246",
                "direccion": "RESERVA DE SAKURA #246"
            },
            {
                "nombre": "REBECA JUDITH MEDINA SIFUENTES",
                "consumo": 10,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "248",
                "direccion": "RESERVA DE SAKURA #248"
            },
            {
                "nombre": "AARON MONROY PIZA",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "250",
                "direccion": "RESERVA DE SAKURA #250"
            },
            {
                "nombre": "ANGELICA DE LA CRUZ GARCIA",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "252",
                "direccion": "RESERVA DE SAKURA #252"
            },
            {
                "nombre": "AARON SANCHEZ CHAVEZ",
                "consumo": 12,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "254",
                "direccion": "RESERVA DE SAKURA #254"
            },
            {
                "nombre": "MARIA GUADALUPE ARELLANO ESPINOZA",
                "consumo": 12,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "256",
                "direccion": "RESERVA DE SAKURA #256"
            },
            {
                "nombre": "RAFAEL RODRIGUEZ PEÑA",
                "consumo": 3,
                "excedente": 0,
                "calle": "RESERVA DE SAKURA",
                "numero_exterior": "258",
                "direccion": "RESERVA DE SAKURA #258"
            },
            {
                "nombre": "GRACIELA AGUILERA  ROSALES",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "101",
                "direccion": "RESERVA DE SEQUOIA #101"
            },
            {
                "nombre": "HELIO DANIEL RIOS ROSALES",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "102",
                "direccion": "RESERVA DE SEQUOIA #102"
            },
            {
                "nombre": "FATIMA GORETTI ZAVALA ENRIQUEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "103",
                "direccion": "RESERVA DE SEQUOIA #103"
            },
            {
                "nombre": "JUAN ANTONIO VELASCO VARGAS",
                "consumo": 2,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "104",
                "direccion": "RESERVA DE SEQUOIA #104"
            },
            {
                "nombre": "ROSA MARIA YAÑEZ BARRON",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "105",
                "direccion": "RESERVA DE SEQUOIA #105"
            },
            {
                "nombre": "SAYRALINN SANCHEZ VERDIN",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "106",
                "direccion": "RESERVA DE SEQUOIA #106"
            },
            {
                "nombre": "PATRICIA EUGENIA ESPINOZA CASTORENA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "107",
                "direccion": "RESERVA DE SEQUOIA #107"
            },
            {
                "nombre": "LAURA ALEJANDRA ORTIZ RODRIGUEZ",
                "consumo": 8,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "108",
                "direccion": "RESERVA DE SEQUOIA #108"
            },
            {
                "nombre": "GILBERTO SILVA RAMIREZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "109",
                "direccion": "RESERVA DE SEQUOIA #109"
            },
            {
                "nombre": "NALLELY DEL ROCIO  JIMENEZ ALCALA",
                "consumo": 10,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "110",
                "direccion": "RESERVA DE SEQUOIA #110"
            },
            {
                "nombre": "MARCOS ALVAREZ GOMEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "111",
                "direccion": "RESERVA DE SEQUOIA #111"
            },
            {
                "nombre": "LUIS DANIEL PARGA CRUZ",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "112",
                "direccion": "RESERVA DE SEQUOIA #112"
            },
            {
                "nombre": "MARCO ANTONIO ARIZMENDI MACEDO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "113",
                "direccion": "RESERVA DE SEQUOIA #113"
            },
            {
                "nombre": "RICARDO SALDAÑA GARAY",
                "consumo": 18,
                "excedente": 3,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "114",
                "direccion": "RESERVA DE SEQUOIA #114"
            },
            {
                "nombre": "CHRISTOPHER ADABACHE PINEDO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "115",
                "direccion": "RESERVA DE SEQUOIA #115"
            },
            {
                "nombre": "LUIS MIGUEL REYNOSO ROMAN",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "116",
                "direccion": "RESERVA DE SEQUOIA #116"
            },
            {
                "nombre": "JOSEPH CARRILLO GONZALEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "117",
                "direccion": "RESERVA DE SEQUOIA #117"
            },
            {
                "nombre": "EDGAR GALLEGOS RUIZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "118",
                "direccion": "RESERVA DE SEQUOIA #118"
            },
            {
                "nombre": "ENRIQUE RIOS ROMO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "119",
                "direccion": "RESERVA DE SEQUOIA #119"
            },
            {
                "nombre": "LEONEL ARMANDO RAMIREZ DIAZ DE LEON",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "120",
                "direccion": "RESERVA DE SEQUOIA #120"
            },
            {
                "nombre": "MALIKE DANIELA LEDESMA MUÑOZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "121",
                "direccion": "RESERVA DE SEQUOIA #121"
            },
            {
                "nombre": "MARIA FERNANDA GUTIERREZ GALVAN",
                "consumo": 30,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "122",
                "direccion": "RESERVA DE SEQUOIA #122"
            },
            {
                "nombre": "REYES GERARDO MEDELLIN ROBLES",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "123",
                "direccion": "RESERVA DE SEQUOIA #123"
            },
            {
                "nombre": "PEDRO GIBRAN ORNELAS  ACOSTA",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "124",
                "direccion": "RESERVA DE SEQUOIA #124"
            },
            {
                "nombre": "MARIA SOLEDAD FELIZ MURILLO",
                "consumo": 4,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "126",
                "direccion": "RESERVA DE SEQUOIA #126"
            },
            {
                "nombre": "REGINA ARELLANO RAMIREZ ESPAÑA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "127",
                "direccion": "RESERVA DE SEQUOIA #127"
            },
            {
                "nombre": "KARLA JANET ROCHA NUÑEZ",
                "consumo": 13,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "128",
                "direccion": "RESERVA DE SEQUOIA #128"
            },
            {
                "nombre": "MARY CARMEN PAZ PEREZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "129",
                "direccion": "RESERVA DE SEQUOIA #129"
            },
            {
                "nombre": "BRAYANT  ALEXIS GONZALEZ RODRIGUEZ",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "130",
                "direccion": "RESERVA DE SEQUOIA #130"
            },
            {
                "nombre": "PAULA REY ORTIZ MEDINA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "131",
                "direccion": "RESERVA DE SEQUOIA #131"
            },
            {
                "nombre": "ANITA ARANDA CHAVARRIA",
                "consumo": 5,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "132",
                "direccion": "RESERVA DE SEQUOIA #132"
            },
            {
                "nombre": "LUIS RICARDO LEOS ALCALA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "133",
                "direccion": "RESERVA DE SEQUOIA #133"
            },
            {
                "nombre": "HUMBERTO VILLALPANDO LOPEZ",
                "consumo": 5,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "134",
                "direccion": "RESERVA DE SEQUOIA #134"
            },
            {
                "nombre": "MIRIAM JANINE OROS LUENGO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "135",
                "direccion": "RESERVA DE SEQUOIA #135"
            },
            {
                "nombre": "ENRIQUE ROSALES HERNANDEZ",
                "consumo": 15,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "136",
                "direccion": "RESERVA DE SEQUOIA #136"
            },
            {
                "nombre": "JUAN FRANCISCO VIRAMONTES VALENZUELA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "137",
                "direccion": "RESERVA DE SEQUOIA #137"
            },
            {
                "nombre": "JESUS  ALEJANDRO SANCHEZ  GRANADOS",
                "consumo": 31,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "138",
                "direccion": "RESERVA DE SEQUOIA #138"
            },
            {
                "nombre": "ANGELICA CHAVEZ SANTILLAN",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "139",
                "direccion": "RESERVA DE SEQUOIA #139"
            },
            {
                "nombre": "ARIADNA LUCIA VALERO GARCIA",
                "consumo": 3,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "140",
                "direccion": "RESERVA DE SEQUOIA #140"
            },
            {
                "nombre": "MARIA DEL CARMEN ALVARADO VALLADOLID",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "141",
                "direccion": "RESERVA DE SEQUOIA #141"
            },
            {
                "nombre": "OSCAR HERNANDEZ CERON",
                "consumo": 15,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "142",
                "direccion": "RESERVA DE SEQUOIA #142"
            },
            {
                "nombre": "KARLA  AZUCENA RANGEL  JIMENEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "143",
                "direccion": "RESERVA DE SEQUOIA #143"
            },
            {
                "nombre": "MIGUEL HORACIO FLORES LUCIO",
                "consumo": 10,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "144",
                "direccion": "RESERVA DE SEQUOIA #144"
            },
            {
                "nombre": "MAURICIO RIVAS  PRIETO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "145",
                "direccion": "RESERVA DE SEQUOIA #145"
            },
            {
                "nombre": "JESUS MARIN VELAZQUEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "147",
                "direccion": "RESERVA DE SEQUOIA #147"
            },
            {
                "nombre": "JORGE HUMBERTO TORRES MARTINEZ",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "148",
                "direccion": "RESERVA DE SEQUOIA #148"
            },
            {
                "nombre": "CARLOS DEMIAN CORONADO MENA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "149",
                "direccion": "RESERVA DE SEQUOIA #149"
            },
            {
                "nombre": "MARIA  CONSUELO SEPULVEDA VALLE",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "151",
                "direccion": "RESERVA DE SEQUOIA #151"
            },
            {
                "nombre": "MARIANA AGUILAR SANDOVAL",
                "consumo": 2,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "152",
                "direccion": "RESERVA DE SEQUOIA #152"
            },
            {
                "nombre": "EDUARDO DE LA CRUZ JIMENEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "153",
                "direccion": "RESERVA DE SEQUOIA #153"
            },
            {
                "nombre": "SERGIO SALAZAR SANCHEZ",
                "consumo": 2,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "154",
                "direccion": "RESERVA DE SEQUOIA #154"
            },
            {
                "nombre": "FABIAN CHAVEZ CAMPOS",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "156",
                "direccion": "RESERVA DE SEQUOIA #156"
            },
            {
                "nombre": "MARIA EUGENIA CASTAÑEDA CEDILLO",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "162",
                "direccion": "RESERVA DE SEQUOIA #162"
            },
            {
                "nombre": "EDUARDO OBREGON PADILLA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "164",
                "direccion": "RESERVA DE SEQUOIA #164"
            },
            {
                "nombre": "RICARDO ALEXIS MARTINEZ PEREZ",
                "consumo": 3,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "166",
                "direccion": "RESERVA DE SEQUOIA #166"
            },
            {
                "nombre": "SANDRA  PATRICIA SERNA MUÑOZ",
                "consumo": 23,
                "excedente": 8,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "168",
                "direccion": "RESERVA DE SEQUOIA #168"
            },
            {
                "nombre": "JOSE ISAI MENDOZA LOPEZ",
                "consumo": 7,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "170",
                "direccion": "RESERVA DE SEQUOIA #170"
            },
            {
                "nombre": "DIANA LUCIA ELIAS LOZANO",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "172",
                "direccion": "RESERVA DE SEQUOIA #172"
            },
            {
                "nombre": "EDGAR GONZALO VASQUEZ ACOSTA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "201",
                "direccion": "RESERVA DE SEQUOIA #201"
            },
            {
                "nombre": "JUAN PABLO GOMEZ DIOSDADO",
                "consumo": 23,
                "excedente": 8,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "202",
                "direccion": "RESERVA DE SEQUOIA #202"
            },
            {
                "nombre": "UBALDO BUGARIN RUVALCABA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "203",
                "direccion": "RESERVA DE SEQUOIA #203"
            },
            {
                "nombre": "SAUL CARRILLO VILLALOBOS",
                "consumo": 6,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "204",
                "direccion": "RESERVA DE SEQUOIA #204"
            },
            {
                "nombre": "LEONARDO DANIEL MEZA RAMIREZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "205",
                "direccion": "RESERVA DE SEQUOIA #205"
            },
            {
                "nombre": "DENI RAMOS ORTEGA",
                "consumo": 20,
                "excedente": 5,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "206",
                "direccion": "RESERVA DE SEQUOIA #206"
            },
            {
                "nombre": "RAUL RICARDO ROMERO FRAIRE",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "207",
                "direccion": "RESERVA DE SEQUOIA #207"
            },
            {
                "nombre": "MARIA ELBA MACIAS GUERRA",
                "consumo": 15,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "208",
                "direccion": "RESERVA DE SEQUOIA #208"
            },
            {
                "nombre": "CLAUDIA MARÍA VARELA PINEDO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "209",
                "direccion": "RESERVA DE SEQUOIA #209"
            },
            {
                "nombre": "ADRIANA RAMIREZ CASTAÑEDA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "210",
                "direccion": "RESERVA DE SEQUOIA #210"
            },
            {
                "nombre": "MA. CELIA TRUJILLO PRADO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "211",
                "direccion": "RESERVA DE SEQUOIA #211"
            },
            {
                "nombre": "ARACELI NAJERA  GARCIA",
                "consumo": 13,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "212",
                "direccion": "RESERVA DE SEQUOIA #212"
            },
            {
                "nombre": "SERGIO MARTINEZ VILLALPANDO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "213",
                "direccion": "RESERVA DE SEQUOIA #213"
            },
            {
                "nombre": "FELIPE DE JESUS MARTIN DEL CAMPO RAMOS",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "214",
                "direccion": "RESERVA DE SEQUOIA #214"
            },
            {
                "nombre": "CINDY HERNANDEZ DE LOERA",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "215",
                "direccion": "RESERVA DE SEQUOIA #215"
            },
            {
                "nombre": "JAVIER VALENZUELA MARIN",
                "consumo": 3,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "216",
                "direccion": "RESERVA DE SEQUOIA #216"
            },
            {
                "nombre": "ARMANDO LEAL MANZANO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "217",
                "direccion": "RESERVA DE SEQUOIA #217"
            },
            {
                "nombre": "LUIS  ANTONIO MOYA ESPINOZA",
                "consumo": 14,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "218",
                "direccion": "RESERVA DE SEQUOIA #218"
            },
            {
                "nombre": "ANA PAOLA FLORES NIÑO",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "219",
                "direccion": "RESERVA DE SEQUOIA #219"
            },
            {
                "nombre": "MARIA DEL ROCIO HERNANDEZ DIAZ DE LEON",
                "consumo": 1,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "220",
                "direccion": "RESERVA DE SEQUOIA #220"
            },
            {
                "nombre": "ANTONIO LOPEZ HERNANDEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "221",
                "direccion": "RESERVA DE SEQUOIA #221"
            },
            {
                "nombre": "ALDO RIOS PEÑA",
                "consumo": 9,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "222",
                "direccion": "RESERVA DE SEQUOIA #222"
            },
            {
                "nombre": "EDGAR JAVIER SOLIS MENDEZ",
                "consumo": 0,
                "excedente": 0,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "223",
                "direccion": "RESERVA DE SEQUOIA #223"
            },
            {
                "nombre": "MARIA ZAPOPAN TEJEDA CALDERA",
                "consumo": 16,
                "excedente": 1,
                "calle": "RESERVA DE SEQUOIA",
                "numero_exterior": "224",
                "direccion": "RESERVA DE SEQUOIA #224"
            }
        ]
    };

})();
