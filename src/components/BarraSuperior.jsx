import { useState } from "react";
import { Code, Sun, Moon, Menu, X, Volume2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

export default function BarraSuperior({ menuAbierto, setMenuAbierto }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const [leyendo, setLeyendo] = useState(false);
  const t = traducciones[lang];

  const toggleLectura = () => {
    if (leyendo) {
      window.speechSynthesis.cancel();
      setLeyendo(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(document.body.innerText);
    u.lang = lang === "es" ? "es-ES" : "en-US";
    u.onend = () => setLeyendo(false);
    window.speechSynthesis.speak(u);
    setLeyendo(true);
  };

  return (
    <div className="barra-superior">
      <div className="barra-superior__logo">
        <Code size={20} />
        <span>{t.titulo}</span>
      </div>

      <div className="barra-superior__acciones">
        <button
          className="btn-icono btn-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
          title="Explorador"
        >
          {menuAbierto ? <X size={18} /> : <Menu size={18} />}
        </button>

        <button className="btn-icono" onClick={toggleLang} title="Cambiar idioma">
          {lang === "es" ? "es" : "en"}
        </button>

        <button
          className={`btn-icono ${leyendo ? "activo" : ""}`}
          onClick={toggleLectura}
          title="Lectura en voz alta"
        >
          <Volume2 size={18} />
        </button>

        <button className="btn-icono" onClick={toggleTheme} title="Cambiar tema">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
}
