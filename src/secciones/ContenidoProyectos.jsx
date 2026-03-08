import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, FileCode } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";
import { proyectos, proyectosAprendizaje } from "../data/proyectos";

export default function ContenidoProyectos({ onAbrirDetalle }) {
  const { lang } = useLang();
  const t = traducciones[lang].proyectos;
  const lista = proyectos[lang];
  const listaAprendizaje = proyectosAprendizaje[lang];
  const [expandido, setExpandido] = useState(null);
  const [aprendizajeAbierto, setAprendizajeAbierto] = useState(false);

  return (
    <div className="seccion">
      <div className="firma">
        <span className="kw-const">const </span>
        <span className="kw-var">{t.fn} </span>
        <span className="kw-punc">= [</span>
      </div>

      <div className="indent">
        {lista.map((p, idx) => (
          <div key={idx} className="card card-proyecto">

            {p.imagen && (
              <div className="proyecto-imagen" onClick={() => onAbrirDetalle(p.slug)}>
                <img src={p.imagen} alt={p.nombre} />
                <div className="proyecto-imagen-overlay">
                  <FileCode size={20} />
                  <span>{t.verDetalle}</span>
                </div>
              </div>
            )}

            <h3 className="proyecto-titulo">{p.nombre}</h3>
            <p className="proyecto-desc">{p.descripcion}</p>

            <div className="tags">
              {p.tecnologias.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>

            <button
              className="btn-expandir"
              onClick={() => setExpandido(expandido === idx ? null : idx)}
            >
              {expandido === idx ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              {expandido === idx ? t.ocultarCaracteristicas : t.verCaracteristicas}
            </button>

            {expandido === idx && (
              <ul className="caracteristicas">
                {p.caracteristicas?.map((c, i) => (
                  <li key={i}>▸ {c}</li>
                ))}
              </ul>
            )}

            <div className="proyecto-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-code">
                <Github size={16} /> {t.codigo}
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-demo">
                  <ExternalLink size={16} /> {t.demo}
                </a>
              )}
              <button className="proyecto-link proyecto-link-detalle" onClick={() => onAbrirDetalle(p.slug)}>
                <FileCode size={16} /> {t.verDetalle}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="aprendizaje-seccion">
        <button
          className="btn-aprendizaje-toggle"
          onClick={() => setAprendizajeAbierto(!aprendizajeAbierto)}
        >
          {aprendizajeAbierto ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          <span className="kw-comment">{"// "}{t.otrosProyectos}</span>
        </button>

        {aprendizajeAbierto && (
          <div className="indent aprendizaje-grid">
            {listaAprendizaje.map((p, idx) => (
              <div key={idx} className="card card-aprendizaje">
                <h3 className="proyecto-titulo">{p.nombre}</h3>
                <p className="proyecto-desc">{p.descripcion}</p>
                <div className="tags">
                  {p.tecnologias.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proyecto-link proyecto-link-code">
                    <Github size={16} /> {t.codigo}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="kw-punc" style={{ marginTop: 16 }}>];</div>
    </div>
  );
}