// Cursos.jsx
import React, { useEffect } from "react";
import MenuPrincipal from "../components/MenuPrincipal";
import LogoHeader from "../components/LogoHeader";

export default function Cursos() {
  const cursos = [
    {
      nombre: "JavaScript",
      descripcion:
        "Aprende los fundamentos del lenguaje más usado en el desarrollo web: variables, funciones, bucles, arrays, objetos y programación moderna con ES6+.",
    },
    {
      nombre: "React",
      descripcion:
        "Curso completo de React: componentes, props, estado, hooks, efectos, enrutado, gestión de estado y buenas prácticas en aplicaciones modernas.",
    },
    {
      nombre: "Git",
      descripcion:
        "Domina Git desde cero: control de versiones, commits, ramas (branches), fusiones (merge), resolución de conflictos y flujos profesionales.",
    },
    {
      nombre: "GitHub",
      descripcion:
        "Aprende a trabajar con repositorios remotos, pull requests, issues, proyectos colaborativos, GitHub Actions y automatización.",
    },
    {
      nombre: "SQL",
      descripcion:
        "Curso dedicado al lenguaje SQL: consultas, filtros, joins, subconsultas, funciones agregadas, diseño de tablas y optimización básica.",
    },
    {
      nombre: "Shell",
      descripcion:
        "Introducción a la terminal y Shell scripting: comandos básicos, navegación del sistema, redirecciones, pipes y automatización de tareas.",
    },
    {
      nombre: "Bases de datos",
      descripcion:
        "Aprende a diseñar, crear y administrar bases de datos relacionales y no relacionales, índices, relaciones, normalización y modelado de datos.",
    },
  ];

  useEffect(() => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <div className="page">
        <LogoHeader />
        <MenuPrincipal />
        <section style={{ padding: "2rem" }}>
          <h1>Cursos que impartimos</h1>
          <p>
            Estos son los cursos disponibles actualmente. Cada uno está diseñado
            para ayudarte a dominar las tecnologías más demandadas.
          </p>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {cursos.map((curso) => (
              <li
                key={curso.nombre}
                style={{
                  marginBottom: "1.5rem",
                  padding: "1rem",
                  borderRadius: "8px",
                  background: "rgba(15, 23, 42, 0.96)",
                }}
              >
                <h2 style={{ margin: 0 }}>{curso.nombre}</h2>
                <p style={{ marginTop: "0.5rem" }}>{curso.descripcion}</p>
                <a
                  href={`/curso-javascript/detalle-curso/${curso.nombre.toLowerCase().replace(" ", "-")}`}
                  className="btn-primary"
                >
                  Ver detalles
                </a>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span>
            © <span id="year"></span> Campus Código. Todos los derechos
            reservados.
          </span>
          <div className="footer-links">
            <a href="#sobre-mi">Contacto</a>
          </div>
        </footer>
      </div>
    </>
  );
}
