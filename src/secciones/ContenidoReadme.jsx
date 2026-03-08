import { useLang } from "../context/LangContext";

const contenido = {
  es: {
    titulo: "Sandra Santos",
    subtitulo: "Full-Stack Developer · Zamora, España",
    bio: "Developer who turns coffee and curiosity into code.",
    descripcion:
      "Desarrolladora Full Stack recién graduada de 4Geeks Academy, con base en Historia del Arte y pasión por construir interfaces que tengan tanto fondo como forma. Me mueve el aprendizaje continuo, las buenas prácticas y los proyectos con propósito.",
    navTitulo: "Cómo navegar este portfolio",
    navItems: [
      { archivo: "inicio.jsx",      desc: "quién soy y qué busco" },
      { archivo: "sobre-mi.jsx",    desc: "formación, experiencia e intereses" },
      { archivo: "proyectos.jsx",   desc: "lo que he construido" },
      { archivo: "habilidades.jsx", desc: "tecnologías que manejo" },
      { archivo: "contacto.jsx",    desc: "hablamos" },
    ],
    stackTitulo: "Stack principal",
    frase: "«El paso más importante que puede dar alguien. No es el primero, ¿verdad? Es el próximo. Siempre el próximo paso.»",
    fraseAutor: "— Brandon Sanderson",
    disponible: "Disponible para nuevas oportunidades",
  },
  en: {
    titulo: "Sandra Santos",
    subtitulo: "Full-Stack Developer · Zamora, Spain",
    bio: "Developer who turns coffee and curiosity into code.",
    descripcion:
      "Full Stack Developer recently graduated from 4Geeks Academy, with a background in Art History and a passion for building interfaces that have both depth and form. Driven by continuous learning, best practices and purposeful projects.",
    navTitulo: "How to navigate this portfolio",
    navItems: [
      { archivo: "home.jsx",        desc: "who I am and what I'm looking for" },
      { archivo: "about-me.jsx",    desc: "education, experience and interests" },
      { archivo: "projects.jsx",    desc: "what I've built" },
      { archivo: "skills.jsx",      desc: "technologies I work with" },
      { archivo: "contact.jsx",     desc: "let's talk" },
    ],
    stackTitulo: "Main stack",
    frase: "«The most important step a person can take. It's not the first one, is it? It's the next one. Always the next step.»",
    fraseAutor: "— Brandon Sanderson",
    disponible: "Open to new opportunities",
  },
};


export default function ContenidoReadme() {
  const { lang } = useLang();
  const t = contenido[lang];

  return (
    <div className="seccion readme-seccion">

      <div className="readme-terminal">
        <div className="readme-terminal-bar">
          <span className="readme-dot readme-dot-red" />
          <span className="readme-dot readme-dot-yellow" />
          <span className="readme-dot readme-dot-green" />
          <span className="readme-terminal-title">README.md</span>
        </div>
        <div className="readme-terminal-body">
          <p className="readme-terminal-line">
            <span className="kw-cmt">{">"} INITIALIZING PROFILE...</span>
          </p>
          <p className="readme-terminal-line">
            <span className="kw-cmt">{">"} USER: </span>
            <span className="kw-var">ssantv</span>
          </p>
          <p className="readme-terminal-line">
            <span className="kw-cmt">{">"} STATUS: </span>
            <span className="kw-green readme-disponible">● {t.disponible}</span>
          </p>
        </div>
      </div>

      <h1 className="readme-titulo"># {t.titulo}</h1>
      <p className="readme-subtitulo">{t.subtitulo}</p>
      <p className="readme-bio">
      </p>

      <div className="readme-frase">
        <p className="readme-frase-texto">{t.frase}</p>
        <p className="readme-frase-autor kw-cmt">{t.fraseAutor}</p>
      </div>

    </div>
  );
}