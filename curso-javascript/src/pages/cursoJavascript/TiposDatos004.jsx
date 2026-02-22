import BloqueCodigo from "../../components/BloqueCodigo";
import TitleContainer from "../../components/TitleContainer";
import dataTypeJs from "../../assets/data_type_javascript.png";

function TiposDatos004({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer
          titulo={"Datos"}
          imagen={dataTypeJs}
          subtitulo={"Tipos de datos en JavaScript"}
          imagenGrande={true}
        />
        <p>
          En esta sección, vamos a conocer los distintos tipos de datos que
          puede contener cualquiera de nuestras variables en JavaScript.
        </p>
      </section>
      <section>
        <p>Tipos de datos en JavaScript:</p>
        <ul>
          <li>
            <a href="#primitivos">Primitivos.</a>
          </li>
          <li>
            <a href="#estructurales">Estructurales</a>
          </li>
        </ul>
      </section>
      {/* ...resto del contenido... */}
    </>
  );
}

export default TiposDatos004;
