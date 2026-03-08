import { Github, ExternalLink } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";
import { proyectos } from "../data/proyectos";

export default function ContenidoDetalleProyecto({ slug }) {
  const { lang } = useLang();
  const t = traducciones[lang].proyectos;
  const proyecto = proyectos[lang].find((p) => p.slug === slug);

  if (!proyecto) return (
    <div className="seccion">
      <p style={{ color: "var(--text-dim)" }}>Proyecto no encontrado.</p>
    </div>
  );

  const { nombre, tecnologias, github, demo, detalle } = proyecto;

  return (
    <div className="seccion detalle-seccion">

      {/* Cabecera */}
      <div className="firma">
        <span className="kw-const">const </span>
        <span className="kw-var">{slug} </span>
        <span className="kw-punc">= {"{"}</span>
      </div>

      <div className="indent">

        {/* Descripción + contexto */}
        <div className="card detalle-card-desc">
          <p className="kw-cmt">{"// descripción"}</p>
          {detalle.descripcionLarga.split("\n\n").map((p, i) => (
            <p key={i} className="detalle-desc">{p}</p>
          ))}
          {detalle.contexto && (
            <p className="detalle-contexto">
              <span className="kw-cmt">{"// contexto · "}</span>
              {detalle.contexto}
            </p>
          )}
          <div className="tags" style={{ marginTop: 16 }}>
            {tecnologias.map((tech, i) => <span key={i} className="tag">{tech}</span>)}
          </div>
        </div>

        {/* Galería */}
        {detalle.imagenes?.length > 0 && (
          <div className="detalle-galeria">
            {detalle.imagenes.map((src, i) => (
              <div key={i} className="detalle-galeria-item">
                <img src={src} alt={`${nombre} screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        )}

        {/* Funcionalidades */}
        {detalle.funcionalidades?.length > 0 && (
          <div className="card" style={{ marginBottom: 16 }}>
            <p className="kw-cmt" style={{ marginBottom: 16 }}>{"// funcionalidades"}</p>
            <div className="detalle-funcionalidades">
              {detalle.funcionalidades.map((f, i) => (
                <div key={i} className="detalle-func-item">
                  <p className="detalle-func-titulo">
                    <span className="kw-punc">▸ </span>
                    <span className="kw-var">{f.titulo}</span>
                  </p>
                  <p className="detalle-func-desc">{f.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stack */}
        {detalle.stack && (
          <div className="card" style={{ marginBottom: 16 }}>
            <p className="kw-cmt" style={{ marginBottom: 16 }}>{"// stack"}</p>
            <div className="detalle-stack">
              {Object.entries(detalle.stack).map(([clave, valor]) => (
                <div key={clave} className="detalle-stack-row">
                  <span className="kw-prop">{clave}</span>
                  <span className="kw-punc">: </span>
                  <span className="kw-str">"{valor}"</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Retos y aprendizajes */}
        <div className="detalle-dos-col">
          <div className="card">
            <p className="kw-cmt" style={{ marginBottom: 12 }}>{"// retos"}</p>
            <ul className="caracteristicas">
              {detalle.retos.map((r, i) => <li key={i}>▸ {r}</li>)}
            </ul>
          </div>
          <div className="card">
            <p className="kw-cmt" style={{ marginBottom: 12 }}>{"// aprendizajes"}</p>
            <ul className="caracteristicas">
              {detalle.aprendizajes.map((a, i) => <li key={i}>▸ {a}</li>)}
            </ul>
          </div>
        </div>

        {/* Próximas features */}
        {detalle.proximasFeatures?.length > 0 && (
          <div className="card" style={{ marginBottom: 16 }}>
            <p className="kw-cmt" style={{ marginBottom: 12 }}>{"// próximas features"}</p>
            <ul className="caracteristicas">
              {detalle.proximasFeatures.map((f, i) => <li key={i}>▸ {f}</li>)}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="proyecto-links" style={{ marginTop: 8 }}>
          <a href={github} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-code">
            <Github size={16} /> {t.codigo}
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-demo">
              <ExternalLink size={16} /> {t.demo}
            </a>
          )}
        </div>

      </div>

      <div className="kw-punc" style={{ marginTop: 24 }}>{"}"}</div>
    </div>
  );
}