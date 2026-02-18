// src/pages/Home.jsx



function Home() {
  return (
    <>
      <header className="header">
        <img
          src="/code_campus_logo.jpg"
          alt="Logotipo CodeCampus"
          className="logo"
        />
        <h1>CodeCampus</h1>
        <p>
          Plataforma de lecciones pensadas para FP y autodidactas: código
          ejecutable, ejercicios autocorregibles y recursos para enseñar o
          aprender desarrollo web moderno paso a paso.
        </p>
      </header>

      <main>
        <section className="hero">
          <h2>Aprende programación paso a paso</h2>
          <p>
            Empieza por la base de JavaScript y avanza hacia React, control de
            versiones con Git/GitHub y bases de datos SQL.
          </p>
        </section>

        <section className="courses">
          <h2>Cursos destacados</h2>

          <article className="course-card">
            <h3>Fundamentos de JavaScript</h3>
            <p>
              Sintaxis básica, variables, funciones, arrays y objetos. Ideal
              como punto de partida para desarrollo web y para acompañar módulos
              de FP.
            </p>
            <a href="#">Ver contenido</a>
          </article>

          <article className="course-card">
            <h3>React desde cero</h3>
            <p>
              Componentes, estado, props y hooks básicos. Construye pequeñas
              aplicaciones paso a paso con código que puedes editar en el
              navegador.
            </p>
            <a href="#">Ver contenido</a>
          </article>

          <article className="course-card">
            <h3>Git y GitHub</h3>
            <p>
              Commits, ramas, merges, pull requests y flujo de trabajo con
              GitHub. Pensado para proyectos pequeños y trabajo en equipo.
            </p>
            <a href="#">Ver contenido</a>
          </article>

          <article className="course-card">
            <h3>Bases de datos SQL</h3>
            <p>
              Modelo relacional, consultas básicas, joins y diseño de esquemas
              orientado a aplicaciones web y ejercicios típicos de FP.
            </p>
            <a href="#">Ver contenido</a>
          </article>
        </section>

        <section className="about">
          <h2>¿Para quién es esta web?</h2>
          <p>
            Pensada para estudiantes de FP de informática y personas que
            empiezan desde cero en desarrollo web.
          </p>
          <p>
            Esta web nace con la idea de recopilar lecciones, ejemplos y
            ejercicios reutilizables sobre programación y herramientas modernas,
            con foco en la enseñanza práctica y en el contexto de FP.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
