// src/pages/Cursos.jsx
import { useMemo } from "react";
import PageShell from "../components/PageShell";

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
      <div
        className="
        min-h-screen text-textc antialiased
        bg-[radial-gradient(1200px_700px_at_15%_0%,#0e1620_0%,theme(colors.bg.DEFAULT)_60%)]
      "
      >
        {/* Contenido */}
        <main className="px-5 py-8 md:px-6 md:py-12">
          <div className="max-w-content mx-auto">
            <h1 className="font-bold tracking-[0.2px] text-[28px] md:text-h1 mb-4">
              Cursos que impartimos
            </h1>
            <p className="text-textc-muted font-medium -mt-1 mb-6">
              Selección inicial de cursos. Próximamente añadiremos más
              itinerarios y actividades prácticas.
            </p>

            <div className="divide-y divide-divider">
              {cursos.map((curso) => {
                const slug = toSlug(curso.nombre);
                return (
                  <section key={slug} className="py-6 first:pt-0">
                    <h2 className="font-bold text-[22px] md:text-h2 leading-snug mb-2">
                      {curso.nombre}
                    </h2>
                    <p className="mb-3">{curso.descripcion}</p>
                    <p>
                      <a
                        href={`/detalle-curso/${slug}`}
                        className="text-accent hover:text-accent-hover underline-offset-4 hover:underline"
                        aria-label={`Ver detalles del curso ${curso.nombre}`}
                      >
                        Ver detalles del curso
                      </a>
                    </p>
                  </section>
                );
              })}
            </div>

            <p className="text-textc-muted mt-6">
              ¿Buscas otro contenido? Contáctanos para próximas convocatorias.
            </p>
          </div>
        </main>
      </div>
    </PageShell>
  );
}
