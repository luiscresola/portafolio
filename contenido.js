/* =====================================================================
   CONTENIDO DEL PORTAFOLIO
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para cambiar textos,
   experiencia, cartas o documentos. La web se genera sola a partir
   de aquí.

   - Los campos con "" (vacíos) simplemente no se muestran.
   - Los archivos (PDF, foto) van en las carpetas /documentos y /assets.
   - Busca "PENDIENTE" para ver lo que falta por rellenar.
   ===================================================================== */

window.PORTFOLIO = {
  /* ---------- Datos personales ---------- */
  nombre: "Luis Carlos",
  apellidos: "Resola Medina",
  iniciales: "LC",
  titular: "Project Management | Técnico en emergencias sanitarias | Instructor",   // debajo del nombre, en la tarjeta de perfil
  cabecera: "Project Management | Técnico emergencias sanitarias | Instructor",                     // debajo del nombre, en la barra de arriba del todo
  ubicacion: "Calonge · Baix Empordà (Girona)",
  coordenadas: "41.86° N · 3.08° E",
  foto: "assets/foto.jpg",       // Pon tu foto con este nombre (cuadrada o vertical)

  // Frase del pie de página. {anios} se sustituye solo por los años desde tu primer puesto.
  pie: "+{anios} años coordinando equipos y dispositivos de emergencias",

  // Cada elemento es un párrafo. Puedes usar <strong> para resaltar.
  bio: [
    "Profesional del sector sanitario especializado en <strong>coordinación operativa y gestión de proyectos</strong>. Desde 2017 planifico y superviso equipos, recursos y dispositivos: de servicios acuáticos a grandes eventos como el Circuit de Catalunya, y hoy como <strong>supervisor de zona en Falck</strong>.",
    "Soy <strong>Técnico en Emergencias Sanitarias</strong> e <strong>instructor de SVB/DESA y control de hemorragias</strong>, y compagino el trabajo con un <strong>MBA en Dirección y Gestión de Empresas</strong> en la Universitat de Girona."
  ],

  /* ---------- Proyectos destacados ----------
     icono: radio, avion, ambulancia, escudo, equipo, corazon, grafica...
     cifra + cifraTexto (opcionales): un número grande al pie de la tarjeta,
     p. ej. cifra: "+80.000", cifraTexto: "asistentes por evento".
     Si los dejas vacíos, no se muestran.                                   */
  proyectos: [
    {
      icono: "radio",
      titulo: "Circuit de Catalunya",
      contexto: "CTS · Actividad diaria y grandes eventos",
      rol: "Coordinador médico",
      descripcion: "Coordinación diaria de toda la actividad sanitaria del circuito, desde servicios privados hasta grandes eventos y carreras como los Grandes Premios de MotoGP y Fórmula 1, entre otros. Organización de los recursos, liderazgo sobre el terreno y cobertura asistencial en entornos de alta demanda.",
      etiquetas: ["Coordinación diaria", "MotoGP · Fórmula 1", "Grandes eventos", "Gestión de recursos"],
      cifra: "",        // PENDIENTE (opcional)
      cifraTexto: ""
    },
    {
      icono: "avion",
      titulo: "Aeropuertos AENA",
      contexto: "CTS · El Prat y Madrid-Barajas",
      rol: "Coordinador operativo",
      descripcion: "Responsable de la coordinación diaria del equipo sanitario en los aeropuertos de Barcelona-El Prat y Adolfo Suárez Madrid-Barajas. Gestión logística del material y los recursos asistenciales, y registro y seguimiento diario de las incidencias, asegurando la trazabilidad y la continuidad del servicio.",
      etiquetas: ["Coordinación de equipos", "Logística de material", "Registro de incidencias"],
      cifra: "",
      cifraTexto: ""
    },
    {
      icono: "equipo",
      titulo: "Girona FC y Bàsquet Girona",
      contexto: "CTS · Competiciones deportivas profesionales",
      rol: "Coordinador médico",
      descripcion: "Responsable de la coordinación del dispositivo sanitario del Girona FC, en competiciones de LaLiga EA Sports, UEFA Champions League y Copa del Rey, y del Bàsquet Girona, en Liga ACB y Euroliga. En ambos clubes, planificación y gestión de los recursos humanos y logísticos del operativo, y actuación como interlocutor entre la empresa prestadora del servicio y el club.",
      etiquetas: ["Competición nacional e internacional", "Recursos humanos y logísticos", "Interlocución con los clubes"],
      cifra: "",
      cifraTexto: ""
    },
    {
      icono: "corazon",
      titulo: "Formación interna SVB/DESA",
      contexto: "CTS · Equipo docente",
      rol: "Instructor",
      descripcion: "Formación del personal en soporte vital básico y uso del desfibrilador como instructor interno y miembro del equipo docente.",
      etiquetas: ["Docencia", "SVB/DESA"],
      cifra: "",
      cifraTexto: ""
    }
  ],

  /* ---------- Contacto ---------- */
  contacto: {
    email: "luiscresola@gmail.com",
    telefono: "+34 666 99 09 09",
    linkedin: "https://www.linkedin.com/in/luis-carlos-resola-medina-869220378"
  },

  /* ---------- CV principal (botón grande de la tarjeta de perfil) ---------- */
  cvPrincipal: "documentos/cv-luis-carlos.pdf",

  /* ---------- Cómo trabajo ----------
     Cuatro principios, numerados en orden (01, 02...).
     icono: ruta, radio, registro, birrete, equipo, escudo, corazon...
     lema: frase corta destacada al pie de cada tarjeta.               */
  metodo: [
    {
      icono: "ruta",
      titulo: "Planificar antes de desplegar",
      texto: "Antes de movilizar recursos, analizo las necesidades de cada servicio y dimensiono el personal, el material y la logística que requiere, con criterio técnico y económico.",
      lema: "Un buen dispositivo se decide antes de llegar al terreno."
    },
    {
      icono: "radio",
      titulo: "Coordinar sobre el terreno",
      texto: "Dirijo la operativa en tiempo real: asignación de recursos, toma de decisiones y comunicación constante con el equipo y con el cliente, adaptando el dispositivo a lo que exige cada situación.",
      lema: "Liderazgo en primera línea y decisiones a tiempo."
    },
    {
      icono: "registro",
      titulo: "Registrar para mejorar",
      texto: "Documento las incidencias de cada jornada y las analizo para identificar oportunidades de mejora en los procesos, garantizando la trazabilidad y la continuidad del servicio.",
      lema: "Lo que se registra, se puede mejorar."
    },
    {
      icono: "birrete",
      titulo: "Formar al equipo",
      texto: "Contribuyo a que cada profesional esté preparado para actuar con seguridad y criterio.",
      lema: "Un equipo formado es un equipo que responde."
    }
  ],

  /* ---------- Disponibilidad ----------
     Pon visible: false si no quieres que se vea este bloque
     (por ejemplo, mientras no estés buscando activamente).          */
  disponibilidad: {
    visible: true,
    estado: "Contacto profesional",   // antes: "Abierto a nuevos proyectos"
    titulo: "",   // título grande del bloque; vacío = no se muestra
    puntos: [
      "Coordinación de dispositivos y grandes eventos",
      "Gestión de operaciones, equipos y recursos",
      "Formación en SVB/DESA y control de hemorragias"
    ],
    zona: "Girona y Baix Empordà · Presencial · Carnet B y vehículo propio"
  },

  /* ---------- Experiencia (de más reciente a más antigua) ----------
     descripcion: un texto, o una lista ["...", "..."] para que salga con viñetas. */
  experiencia: [
    {
      empresa: "Falck Servicios Sanitarios",
      puesto: "Supervisor de zona · Técnico en Emergencias Sanitarias",
      periodo: "2026 – Actualidad",
      descripcion: "Despliegue operativo, gestión de personal y logística, resolución de problemas. Transporte sanitario urgente."
    },
    {
      empresa: "Consorci de Transport Sanitari Regió Girona",
      puesto: "Coordinador operativo",
      periodo: "2023 – 2026",
      descripcion: [
        "Mejora de procesos operativos, procesos de licitación y análisis técnico-económico para el desarrollo empresarial.",
        "Planificación, supervisión y optimización de recursos humanos y logísticos. Gestión de incidencias, trato comercial con clientes y toma de decisiones.",
        "Coordinador médico en el Circuit de Catalunya, Girona FC y Bàsquet Girona.",
        "Coordinador operativo AENA (Aeropuerto de El Prat y Aeropuerto Madrid-Barajas).",
        "Instructor y miembro del equipo docente."
      ]
    },
    {
      empresa: "Proactiva Serveis Aquàtics",
      puesto: "Coordinador",
      periodo: "2017 – 2022",
      descripcion: "Coordinación y supervisión de equipos de socorrismo en playas. Gestión de recursos humanos y materiales, resolución de problemas y toma de decisiones."
    }
  ],
  experienciaVisible: 2, // cuántas se ven antes de pulsar "Ver toda la trayectoria"

  /* ---------- Formación ---------- */
  formacion: [
    {
      titulo: "MBA · Dirección y Gestión de Empresas",
      centro: "Fundació UdG · Universitat de Girona",
      periodo: "Finalización 2026"
    },
    {
      titulo: "Estudios de Grado en Física",
      centro: "Universidad de Córdoba",
      periodo: ""
    },
    {
      titulo: "Técnico en Emergencias Sanitarias (TES)",
      centro: "Grupo MEDAC",
      periodo: ""   // PENDIENTE: año
    },
    {
      titulo: "Instructor de SVB y DESA",
      centro: "Consell Català de Ressuscitació (CCR) · European Resuscitation Council (ERC)",
      periodo: ""
    },
    {
      titulo: "Instructor en control de hemorragias",
      centro: "Stop the Bleed",
      periodo: ""
    },
    {
      titulo: "PHTLS · Prehospital Trauma Life Support",
      centro: "Consorci de Transport Sanitari Regió Girona (CTS) · National Association of Emergency Medical Technicians (NAEMT)",
      periodo: ""
    }
  ],

  /* ---------- Idiomas ---------- */
  idiomas: [
    { idioma: "Castellano", nivel: "Nativo" },
    { idioma: "Catalán", nivel: "Alto" },
    { idioma: "Inglés", nivel: "Fluido" },
    { idioma: "Francés", nivel: "Fluido" }
  ],

  /* ---------- Cartas de recomendación ----------
     extracto: copia una o dos frases reales de la carta (entre comillas no hace falta).
     Si lo dejas vacío, solo se muestra el autor y el botón para leerla.
     ejemplo: true -> se marca como ejemplo. Bórralo cuando pongas una real. */
  cartas: [
    {
      autor: "Edgar Nolla",
      cargo: "CEO",
      empresa: "Consorci de Transport Sanitari Regió Girona",
      idioma: "Traducido del catalán",
      extracto: "Uno de sus puntos más destacados ha sido su capacidad para la coordinación operativa en grandes eventos. En este ámbito ha demostrado criterio organizativo, liderazgo en el terreno y una excelente gestión de los recursos sanitarios disponibles.",
      fecha: "Marzo 2026",
      archivo: "documentos/carta-edgar-nolla.pdf"
    }
  ],

  /* ---------- Documentos descargables ---------- */
  documentos: [
    { titulo: "Currículum · Project Management | Técnico emergencias", tipo: "CV", idioma: "ES", archivo: "documentos/cv-luis-carlos.pdf" },
    { titulo: "Carta de recomendación · Edgar Nolla", tipo: "Carta", idioma: "CA", archivo: "documentos/carta-edgar-nolla.pdf" },
    { titulo: "Carta de recomendación · Edgar Nolla (traducción)", tipo: "Carta", idioma: "ES", archivo: "documentos/carta-edgar-nolla-es.pdf" }
  ],

  /* ---------- Áreas de experiencia ----------
     iconos disponibles: radio, ambulancia, escudo, enlace, equipo, corazon,
     grafica, olas, birrete, maletin, archivo, avion                   */
  areas: [
    { icono: "radio",      nombre: "Coordinación operativa" },
    { icono: "escudo",     nombre: "Grandes eventos y dispositivos preventivos" },
    { icono: "ambulancia", nombre: "Transporte sanitario" },
    { icono: "equipo",     nombre: "Gestión de equipos y recursos" },
    { icono: "grafica",    nombre: "Mejora de procesos" },
    { icono: "archivo",    nombre: "Licitaciones y análisis técnico-económico" },
    { icono: "birrete",    nombre: "Formación y docencia" },
    { icono: "corazon",    nombre: "Soporte vital y trauma" }
  ],

  /* ---------- Herramientas (etiquetas debajo de Idiomas) ----------
     Lista vacía [] = no se muestra el bloque.                         */
  herramientas: ["Excel avanzado", "Google Analytics"]
};
