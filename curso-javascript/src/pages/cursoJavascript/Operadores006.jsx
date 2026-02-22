import BloqueCodigo from "../../components/BloqueCodigo";
import TitleContainer from "../../components/TitleContainer";
import operadores from "../../assets/operadores.png";

function Operadores006({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer
          titulo={"Operadores"}
          imagen={operadores}
          subtitulo={"Operadores en JavaScript"}
          imagenGrande={true}
        />
        <p>En esta sección, aprenderemos sobre los operadores en JavaScript.</p>
      </section>
      <section>
        <h2>Operadores en JavaScript</h2>
        <p>
          Los operadores en JavaScript son simbolos que se usan para realizar
          operaciones matemáticas o lógicas.
        </p>
      </section>
      {/* ...resto del contenido... */}
    </>
  );
}

export default Operadores006;
