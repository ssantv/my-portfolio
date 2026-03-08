import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

export default function ContenidoHabilidades() {
  const { lang } = useLang();
  const t = traducciones[lang].habilidades;

  const grupos = [
    { key: "frontend",    titulo: t.frontend    },
    { key: "backend",     titulo: t.backend     },
    { key: "herramientas",titulo: t.herramientas},
  ];

  return (
    <div className="seccion">
      <div className="firma">
        <span className="kw-const">const </span>
        <span className="kw-var">{t.fn} </span>
        <span className="kw-punc">= {"{"}</span>
      </div>

      <div className="indent">
        {grupos.map(({ key, titulo }) => (
          <div key={key} className="card">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "var(--text-bright)" }}>
              {titulo}
            </h3>
            <div className="skills-grid">
              {t.skills[key].map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="kw-punc" style={{ marginTop: 16 }}>{"}"}</div>
    </div>
  );
}
