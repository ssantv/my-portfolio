import { FileCode, Home, User, FolderOpen, Zap, Mail, X } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

const PESTANAS = [
  { id: "README.md",       labelKey: "readme",       Icono: FileCode,  colorClass: "ic-orange" },
  { id: "inicio.jsx",      labelKey: "inicio",       Icono: Home,      colorClass: "ic-blue"   },
  { id: "sobre-mi.jsx",    labelKey: "sobreMi",      Icono: User,      colorClass: "ic-green"  },
  { id: "proyectos.jsx",   labelKey: "proyectos",    Icono: FolderOpen,colorClass: "ic-yellow" },
  { id: "habilidades.jsx", labelKey: "habilidades",  Icono: Zap,       colorClass: "ic-purple" },
  { id: "contacto.jsx",    labelKey: "contacto",     Icono: Mail,      colorClass: "ic-red"    },
];

export default function BarraPestanas({
  archivoAbierto,
  setArchivoAbierto,
  pestanasAbiertas,
  setPestanasAbiertas,
}) {
  const { lang } = useLang();
  const t = traducciones[lang];

  const cerrar = (id, e) => {
    e.stopPropagation();
    const nuevas = pestanasAbiertas.filter(p => p !== id);
    setPestanasAbiertas(nuevas);
    if (archivoAbierto === id && nuevas.length > 0) {
      setArchivoAbierto(nuevas[nuevas.length - 1]);
    }
  };

  const visibles = PESTANAS.filter(p => pestanasAbiertas.includes(p.id));

  return (
    <div className="barra-pestanas">
      {visibles.map(({ id, labelKey, Icono, colorClass }) => (
        <div
          key={id}
          className={`pestana ${archivoAbierto === id ? "activa" : ""}`}
          onClick={() => setArchivoAbierto(id)}
          onMouseDown={(e) => {
            if (e.button === 1) {
              e.preventDefault();
              cerrar(id, e);
            }
          }}
        >
          <Icono size={14} className={colorClass} />
          <span>{t.pestanas[labelKey]}</span>
          <span className="pestana__cerrar" onClick={(e) => cerrar(id, e)}>
            <X size={13} />
          </span>
        </div>
      ))}
    </div>
  );
}