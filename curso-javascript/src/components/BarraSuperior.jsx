import { useState } from "react";
import { SquareArrowLeft  , SquareArrowRight } from 'lucide-react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { dataCurso } from "./data/dataCurso";

function BarraSuperior({ paginaActual, setPaginaActual }) {
  const [paginaMaxima, _setPaginaMaxima] = useState(dataCurso.paginas.length);
  return (
    <div className="upperBar">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setPaginaActual(paginaActual > 1 ? paginaActual - 1 : 1)}
      >
        <ArrowLeft />
      </button>
      <p>
        {paginaActual} de {paginaMaxima}
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          setPaginaActual(
            paginaActual < paginaMaxima ? paginaActual + 1 : paginaMaxima,
          )
        }
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default BarraSuperior;
