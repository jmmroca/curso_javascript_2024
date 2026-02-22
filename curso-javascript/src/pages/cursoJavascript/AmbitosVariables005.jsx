import BloqueCodigo from "../../components/BloqueCodigo";
import TitleContainer from "../../components/TitleContainer";
import scopeJs from "../../assets/Scope-en-JavaScript.jpg";

function AmbitosVariables005({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer
          titulo={"Variables"}
          imagen={scopeJs}
          subtitulo={"Ámbitos en variables de JavaScript"}
          imagenGrande={true}
        />
        <p>
          En esta sección, aprenderemos sobre las variables en JavaScript, como
          saber donde usarlas por su ámbito o scope.
        </p>
      </section>
      <section id="ambitos-de-variables-en-javascript">
        <h2>Ámbitos de Variables en JavaScript</h2>
        <p>
          En JavaScript, el ámbito determina desde dónde puede accederse a una
          variable. Existen principalmente tres tipos de ámbito:{" "}
          <strong>global</strong>, <strong>de función</strong> y{" "}
          <strong>de bloque</strong>.
        </p>
      </section>
      {/* ...resto del contenido... */}
    </>
  );
}

export default AmbitosVariables005;
