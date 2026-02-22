import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { dataCurso } from "./data/dataCurso";

function BarraSuperior({ paginaActual, setPaginaActual }) {
  const [paginaMaxima, _setPaginaMaxima] = useState(dataCurso.paginas.length);
  return (
    <div className="upperBar">
      <button
        type="button"
        className="btn-ghost"
        onClick={() => setPaginaActual(paginaActual > 1 ? paginaActual - 1 : 1)}
      >
        <ArrowLeft
          size={28}
          strokeWidth={2.5}
          absoluteStrokeWidth
          color="#3B82F6"
        />
      </button>
      <p>
        {paginaActual} de {paginaMaxima}
      </p>
      <button
        type="button"
        className="btn-ghost"
        onClick={() =>
          setPaginaActual(
            paginaActual < paginaMaxima ? paginaActual + 1 : paginaMaxima,
          )
        }
      >
        <ArrowRight
          size={28}
          strokeWidth={2.5}
          absoluteStrokeWidth
          color="#3B82F6"
        />
      </button>
    </div>
  );
}

export default BarraSuperior;
