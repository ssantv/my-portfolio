import { Home, User, FolderOpen, Zap, Mail, FileCode } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

const iconos = {
  "README.md":       <FileCode size={16} className="ic-orange" />,
  "inicio.jsx":      <Home     size={16} className="ic-blue"   />,
  "sobre-mi.jsx":    <User     size={16} className="ic-green"  />,
  "proyectos.jsx":   <FolderOpen size={16} className="ic-yellow"/>,
  "habilidades.jsx": <Zap     size={16} className="ic-purple" />,
  "contacto.jsx":    <Mail    size={16} className="ic-red"    />,
};

function ListaArchivos({ t, archivoAbierto, onClickArchivo }) {
  return (
    <div>
      <div className="explorador__titulo">{t.explorador.titulo}</div>
      <div className="explorador__lista">
        <div
          className={`archivo-item ${archivoAbierto === "README.md" ? "activo" : ""}`}
          onClick={() => onClickArchivo("README.md")}
        >
          {iconos["README.md"]}
          <span>README.md</span>
        </div>

        {t.explorador.archivos.map((item) => (
          <div
            key={item.archivo}
            className={`archivo-item ${archivoAbierto === item.archivo ? "activo" : ""}`}
            onClick={() => onClickArchivo(item.archivo)}
          >
            {iconos[item.archivo]}
            <span>{item.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExploradorArchivos({
  archivoAbierto,
  setArchivoAbierto,
  pestanasAbiertas,
  setPestanasAbiertas,
  menuAbierto,
  setMenuAbierto,
}) {
  const { lang } = useLang();
  const t = traducciones[lang];

  const handleClick = (archivo) => {
    if (!pestanasAbiertas.includes(archivo)) {
      setPestanasAbiertas([...pestanasAbiertas, archivo]);
    }
    setArchivoAbierto(archivo);
  };

  return (
    <>
      <div className="explorador">
        <ListaArchivos t={t} archivoAbierto={archivoAbierto} onClickArchivo={handleClick} />
      </div>

      <div
        className={`explorador-overlay ${menuAbierto ? "abierto" : "cerrado"}`}
        onClick={() => setMenuAbierto(false)}
      />

      <div className={`explorador-movil ${menuAbierto ? "abierto" : ""}`}>
        <ListaArchivos t={t} archivoAbierto={archivoAbierto} onClickArchivo={handleClick} />
      </div>
    </>
  );
}
