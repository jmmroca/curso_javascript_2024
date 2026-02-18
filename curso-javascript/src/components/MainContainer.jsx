import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import { infoCurso } from "./data/info";
import { dataCurso } from "./data/dataCurso";

import { Copy, Check } from "lucide-react";

function MainContainer({ paginaActual }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Prism.highlightAll();
    return () => Prism.highlightAll();
  }, [paginaActual]);

  const Contenido = dataCurso.paginas[paginaActual - 1].contenido;

  async function copySnippet(button) {
    // 1. Buscamos el texto dentro del bloque code más cercano
    const container = button.parentElement;
    const codeElement = container.querySelector("code");
    if (!codeElement) return;
    const codeText = codeElement.innerText;

    try {
      // 2. Usamos la API para copiar
      await navigator.clipboard.writeText(codeText);

      // 3. Feedback visual (cambiamos el texto del botón temporalmente)

      {
        copied ? (
          <Check size={18} className="text-green-400" />
        ) : (
          <Copy size={18} className="text-slate-400" />
        );
        setCopied(true);
      }
      setTimeout(() => {
        copied ? (
          <Check size={18} className="text-green-400" />
        ) : (
          <Copy size={18} className="text-slate-400" />
        );
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("No se pudo copiar", err);
    }
  }

  return (
    <div className="main-container">
      <h1>{infoCurso[paginaActual - 1].titulo}</h1>
      <p>{infoCurso[paginaActual - 1].autor}</p>

      <div className="content" id="content-container" data-prism="javascript">
        {typeof Contenido === "function" ? (
          <Contenido copySnippet={copySnippet} copied={copied} />
        ) : (
          Contenido
        )}
      </div>
    </div>
  );
}

export default MainContainer;
