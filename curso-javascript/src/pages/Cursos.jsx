// src/pages/Cursos.jsx
import { useMemo } from "react";
import PageShell from "../components/PageShell";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

/** Slug seguro para URLs a partir del nombre del curso */
function toSlug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Cursos() {
  const cursos = useMemo(
    () => [
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
          "Domina Git desde cero: control de versiones, commits, ramas (branches), merges, resolución de conflictos y flujos profesionales.",
      },
      {
        nombre: "GitHub",
        descripcion:
          "Repos remotos, pull requests, issues, proyectos colaborativos, GitHub Actions y automatización.",
      },
      {
        nombre: "SQL",
        descripcion:
          "Consultas, filtros, joins, subconsultas, funciones agregadas, diseño de tablas y optimización básica.",
      },
      {
        nombre: "Shell",
        descripcion:
          "Terminal y Shell scripting: comandos básicos, navegación, redirecciones, pipes y automatización.",
      },
      {
        nombre: "Bases de datos",
        descripcion:
          "Modelado relacional y no relacional, índices, relaciones, normalización y diseño orientado a apps.",
      },
    ],
    [],
  );

  return (
    <PageShell>
      <div className="page">
        <section>
          <h2 className="section-title">Cursos disponibles</h2>
          <p className="section-sub">
            Selecciona un curso para ver el contenido.
          </p>
          <div className="courses-grid">
            {cursos.map((curso) => {
              const slug = toSlug(curso.nombre);
              return (
                <article key={slug} className="course-card">
                  <h3 className="course-title">{curso.nombre}</h3>
                  <p className="course-desc">{curso.descripcion}</p>
                  <Link
                    to={`/detalle-curso/${slug}`}
                    className="course-link"
                    aria-label={`Ver detalles del curso ${curso.nombre}`}
                  >
                    Ver detalles del curso
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </PageShell>
  );
}
