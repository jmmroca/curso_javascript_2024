import YearSpan from "./YearSpan";

function Footer() {
  return (
    <footer className="footer">
      <span>
        © <YearSpan /> Campus Código. Todos los derechos reservados.
      </span>
      <div className="footer-links">
        <a href="#cursos">Cursos</a>
        <a href="#ruta">Ruta</a>
        <a href="#sobre-mi">Contacto</a>
      </div>
    </footer>
  );
}


export default Footer;
