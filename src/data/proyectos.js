export const proyectos = {
  es: [
    {
      slug: "mentecobre",
      nombre: "Mentecobre",
      imagen: "/mentecobre1.png",
      descripcion:
        "Frontend para la herramienta de gestión de la traducción de la Coppermind al español",
      tecnologias: [
        "React",
        "Vite",
        "Material UI",
        "MUI X Charts",
        "CSS propio",
        "Fetch/API",
      ],
      caracteristicas: [
        "Autenticación por roles (admin, revisor, traductor) con rutas protegidas y permisos según sección",
        "Panel de administración con CRUD completo",
        "Gestión mensual de traducciones desde la API de la Coppermind",
        "Notificaciones unificadas",
        "Estadísticas de progreso con gráficas interactivas",
        "Diseño propio con tema claro/oscuro, variables CSS y maquetación responsive",
        "Módulo de ocio con minijuegos funcionales",
      ],
      github: "https://github.com/mentecobre",
      demo: "https://mentecobre-muga.onrender.com/",
      detalle: {
        descripcionLarga:
          "Cada mes, el equipo de traducción al español de la Coppermind recibe una ronda de cambios de la wiki en inglés: artículos nuevos, títulos corregidos, páginas que por fin hay que crear… A mano, eso significa revisar decenas de páginas una a una, con un Excel y mucha fe. MenteCobre existe para acabar con eso.\n\nElla automatiza la parte aburrida: la web detecta los cambios mensuales y los agrupa por tipo de trabajo (artículos por crear, sin traducir, traducidos o con cambios grandes), enlaza cada uno con su página exacta en la wiki en inglés y en español, y deja marcar el trabajo como hecho de uno en uno o en bloque. El panel de administración centraliza el día a día del equipo: el CRUD de glosario, artículos, usuarios y universos, las notificaciones de erratas y solicitudes de reclutamiento, y las estadísticas de progreso del proyecto.\n\nY como también somos gente, la web guarda un rincón de ocio con minijuegos temáticos: un quiz cronometrado del Cosmere, un sudoku con los metales alománticos, retos de agudeza visual y una sección completa de noticias y pasatiempos de la comunidad.",
        contexto:
          "Evolución de una herramienta anterior que había, pero mejorada a medida que han surgido necesidades",
          imagenes: [
          "/mentecobre1.png",
          "/mentecobre2.png",
          "/mentecobre3.png",
          "/mentecobre4.png",
          "/mentecobre5.png",
        ],
        funcionalidades: [
          {
            titulo: "Graficas de avance",
            descripcion:
              "Lo nuestro es un proyecto voluntario de traducción y valoramos ser transparentes en cuanto a nuestro trabajo y su avance.",
          },
          {
            titulo: "Glosario",
            descripcion:
              "Ya sea que leas en inglés o en español, hay muchos términos de la obra de Brandon Sanderson que se pueden confundir, asi que tenemos nuestro propio glosario de términos.",
          },
          {
            titulo: "Ocio",
            descripcion:
              "Es un proyecto que lleva en funcionamiento muchos años, y una manera de mantener la motivación (tanto propia como de otros usuarios) ha sido crear diferentes proyectos de ocio: aventuras interactivas, juegos de agilidad, juegos estilo trivial...",
          },
          {
            titulo: "Administración",
            descripcion:
              "Aunque sea un proyecto voluntario, sigue habiendo gente que organiza el trabajo y al equipo y que se encarga no solo de traducir y revisar, si no se asegurarse de que todo funciona correctamente. Esta es su puesto de mando",
          },
          {
            titulo: "Modo claro y oscuro",
            descripcion:
              "No a todo el mundo le gusta vivir en el Lado Diurno de Taldain, por lo que hemos preparado un modo claro y oscuro que se heredan en toda la web con solo elegirlo al inicio",
          },
        ],
       stack: {
  frontend:
    "React 19 + Vite 8, React Router 7, Material UI + MUI X Charts, CSS propio con variables y tema claro/oscuro",
  backend: "Frontend puro por ahora: capa de datos con mock en localStorage y contratos JSON, preparada para conectar la API real de la Coppermind sin tocar los servicios",
  extras:
    "ESLint, diseño responsive, arquitectura por servicios (src/api) con seed versionado, validación con React Hooks (useAuth, rutas protegidas por rol)",
},
        retos: [
  "Generar la ronda de cambios mensual desde la API de la wiki sin backend: clasificar cada artículo automáticamente por tipo de trabajo (HTUP, crear, sin traducir, traducido) usando solo el frontend",
  "Mantener la web de administración y la web pública viviendo juntas en la misma SPA con rutas protegidas por rol (admin, revisor, traductor)",
  "Diseñar la capa de datos desacoplada: mock en localStorage con seeds versionados y contratos JSON, para migrar a la API real sin reescribir la aplicación",
  "Encontrar el equilibrio entre un diseño propio y coherente (CSS a medida, tema claro/oscuro) y no reinventar la rueda donde MUI ya lo resuelve",
],
aprendizajes: [
  "Separar frontend 'de consumo' y panel interno sin perder la coherencia visual de la marca",
  "Modelar el dato una sola vez (contratos JSON) y que toda la app dependa de esa fuente",
  "Gestionar permisos y visibilidad por rol desde el primer día, no como parche",
  "Versionar los seeds para que los cambios de datos no rompan los navegadores con localStorage ya sembrado",
],
proximasFeatures: [
  "Conectar la API real del MediaWiki (Coppermind) para detectar cambios de forma automática en vez del mock",
  "Panel ampliado de usuarios: historial, cargas de trabajo por traductor y métricas individuales",
  "Notificaciones por email al equipo cuando entran erratas o solicitudes nuevas",
  "Vista comparativa de ediciones lado a lado (EN y ES) dentro de la web",
  "Migración progresiva a un backend propio con autenticación de verdad en lugar del mock",
],
      },
    },
    {
      slug: "hairbnb",
      nombre: "Hairbnb",
      imagen: "/hairbnb-preview.png",
      descripcion:
        "Plataforma integral de gestión de barberías. Conecta clientes, barberos y dueños de barberías en un mismo ecosistema digital. Inspirada en la experiencia de Airbnb, pero para el mundo de la peluquería y barbería.",
      tecnologias: [
        "React",
        "Flask",
        "Python",
        "SQLAlchemy",
        "JWT",
        "Socket.io",
        "Google Maps",
        "IA",
        "Bootstrap",
      ],
      caracteristicas: [
        "Autenticación y autorización con JWT por roles",
        "Chat en tiempo real con Socket.io",
        "IA para probar peinados antes de la cita",
        "Mapa interactivo con Google Maps + Places API",
        "Agenda inteligente con disponibilidad real",
        "Panel diferenciado para clientes, barberos y propietarios",
        "Backend con Flask + SQLAlchemy + PostgreSQL",
      ],
      github: "https://github.com/ssantv",
      demo: "https://hairbnb-bw01.onrender.com/",
      detalle: {
        descripcionLarga:
          "En España hay más de 65.000 barberías y peluquerías registradas. El sector factura más de 4 millones de euros al año. Pero la mayoría de esos negocios siguen gestionando sus citas por WhatsApp, por llamada, o sin sistema ninguno. El cliente no sabe si hay hueco. El barbero no sabe cuánta gente viene mañana. Hairbnb existe para resolver eso.\n\nEmpezó siendo un proyecto de equipo — pero en algún punto del camino me quedé sola. Y decidí sacarlo adelante. Porque las condiciones no siempre son las ideales, y eso es exactamente en lo que consiste el mundo real de la programación.",
        contexto:
          "Proyecto final del bootcamp Full Stack en 4Geeks Academy. Desarrollado en solitario tras la salida del equipo original.",
        imagenes: [
          "/hairbnb-1.png",
          "/hairbnb-2.png",
          "/hairbnb-3.png",
        ],
        funcionalidades: [
          {
            titulo: "IA de peinado",
            descripcion:
              "El usuario sube una foto, escribe qué corte quiere probar y la IA devuelve una imagen con ese look aplicado. Antes de sentarse en la silla. Una funcionalidad que no existe en casi ninguna app de este tipo.",
          },
          {
            titulo: "Mapa interactivo",
            descripcion:
              "Las barberías aparecen como marcadores en Google Maps. Búsqueda por dirección con Places API. Al pinchar en un marcador se abre una ficha con horarios, teléfono y descripción, desde donde puedes reservar o chatear.",
          },
          {
            titulo: "Chat en tiempo real",
            descripcion:
              "Clientes y barberos pueden mandarse mensajes directamente desde la plataforma con Socket.io. Sin salir a WhatsApp, sin mezclar lo personal con lo profesional.",
          },
          {
            titulo: "Agenda inteligente",
            descripcion:
              "El calendario solo muestra huecos que realmente existen, cruzando la duración del servicio, el horario del barbero, las citas ya reservadas y los días de descanso.",
          },
          {
            titulo: "Tres roles diferenciados",
            descripcion:
              "Clientes, barberos y propietarios tienen vistas, rutas y permisos completamente distintos, tanto en frontend como en backend. Separar bien los roles desde el principio fue clave para que todo lo demás funcionara.",
          },
        ],
        stack: {
          frontend:
            "React + Vite, React Router, Bootstrap con CSS propio encima",
          backend: "Python + Flask, SQLAlchemy, PostgreSQL, JWT",
          extras:
            "Socket.io, Google Maps + Places API, API de IA de peinado, API de traducción ES→EN para el prompt de IA, Formspree",
        },
        retos: [
          "Gestionar el alcance en solitario: aprender a priorizar y decir 'esto va a la lista de siguientes features'",
          "La lógica de disponibilidad: cruzar duración de servicio, horario del barbero, citas existentes y días de descanso sin mostrar huecos falsos",
          "Separar tres roles con rutas y permisos distintos tanto en frontend como en backend desde el principio",
          "Integrar Socket.io para el chat en tiempo real manteniendo la arquitectura limpia",
        ],
        aprendizajes: [
          "Arquitectura Full-Stack real con separación clara de responsabilidades por roles",
          "Gestión de producto: cuándo parar, qué priorizar, qué queda para la siguiente versión",
          "Integración de APIs externas complejas (Maps, IA, traducción, Socket.io)",
          "Diseñar un modelo de datos con muchas relaciones desde el principio es la clave de todo lo demás",
        ],
        proximasFeatures: [
          "Sistema de valoraciones para barberos",
          "Pagos online con Stripe: reserva con seña o pago completo",
          "Notificaciones automáticas por email: confirmación, recordatorio 24h, cancelación",
          "Dashboard de métricas para el barbero: citas, ingresos, servicios más pedidos",
          "App móvil nativa con notificaciones push",
        ],
      },
    },
    {
      slug: "son-goku-css",
      nombre: "Son Goku — Pure CSS",
      imagen: "/goku-preview.png",
      descripcion:
        "Ilustración de Son Goku hecha íntegramente en CSS, sin imágenes. Un experimento de CSS puro donde cada trazo, sombra y forma está construido únicamente con HTML y CSS. Sin SVG, sin canvas, sin imágenes.",
      tecnologias: ["HTML5", "CSS3"],
      caracteristicas: [
        "CSS art sin imágenes ni SVG",
        "Pelo construido con border-radius y radial-gradient",
        "Sombras y luces con box-shadow y rgba",
        "Ojos y cicatrices con CSS borders",
        "69 commits de refinamiento progresivo",
      ],
      github: "https://github.com/ssantv/Son-Goku-CSS",
      demo: null,
      detalle: {
        descripcionLarga:
          "Un experimento personal para explorar hasta dónde llega CSS sin usar ninguna imagen. Cada elemento de la ilustración —pelo, ojos, cicatrices, orejas, sombras— es un div con propiedades CSS puras.",
        imagenes: ["/goku-preview.png", "/goku-1.png"],
        retos: [
          "Recrear formas orgánicas (pelo, cara) solo con border-radius",
          "Simular volumen y profundidad sin imágenes usando box-shadow y rgba",
          "Mantener el código organizado con 69 commits iterativos",
        ],
        aprendizajes: [
          "Dominio avanzado de border-radius, transform y gradientes",
          "Position absolute para composición de ilustraciones",
          "El poder (y los límites) del CSS puro como herramienta creativa",
        ],
      },
    },
  ],
  en: [
    {
      slug: "hairbnb",
      nombre: "Hairbnb",
      imagen: "/hairbnb-preview.png",
      descripcion:
        "Full-Stack barbershop management platform. Connects clients, barbers and barbershop owners in the same digital ecosystem. Inspired by the Airbnb experience, but for the world of hairdressing and barbershops.",
      tecnologias: [
        "React",
        "Flask",
        "Python",
        "SQLAlchemy",
        "JWT",
        "Socket.io",
        "Google Maps",
        "AI",
        "Bootstrap",
      ],
      caracteristicas: [
        "JWT authentication and authorization by role",
        "Real-time chat with Socket.io",
        "AI hairstyle preview before the appointment",
        "Interactive map with Google Maps + Places API",
        "Smart scheduling with real availability",
        "Separate dashboards for clients, barbers and owners",
        "Backend with Flask + SQLAlchemy + PostgreSQL",
      ],
      github: "https://github.com/ssantv",
      demo: "https://hairbnb-bw01.onrender.com/",
      detalle: {
        descripcionLarga:
          "Spain has over 65,000 registered barbershops and hair salons. The sector generates more than 4 million euros a year. But most of these businesses still manage appointments via WhatsApp, phone calls, or no system at all. The client doesn't know if there's a slot. The barber doesn't know how many people are coming tomorrow. Hairbnb exists to fix that.\n\nIt started as a team project — but at some point I was left on my own. And I decided to see it through. Because conditions aren't always ideal, and that's exactly what the real world of programming is like.",
        contexto:
          "Final project of the Full Stack bootcamp at 4Geeks Academy. Developed solo after the original team disbanded.",
        imagenes: [
          "/hairbnb-1.png",
          "/hairbnb-2.png",
          "/hairbnb-3.png",
        ],
        funcionalidades: [
          {
            titulo: "AI hairstyle preview",
            descripcion:
              "The user uploads a photo, types what cut they want to try, and the AI returns an image with that look applied — before sitting in the chair. A feature that barely exists in any other app of this kind.",
          },
          {
            titulo: "Interactive map",
            descripcion:
              "Barbershops appear as markers on Google Maps. Address search powered by Places API. Clicking a marker opens a profile card with hours, phone and description, from where you can book or chat directly.",
          },
          {
            titulo: "Real-time chat",
            descripcion:
              "Clients and barbers can message each other directly on the platform via Socket.io. No switching to WhatsApp, no mixing personal and professional.",
          },
          {
            titulo: "Smart scheduling",
            descripcion:
              "The calendar only shows slots that actually exist, crossing service duration, the barber's working hours, existing bookings and days off.",
          },
          {
            titulo: "Three distinct roles",
            descripcion:
              "Clients, barbers and owners have completely different views, routes and permissions, both on the frontend and backend. Separating roles properly from day one was key to making everything else work.",
          },
        ],
        stack: {
          frontend:
            "React + Vite, React Router, Bootstrap with custom CSS on top",
          backend: "Python + Flask, SQLAlchemy, PostgreSQL, JWT",
          extras:
            "Socket.io, Google Maps + Places API, AI hairstyle API, ES→EN translation API for AI prompts, Formspree",
        },
        retos: [
          "Managing scope solo: learning to prioritize and say 'this goes on the next features list'",
          "Availability logic: crossing service duration, barber schedule, existing bookings and days off without showing false slots",
          "Separating three roles with distinct routes and permissions on both frontend and backend from the start",
          "Integrating Socket.io for real-time chat while keeping the architecture clean",
        ],
        aprendizajes: [
          "Real Full-Stack architecture with clear separation of concerns by role",
          "Product management: when to stop, what to prioritize, what goes to the next version",
          "Integrating complex external APIs (Maps, AI, translation, Socket.io)",
          "Designing a solid data model with many relations upfront is the foundation of everything else",
        ],
        proximasFeatures: [
          "Rating system for barbers",
          "Online payments with Stripe: deposit or full payment at booking",
          "Automatic email notifications: confirmation, 24h reminder, cancellation",
          "Metrics dashboard for barbers: bookings, revenue, most requested services",
          "Native mobile app with push notifications",
        ],
      },
    },

    {
      slug: "son-goku-css",
      nombre: "Son Goku — Pure CSS",
      imagen: "/goku-preview.png",
      descripcion:
        "A faithful recreation of Son Goku's face built entirely with HTML and CSS. No images, no SVG, no canvas — just divs and styles.",
      tecnologias: ["HTML5", "CSS3"],
      caracteristicas: [
        "CSS art with no images or SVG",
        "Hair built with border-radius and radial-gradient",
        "Shadows and highlights with box-shadow and rgba",
        "Eyes and scars shaped with CSS borders",
        "69 commits of progressive refinement",
      ],
      github: "https://github.com/ssantv/Son-Goku-CSS",
      demo: null,
      detalle: {
        descripcionLarga:
          "A personal experiment to explore how far CSS can go without using any images. Every element of the illustration — hair, eyes, scars, ears, shadows — is a div styled with pure CSS properties.",
        imagenes: ["/goku-preview.png", "/goku-1.png"],
        retos: [
          "Recreating organic shapes (hair, face) using only border-radius",
          "Simulating volume and depth without images using box-shadow and rgba",
          "Keeping the code organized across 69 iterative commits",
        ],
        aprendizajes: [
          "Advanced mastery of border-radius, transform and gradients",
          "Position absolute for illustration composition",
          "The power (and limits) of pure CSS as a creative tool",
        ],
      },
    },
  ],
};

export const proyectosAprendizaje = {
  es: [
    {
      nombre: "Secret Manager — Auth System",
      descripcion:
        "App Full-Stack para registrarse, iniciar sesión y guardar secretos personales en un área privada protegida con JWT. Global state con Context API + Reducer.",
      tecnologias: [
        "React",
        "Flask",
        "Python",
        "SQLAlchemy",
        "JWT",
        "Bootstrap",
      ],
      github: "https://github.com/ssantv/auth-system",
      demo: null,
    },
    {
      nombre: "Blog Star Wars",
      descripcion:
        "Blog interactivo del universo Star Wars con películas, personajes, planetas, naves y más. Consume la SWAPI y gestiona favoritos con un reducer global.",
      tecnologias: ["React", "JavaScript", "CSS3", "Bootstrap", "SWAPI"],
      github: "https://github.com/ssantv/blog-star-wars",
      demo: null,
    },
    {
      nombre: "Lista de Contactos",
      descripcion:
        "Gestión de contactos por usuario con CRUD completo. Crea usuario automáticamente si no existe, y permite añadir, editar, eliminar y ver el detalle de cada contacto.",
      tecnologias: ["React", "JavaScript", "CSS3", "REST API"],
      github: "https://github.com/ssantv/lista-contactos",
      demo: null,
    },
    {
      nombre: "Todolist con Fetch",
      descripcion:
        "Lista de tareas multiusuario conectada a la API de 4Geeks. Permite añadir, completar, editar y eliminar tareas, con gestión de usuarios y contador de pendientes.",
      tecnologias: ["React", "JavaScript", "CSS3", "Fetch API", "SweetAlert2"],
      github: "https://github.com/ssantv/todolist-fetch",
      demo: null,
    },
    {
      nombre: "API REST Star Wars",
      descripcion:
        "API REST completa para gestionar usuarios, planetas, personajes y favoritos del universo Star Wars. Endpoints CRUD con Flask y SQLAlchemy.",
      tecnologias: ["Python", "Flask", "SQLAlchemy", "REST API"],
      github: "https://github.com/ssantv/API-REST-SW",
      demo: null,
    },
    {
      nombre: "Generador de Cartas / Blackjack",
      descripcion:
        "Juego de cartas en JavaScript vanilla con dos modos: generador de cartas aleatorias y Blackjack interactivo. DOM generado íntegramente desde JavaScript.",
      tecnologias: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/ssantv/generador-cartas-aleatoria",
      demo: null,
    },
    {
      nombre: "Semáforo Interactivo",
      descripcion:
        "Semáforo funcional en React con control manual, modo automático, luz extra opcional y modo juego en desarrollo. Lógica gestionada con useState y useEffect.",
      tecnologias: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/ssantv/Semaforo",
      demo: null,
    },
  ],
  en: [
    {
      nombre: "Secret Manager — Auth System",
      descripcion:
        "Full-Stack app to register, log in and store personal secrets in a JWT-protected private area. Global state managed with Context API + Reducer.",
      tecnologias: [
        "React",
        "Flask",
        "Python",
        "SQLAlchemy",
        "JWT",
        "Bootstrap",
      ],
      github: "https://github.com/ssantv/auth-system",
      demo: null,
    },
    {
      nombre: "Star Wars Blog",
      descripcion:
        "Interactive Star Wars universe blog with films, characters, planets, ships and more. Consumes SWAPI and manages a favorites list with a global reducer.",
      tecnologias: ["React", "JavaScript", "CSS3", "Bootstrap", "SWAPI"],
      github: "https://github.com/ssantv/blog-star-wars",
      demo: null,
    },
    {
      nombre: "Contact List",
      descripcion:
        "User-based contact management with full CRUD. Auto-creates user if not found, and allows adding, editing, deleting and viewing contact details.",
      tecnologias: ["React", "JavaScript", "CSS3", "REST API"],
      github: "https://github.com/ssantv/lista-contactos",
      demo: null,
    },
    {
      nombre: "Todolist with Fetch",
      descripcion:
        "Multi-user task list connected to the 4Geeks API. Add, complete, edit and delete tasks, with user management and a pending tasks counter.",
      tecnologias: ["React", "JavaScript", "CSS3", "Fetch API", "SweetAlert2"],
      github: "https://github.com/ssantv/todolist-fetch",
      demo: null,
    },
    {
      nombre: "Star Wars REST API",
      descripcion:
        "Full REST API to manage users, planets, characters and Star Wars favorites. CRUD endpoints built with Flask and SQLAlchemy.",
      tecnologias: ["Python", "Flask", "SQLAlchemy", "REST API"],
      github: "https://github.com/ssantv/API-REST-SW",
      demo: null,
    },
    {
      nombre: "Card Generator / Blackjack",
      descripcion:
        "Vanilla JavaScript card game with two modes: random card generator and interactive Blackjack. Entire DOM built dynamically from JavaScript.",
      tecnologias: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/ssantv/generador-cartas-aleatoria",
      demo: null,
    },
    {
      nombre: "Interactive Traffic Light",
      descripcion:
        "Functional traffic light in React with manual control, automatic mode, optional extra light and a game mode in development. Logic managed with useState and useEffect.",
      tecnologias: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/ssantv/Semaforo",
      demo: null,
    },
  ],
};
