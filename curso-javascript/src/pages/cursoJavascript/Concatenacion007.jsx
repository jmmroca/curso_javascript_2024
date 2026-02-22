import BloqueCodigo from "../../components/BloqueCodigo";
import TitleContainer from "../../components/TitleContainer";
import concatenacion from "../../assets/concatenacion_javascript.png";

function Concatenacion007({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer
          titulo={"Strings"}
          imagen={concatenacion}
          subtitulo={"Concatenación en JavaScript"}
          imagenGrande={true}
        />
        <p>
          En esta sección, aprenderemos sobre la forma de concatenar cadenas de
          texto en JavaScript.
        </p>
      </section>
      <section id="concatenacion-de-cadenas-en-javascript">
        <h2>Concatenación en JavaScript</h2>
        <p>
          La concatenación es el proceso de unir dos o más cadenas de texto para
          formar una nueva cadena. En JavaScript, las cadenas son inmutables,
          por lo que cada concatenación crea una nueva cadena sin modificar las
          originales.
        </p>
      </section>
      {/* ...resto del contenido... */}
    </>
  );
}

export default Concatenacion007;
