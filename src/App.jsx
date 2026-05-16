import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">JMF</h1>

        <ul className="nav-links">
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Tecnologías</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h3>¡Hola! Soy</h3>

          <h1>
            Jean Marco <br />
            Fernandez Silva
          </h1>

          <h2>Desarrollador Web</h2>

          <p>
            Apasionado por la tecnología, el desarrollo frontend y la creación
            de experiencias web modernas y atractivas.
          </p>

          <div className="buttons">
            <button className="primary-btn">
              Ver proyectos
            </button>

            <button className="secondary-btn">
              Contactarme
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle"></div>

          <img
            src="https://i.imgur.com/4ZQZ4Zy.png"
            alt="profile"
          />
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Sobre mí</h2>

          <p>
            Estudiante apasionado por el desarrollo de software y el diseño web
            moderno.
          </p>
        </div>

        <div className="card">
          <h2>Tecnologías</h2>

          <p>
            React, JavaScript, HTML, CSS, Node.js y herramientas modernas de
            desarrollo web.
          </p>
        </div>

        <div className="card">
          <h2>Proyectos</h2>

          <p>
            Desarrollo de aplicaciones web modernas desplegadas con AWS y
            GitHub Actions.
          </p>
        </div>
      </section>

      <footer className="footer">
        © 2026 Jean Marco Fernandez Silva
      </footer>
    </>
  )
}

export default App