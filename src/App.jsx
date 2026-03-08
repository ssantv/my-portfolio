import { useState } from "react";
import BarraSuperior      from "./components/BarraSuperior";
import BarraLateral       from "./components/BarraLateral";
import ExploradorArchivos from "./components/ExploradorArchivos";
import BarraPestanas      from "./components/BarraPestanas";
import BarraInferior      from "./components/BarraInferior";
import ContenidoReadme      from "./secciones/ContenidoReadme";
import ContenidoInicio      from "./secciones/ContenidoInicio";
import ContenidoSobreMi     from "./secciones/ContenidoSobreMi";
import ContenidoProyectos   from "./secciones/ContenidoProyectos";
import ContenidoHabilidades from "./secciones/ContenidoHabilidades";
import ContenidoContacto    from "./secciones/ContenidoContacto";
import ContenidoDetalleProyecto from "./secciones/ContenidoDetalleProyecto";
import { useLang } from "./context/LangContext";

export default function App() {
  const { lang } = useLang();
  const [archivoAbierto,   setArchivoAbierto]   = useState("README.md");
  const [pestanasAbiertas, setPestanasAbiertas] = useState(["README.md"]);
  const [menuAbierto,      setMenuAbierto]      = useState(false);

  const abrirDetalle = (slug) => {
    const tab = `${slug}.detail.jsx`;
    setPestanasAbiertas(prev => prev.includes(tab) ? prev : [...prev, tab]);
    setArchivoAbierto(tab);
  };

  const renderContenido = () => {
    if (pestanasAbiertas.length === 0) {
      return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <p style={{ color: "var(--text-dim)", fontSize: 15 }}>
            {lang === "es" ? "Abrí un archivo desde el explorador" : "Open a file from the explorer"}
          </p>
        </div>
      );
    }

    if (archivoAbierto.endsWith(".detail.jsx")) {
      const slug = archivoAbierto.replace(".detail.jsx", "");
      return <ContenidoDetalleProyecto slug={slug} />;
    }

    switch (archivoAbierto) {
      case "README.md":       return <ContenidoReadme />;
      case "inicio.jsx":      return <ContenidoInicio />;
      case "sobre-mi.jsx":    return <ContenidoSobreMi />;
      case "proyectos.jsx":   return <ContenidoProyectos onAbrirDetalle={abrirDetalle} />;
      case "habilidades.jsx": return <ContenidoHabilidades />;
      case "contacto.jsx":    return <ContenidoContacto />;
      default:                return null;
    }
  };

  return (
    <div className="app">
      <BarraSuperior menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />

      <div className="app-body">
        <BarraLateral />

        <ExploradorArchivos
          archivoAbierto={archivoAbierto}
          setArchivoAbierto={setArchivoAbierto}
          pestanasAbiertas={pestanasAbiertas}
          setPestanasAbiertas={setPestanasAbiertas}
          menuAbierto={menuAbierto}
          setMenuAbierto={setMenuAbierto}
        />

        <div className="editor-area">
          <BarraPestanas
            archivoAbierto={archivoAbierto}
            setArchivoAbierto={setArchivoAbierto}
            pestanasAbiertas={pestanasAbiertas}
            setPestanasAbiertas={setPestanasAbiertas}
          />

          <div className="editor-content">
            {renderContenido()}
          </div>

          <BarraInferior />
        </div>
      </div>
    </div>
  );
}