import BloqueCodigo from "../../components/BloqueCodigo";
import TitleContainer from "../../components/TitleContainer";
import variable from "../../assets/variable.jpg";

function Variables003({ copySnippet }) {
  return (
    <>
      <section>
        <TitleContainer
          titulo={"Variables"}
          imagen={variable}
          subtitulo={"Variables III en JavaScript"}
          imagenGrande={false}
        />
        <p>
          En esta sección, vamos a aprender algo más sobre las variables en
          JavaScript, sobre como seguir las buenas prácticas para nombrarlas.
        </p>
      </section>
      <section>
        <p>Reglas para nombrar variables en JavaScript:</p>
        <ul>
          <li>
            <a href="#starts-with-a-letter">
              Las variables deben comenzar con una letra (a-z, A-Z), un signo de
              dólar ($) o un guion bajo (_).
            </a>
          </li>
          <li>
            <a href="#cannot-start-with-a-number">
              No pueden comenzar con un número (0-9).
            </a>
          </li>
          <li>
            <a href="#cannot-contain-spaces">
              Pueden contener letras, números, signos de dólar y guiones bajos.
            </a>
          </li>
          <li>
            <a href="#cannot-contain-special-characters">
              No pueden contener espacios ni caracteres especiales como @, #, %,
              etc.
            </a>
          </li>
          <li>
            <a href="#cannot-be-keywords">
              No pueden ser palabras reservadas de JavaScript (como "var",
              "let", "const", "if", "else", etc.).
            </a>
          </li>
          <li>
            <a href="#case-sensitive">
              Son sensibles a mayúsculas y minúsculas (por ejemplo, "miVariable"
              y "mivariable" son diferentes).
            </a>
          </li>
        </ul>
        <p>Reglas específicas para var, let y const:</p>
        <ul>
          <li>
            <a href="#let-no-duplicate-names">
              let no permite declarar dos variables con el mismo nombre exacto.
            </a>
          </li>
        </ul>
      </section>
      {/* ...resto del contenido... */}
    </>
  );
}

export default Variables003;
