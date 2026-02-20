// DetallesCursoJavascript.jsx
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
    <section style={{ padding: "2rem", lineHeight: 1.6 }}>
      <header>
        <h1 style={{ marginBottom: "0.25rem" }}>Curso de JavaScript Moderno</h1>
        <p style={{ color: "#555", marginTop: 0 }}>
          Resumen de contenido y estructura del tutorial moderno de JavaScript. Enlaces a la fuente oficial.
        </p>
      </header>

      <article>
        <h2>¿Qué aprenderás?</h2>
        <ul>
          {temasDestacados.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </article>

      <article>
        <h2>Estructura oficial del tutorial</h2>
        <ol>
          {partes.map((p) => (
            <li key={p.id} style={{ marginBottom: "1rem" }}>
              <h3 style={{ margin: 0 }}>{p.titulo}</h3>
              <p style={{ margin: "0.5rem 0" }}>{p.resumen}</p>
              <a
                href={`${p.enlace}${p.ancla}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Abrir ${p.titulo} en es.javascript.info`}
              >
                Ver contenido en es.javascript.info
              </a>
            </li>
          ))}
        </ol>
      </article>

      <footer style={{ marginTop: "1.5rem", fontSize: "0.95rem" }}>
        <p>
          Fuente: <a href="https://es.javascript.info/" target="_blank" rel="noreferrer noopener">El Tutorial de
          JavaScript Moderno</a>
        </p>
      </footer>
    </section>
  );
}
