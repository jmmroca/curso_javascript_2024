// src/DetallesCursoJavascript.jsx
import React from "react";

export default function DetallesCursoJavascript() {
  const partes = [
    {
      id: "parte-1",
      titulo: "Parte 1 · El lenguaje JavaScript",
      resumen:
        "Desde conceptos básicos hasta temas avanzados del lenguaje (POO, funciones, prototipos, clases, módulos, promesas, async/await y más). Es la base para escribir JavaScript moderno sin depender del entorno.",
      enlace: "https://es.javascript.info/",
      ancla: "#el-lenguaje-javascript",
    },
    {
      id: "parte-2",
      titulo: "Parte 2 · El navegador: Documentos, Eventos e Interfaces",
      resumen:
        "Profundiza en el DOM y el ecosistema del navegador: manipulación de documentos, eventos, interfaces Web, APIs del navegador y patrones comunes para construir UI interactivas.",
      enlace: "https://es.javascript.info/",
      ancla: "#el-navegador-documentos-eventos-e-interfaces",
    },
    {
      id: "parte-3",
      titulo: "Parte 3 · Artículos adicionales",
      resumen:
        "Series temáticas complementarias que amplían el aprendizaje con casos y técnicas específicas fuera del flujo principal del curso.",
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
    <main
      className="
        min-h-screen
        bg-[radial-gradient(1200px_700px_at_15%_0%,#0e1620_0%,#0f1720_60%)]
        text-[#e6edf4]
        antialiased
        px-5 py-8 md:px-6 md:py-12
      "
    >
      <div className="max-w-[880px] mx-auto">
        {/* Título */}
        <h1 className="text-[28px] md:text-[36px] font-bold leading-tight tracking-[0.2px] mb-4">
          Curso de JavaScript Moderno
        </h1>

        {/* Subtítulo */}
        <p className="text-[#9aa8b6] font-medium -mt-1 mb-6">
          Resumen de contenido y estructura del tutorial moderno de JavaScript. Enlaces a la fuente oficial.
        </p>

        {/* ¿Qué aprenderás? */}
        <h2 className="text-[22px] md:text-[24px] font-bold leading-snug mt-7 mb-3">
          ¿Qué aprenderás?
        </h2>
        <ul className="list-disc pl-6 space-y-1.5 mb-6">
          {temasDestacados.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Estructura del tutorial */}
        <h2 className="text-[22px] md:text-[24px] font-bold leading-snug mt-7 mb-3">
          Estructura oficial del tutorial
        </h2>

        <div className="divide-y divide-[#1f2a36]">
          {partes.map((p) => (
            <section key={p.id} id={p.id} className="py-6 first:pt-0">
              <h3 className="text-[18px] md:text-[20px] font-bold leading-snug mb-2">
                {p.titulo}
              </h3>
              <p className="mb-3">
                {p.resumen}
              </p>
              <p>
                <a
                  href={`${p.enlace}${p.ancla}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#7cc2ff] hover:text-[#a6d8ff] underline-offset-4 hover:underline"
                  aria-label={`Ver contenido de ${p.titulo} en es.javascript.info`}
                >
                  Ver contenido en es.javascript.info
                </a>
              </p>
            </section>
          ))}
        </div>

        {/* Fuente */}
        <p className="text-[#9aa8b6] mt-6">
          Fuente:{" "}
          <a
            href="https://es.javascript.info/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#7cc2ff] hover:text-[#a6d8ff] underline-offset-4 hover:underline"
          >
            El Tutorial de JavaScript Moderno
          </a>
        </p>
      </div>
    </main>
  );
}