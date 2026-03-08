import { Github, Linkedin, User, Download } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

export default function ContenidoInicio() {
  const { lang } = useLang();
  const t = traducciones[lang].inicio;

  return (
    <div className="seccion">
      <div className="card">
        <div className="perfil-wrapper">
          <div className="perfil-avatar">
            <img src="public/img.png" alt="Sandra Santos" />
          </div>

          <div style={{ flex: 1 }}>
            <div className="firma">
              <span className="kw-const">const </span>
              <span className="kw-var">{t.constVar} </span>
              <span className="kw-punc">= </span>
              <span className="kw-fn-name">{"{"}</span>
            </div>

            <div className="indent" style={{ lineHeight: 2 }}>
              <div>
                <span className="kw-prop">{t.nombre}</span>
                <span className="kw-punc"> : </span>
                <span className="kw-str">"Sandra Santos"</span>,
              </div>
              <div>
                <span className="kw-prop">titulo</span>
                <span className="kw-punc"> : </span>
                <span className="kw-str">"{t.titulo}"</span>,
              </div>
              <div>
                <span className="kw-prop">{t.ubicacion}</span>
                <span className="kw-punc"> : </span>
                <span className="kw-str">"Zamora, España"</span>,
              </div>
              <div>
                <span className="kw-prop">{t.disponible}</span>
                <span className="kw-punc"> : </span>
                <span className="kw-bool">true</span>,
              </div>
            </div>

            <div className="kw-fn-name">{"}"}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "var(--text-bright)" }}>
          {t.titulo}
        </h2>
        <p style={{ lineHeight: 1.7, color: "var(--text)", marginBottom: 20 }}>
          {t.descripcion}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://github.com/ssantv" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sandra-santos-valderrey/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/139XgjFsyfX97MSTCEvarYflUsE3tJR26/view?usp=sharing" target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <Download size={16} /> Descargar CV
            {t.cvBoton}
          </a>
        </div>
      </div>
    </div>
  );
}
