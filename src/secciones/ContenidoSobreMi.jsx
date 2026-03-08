import { Download } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

export default function ContenidoSobreMi() {
  const { lang } = useLang();
  const t = traducciones[lang].sobreMi;

  const secciones = [
    { key: "formacion", titulo: t.formacion, color: "var(--green)" },
    { key: "experiencia", titulo: t.experiencia, color: "var(--blue)" },
    { key: "intereses", titulo: t.intereses, color: "var(--purple)" },
  ];

  return (
    <div className="seccion">
      <div className="firma">
        <span className="kw-function">function </span>
        <span className="kw-fn-name">{t.fn}</span>
        <span className="kw-punc">{"() {"}</span>
      </div>

      <div className="indent">
        {secciones.map(({ key, titulo, color }) => (
          <div key={key} className="card" style={{ marginBottom: 16 }}>
            <h3
              style={{ fontSize: 17, fontWeight: 700, color, marginBottom: 10 }}
            >
              {titulo}
            </h3>

            {key === "formacion" && (
              <p style={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
                {t.formacionDesc}
              </p>
            )}
            {key === "experiencia" && (
              <>
                <p style={{ fontWeight: 600 }}>{t.experienciaTitulo}</p>
                <p style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
                  {t.experienciaSubtitulo}
                </p>
                <p style={{ marginTop: 8 }}>{t.experienciaDesc}</p>
              </>
            )}
            {key === "intereses" && (
              <p style={{ lineHeight: 1.7 }}>{t.interesesDesc}</p>
            )}
          </div>
        ))}

        <div className="card">
          <p style={{ marginBottom: 14 }}>{t.cvTexto}</p>
          <a
            href="https://drive.google.com/file/d/139XgjFsyfX97MSTCEvarYflUsE3tJR26/view?usp=sharing" target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <Download size={16} />
            {t.cvBoton}
          </a>
        </div>
      </div>

      <div className="kw-punc" style={{ marginTop: 16 }}>
        {"}"}
      </div>
    </div>
  );
}
