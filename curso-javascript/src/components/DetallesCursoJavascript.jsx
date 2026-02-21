// src/pages/DetallesCursoJavascript.jsx
import PageShell from "../components/PageShell";

export default function DetallesCursoJavascript() {
  const partes = [
    {
      id: "parte-1",
      titulo: "Parte 1 · El lenguaje JavaScript",
      resumen:
        "Desde conceptos básicos hasta temas avanzados (POO, funciones, prototipos, clases, módulos, promesas, async/await y más). Base para escribir JavaScript moderno sin depender del entorno.",
      enlace: "https://es.javascript.info/",
      ancla: "#el-lenguaje-javascript",
    },
    {
      id: "parte-2",
      titulo: "Parte 2 · El navegador: Documentos, Eventos e Interfaces",
      resumen:
        "DOM y ecosistema del navegador: manipulación de documentos, eventos, interfaces Web, APIs del navegador y patrones comunes para UI interactivas.",
      enlace: "https://es.javascript.info/",
      ancla: "#el-navegador-documentos-eventos-e-interfaces",
    },
    {
      id: "parte-3",
      titulo: "Parte 3 · Artículos adicionales",
      resumen:
        "Series temáticas que amplían el aprendizaje con casos y técnicas específicas fuera del flujo principal del curso.",
      enlace: "https://es.javascript.info/",
      ancla: "#articulos-adicionales",
    },
  ];

  const temasDestacados = [
    "Fundamentos: variables, tipos, operadores, control de flujo",
    "Funciones, closures, this, call/apply/bind",
    "Objetos, prototipos, clases y herencia",
    "Módulos ES, import/export, carga dinámica",
    "Asincronía: callbacks, Promises, async/await",
    "DOM, eventos y APIs del navegador",
  ];

  return (
    <PageShell>
      <div
        className="
        min-h-screen text-textc antialiased
        bg-[radial-gradient(1200px_700px_at_15%_0%,theme(colors.bg.backdrop)_0%,theme(colors.bg.DEFAULT)_60%)]
      "
      >
        {/* Contenido */}
        <main className="px-5 py-8 md:px-6 md:py-12">
          <div className="max-w-content mx-auto">
            <h1 className="font-bold tracking-[0.2px] text-[28px] md:text-h1 mb-4">
              Curso de JavaScript Moderno
            </h1>
            <p className="text-textc-muted font-medium -mt-1 mb-6">
              Resumen de contenido y estructura del tutorial moderno de
              JavaScript. Enlaces a la fuente oficial.
            </p>

            <h2 className="font-bold text-[22px] md:text-h2 leading-snug mt-7 mb-3">
              ¿Qué aprenderás?
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 mb-6">
              {temasDestacados.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h2 className="font-bold text-[22px] md:text-h2 leading-snug mt-7 mb-3">
              Estructura oficial del tutorial
            </h2>

            <div className="divide-y divide-divider">
              {partes.map((p) => (
                <section key={p.id} id={p.id} className="py-6 first:pt-0">
                  <h3 className="font-bold text-[18px] md:text-h3 leading-snug mb-2">
                    {p.titulo}
                  </h3>
                  <p className="mb-3">{p.resumen}</p>
                  <p>
                    <a
                      href={`${p.enlace}${p.ancla}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent hover:text-accent-hover underline-offset-4 hover:underline"
                      aria-label={`Ver contenido de ${p.titulo} en es.javascript.info`}
                    >
                      Ver contenido en es.javascript.info
                    </a>
                  </p>
                </section>
              ))}
            </div>

            <p className="text-textc-muted mt-6">
              Fuente:{" "}
              <a
                href="https://es.javascript.info/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent hover:text-accent-hover underline-offset-4 hover:underline"
              >
                El Tutorial de JavaScript Moderno
              </a>
            </p>
          </div>
        </main>
      </div>
    </PageShell>
  );
}
