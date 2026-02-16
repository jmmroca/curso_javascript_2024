import BotonCopiarCodigo from "./BotonCopiarCodigo";
import BotonEjecutarCodigo from "./BotonEjecutarCodigo";

function BloqueCodigo({ copySnippet, titulo, codigo }) {
  return (
    <>
      <h4>
        <p>{titulo}</p>
      </h4>
      <pre className="relative group p-4 bg-slate-900 rounded-lg">
        <code className="language-javascript">{codigo}</code>
        <BotonCopiarCodigo copySnippet={copySnippet} />
        <BotonEjecutarCodigo codigo={codigo} />
      </pre>
    </>
  );
}

export default BloqueCodigo;
