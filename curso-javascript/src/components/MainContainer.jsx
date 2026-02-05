import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import { infoCurso } from "./data/info";
import { dataCurso } from "./data/dataCurso";
function MainContainer({ paginaActual }) {
  useEffect(() => {
    Prism.highlightAll();
    return () => Prism.highlightAll();
  }, [paginaActual]);

  return (
    <div className="main-container">
      <h1>{infoCurso[paginaActual - 1].titulo}</h1>
      <p>{infoCurso[paginaActual - 1].autor}</p>

      <div
        dangerouslySetInnerHTML={{
          __html: dataCurso.paginas[paginaActual - 1].contenido,
        }}
      ></div>
      
    </div>
  );
}

export default MainContainer;
