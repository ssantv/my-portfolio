import { useState } from "react";
import { Send, Check, AlertCircle, Mail, Github, Linkedin } from "lucide-react";
import { useLang } from "../context/LangContext";
import traducciones from "../data/traducciones";

const EMAIL_USER = "ssantv00";
const EMAIL_DOMAIN = "gmail.com";

export default function ContenidoContacto() {
  const { lang } = useLang();
  const t = traducciones[lang].contacto;

  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [estado, setEstado] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`;
  };

  const handleEnviar = async () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      setEstado("error");
      return;
    }

    setEnviando(true);
    setEstado(null);

    try {
      const res = await fetch("https://formspree.io/f/meerovqb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.nombre,
          email: form.email,
          message: form.mensaje,
        }),
      });

      if (res.ok) {
        setEstado("exito");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="seccion">
      <div className="firma">
        <span className="kw-async">{t.asyncFn} </span>
        <span className="kw-fn-name">{t.nombreFn}</span>
        <span className="kw-punc">(</span>
        <span className="kw-orange">{t.formulario}</span>
        <span className="kw-punc">{") {"}</span>
      </div>

      <div className="indent" style={{ maxWidth: 560 }}>
        <div className="form-group">
          <label className="form-label">
            <span className="kw-const">const </span>
            {t.nombre} <span className="kw-punc">=</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="kw-const">const </span>
            {t.email} <span className="kw-punc">=</span>
          </label>
          <input
            type="email"
            className="form-input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <span className="kw-const">const </span>
            {t.mensaje} <span className="kw-punc">=</span>
          </label>
          <textarea
            rows={6}
            className="form-textarea"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          />
        </div>

        {estado === "exito" && (
          <div className="alerta alerta-exito">
            <Check size={16} /> {t.enviado}
          </div>
        )}
        {estado === "error" && (
          <div className="alerta alerta-error">
            <AlertCircle size={16} /> {t.error}
          </div>
        )}

        <button
          className="btn btn-primary"
          onClick={handleEnviar}
          disabled={enviando}
        >
          <Send size={16} />
          {enviando ? t.enviando : t.enviar}
        </button>
      </div>

      <div className="card indent" style={{ marginTop: 32, maxWidth: 560 }}>
        <p style={{ marginBottom: 16 }}>{t.otros}</p>
        <div className="contacto-links">

          <button onClick={handleEmailClick} className="contacto-link contacto-link-btn">
            <Mail size={16} />
            <span aria-label="email">
              {EMAIL_USER}
              <span aria-hidden="true" style={{ display: "none" }}>NOSPAM</span>
              @{EMAIL_DOMAIN}
            </span>
          </button>

          <a href="https://github.com/ssantv" target="_blank" rel="noopener noreferrer" className="contacto-link">
            <Github size={16} /> <span>github.com/ssantv</span>
          </a>

          <a href="https://www.linkedin.com/in/sandra-santos-valderrey/" target="_blank" rel="noopener noreferrer" className="contacto-link">
            <Linkedin size={16} /> <span>linkedin.com/in/sandra-santos-valderrey</span>
          </a>

        </div>
      </div>

      <div className="kw-punc" style={{ marginTop: 24 }}>
        {"}"}
      </div>
    </div>
  );
}