import Footer from "../components/Footer";
import PageShell from "../components/PageShell";


// src/pages/Home.jsx
function Home() {

  
  return (
    <PageShell>
      <div className="page">
        
        {/* HERO */}
        <main className="hero">
          <section>
            <div className="hero-eyebrow">
              <span>Formación práctica en programación</span>
            </div>
            <h1 className="hero-title">
              Aprende{" "}
              <span className="hero-highlight">
                JavaScript, React, Git, GitHub
              </span>
              <br />y bases de datos con ejemplos reales.
            </h1>
            <p className="hero-text">
              Plataforma de lecciones pensadas para FP y autodidactas: código
              ejecutable, ejercicios autocorregibles y recursos para enseñar o
              aprender desarrollo web moderno paso a paso.
            </p>

            <div className="hero-tags">
              <span className="tag-pill">JavaScript moderno</span>
              <span className="tag-pill">React y componentes</span>
              <span className="tag-pill">Git & GitHub</span>
              <span className="tag-pill">Bases de datos</span>
              <span className="tag-pill">Buenas prácticas</span>
            </div>

            <div className="hero-actions">
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("cursos")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Cursos
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("ruta")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver cursos disponibles
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("ruta")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver ruta recomendada
              </button>
            </div>

            <p className="hero-note">
              Empieza por la base de JavaScript y avanza hacia React, control de
              versiones con Git/GitHub y bases de datos SQL.
            </p>
          </section>

          <aside className="hero-card" aria-label="Resumen de la plataforma">
            <header className="hero-card-header">
              <div>
                <div className="hero-card-title">Tu panel de aprendizaje</div>
                <div className="hero-row-label">
                  Cursos cortos, centrados en código.
                </div>
              </div>
              <span className="hero-card-badge">En desarrollo</span>
            </header>

            <div className="hero-grid">
              <div>
                <div className="hero-row-label">Rutas principales</div>
                <div className="hero-row-value">
                  Fundamentos JS · Frontend React · Control de versiones · Bases
                  de datos
                </div>
              </div>
              <div>
                <div className="hero-row-label">Lenguajes y herramientas</div>
                <div className="hero-langs">
                  <span className="chip">JavaScript</span>
                  <span className="chip">React</span>
                  <span className="chip">Git</span>
                  <span className="chip">GitHub</span>
                  <span className="chip">SQL</span>
                  <span className="chip">Shell</span>
                </div>
              </div>
              <div>
                <div className="hero-row-label">Formato</div>
                <div className="hero-row-value">
                  Lecciones breves · Ejemplos ejecutables · Ejercicios con tests
                </div>
              </div>
            </div>

            <div className="hero-card-footer">
              <span>Empieza por donde quieras, o sigue la ruta guiada.</span>
              <span>Diseñado para usar también en clase.</span>
            </div>
          </aside>
        </main>

        {/* COURSES SECTION */}
        <section id="cursos" aria-labelledby="cursos-heading">
          <h2 id="cursos-heading" className="section-title">
            Cursos disponibles
          </h2>
          <p className="section-sub">
            Selección inicial de cursos. Próximamente se añadirán más
            itinerarios y actividades prácticas.
          </p>

          <div className="courses-grid">
            <article className="course-card">
              <div className="course-level">Nivel inicial · 100% práctico</div>
              <h3 className="course-title">Fundamentos de JavaScript</h3>
              <p className="course-desc">
                Sintaxis básica, variables, funciones, arrays y objetos. Ideal
                como punto de partida para desarrollo web y para acompañar
                módulos de FP.
              </p>
              <div className="course-meta">
                <span>~10 lecciones</span>
                <span>Ejemplos ejecutables</span>
              </div>
              <a className="course-link" href="#js">
                Ver contenido
              </a>
            </article>

            <article className="course-card">
              <div className="course-level">Frontend · Intermedio</div>
              <h3 className="course-title">React desde cero</h3>
              <p className="course-desc">
                Componentes, estado, props y hooks básicos. Construye pequeñas
                aplicaciones paso a paso con código que puedes editar en el
                navegador.
              </p>
              <div className="course-meta">
                <span>~12 lecciones</span>
                <span>JSX y hooks</span>
              </div>
              <a className="course-link" href="#react">
                Ver contenido
              </a>
            </article>

            <article className="course-card">
              <div className="course-level">Herramientas del desarrollador</div>
              <h3 className="course-title">Git y GitHub para desarrollo</h3>
              <p className="course-desc">
                Commits, ramas, merges, pull requests y flujo de trabajo con
                GitHub. Pensado para proyectos pequeños y trabajo en equipo.
              </p>
              <div className="course-meta">
                <span>~8 lecciones</span>
                <span>Git CLI · GitHub</span>
              </div>
              <a className="course-link" href="#git">
                Ver contenido
              </a>
            </article>

            <article className="course-card">
              <div className="course-level">Datos · Fundamental</div>
              <h3 className="course-title">Bases de datos y SQL</h3>
              <p className="course-desc">
                Modelo relacional, consultas básicas, joins y diseño de esquemas
                orientado a aplicaciones web y ejercicios típicos de FP.
              </p>
              <div className="course-meta">
                <span>~10 lecciones</span>
                <span>SQL básico</span>
              </div>
              <a className="course-link" href="#db">
                Ver contenido
              </a>
            </article>
          </div>
        </section>

        {/* LEARNING PATH */}

        <section id="ruta" aria-labelledby="ruta-heading">
          <h2 id="ruta-heading" className="section-title">
            Ruta recomendada de aprendizaje
          </h2>
          <p className="section-sub">
            Pensada para estudiantes de FP de informática y personas que
            empiezan desde cero en desarrollo web.
          </p>
          <ol className="path-list">
            <li>
              <strong>Fundamentos de JavaScript</strong>: sintaxis, tipos,
              control de flujo, funciones.
            </li>
            <li>
              <strong>Git y GitHub</strong>: control de versiones para tus
              ejercicios y proyectos.
            </li>
            <li>
              <strong>React desde cero</strong>: componentes, estado y
              composición de interfaces.
            </li>
            <li>
              <strong>Bases de datos y SQL</strong>: almacenar y consultar
              información para tus apps.
            </li>
          </ol>
        </section>

        {/* ABOUT / FOOTER */}

        <section id="sobre-mi" aria-labelledby="sobre-heading">
          <h2 id="sobre-heading" className="section-title">
            Sobre este proyecto
          </h2>
          <p className="section-sub">
            Esta web nace con la idea de recopilar lecciones, ejemplos y
            ejercicios reutilizables sobre programación y herramientas modernas,
            con foco en la enseñanza práctica y en el contexto de FP.
          </p>
        </section>
      </div>
    </PageShell>
  );
}

export default Home;
