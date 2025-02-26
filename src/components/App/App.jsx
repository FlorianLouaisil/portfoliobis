import './App.scss'
import Project from '../Projects/Projects.jsx'
import Skills from '../Skills/Skills.jsx'

function App() {

  return (
    <main>
      <header>
        <h1>Florian Louaisil</h1>
        <nav>
          <a href="#about">À propos</a>
          <a href="#projects">Réalisations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <div className="description">
          <h2>Ma description</h2>
          <p>Je suis Louaisil Florian, 22 ans, en reconversion professionnelle vers le développement web.
            Passionné par la création et toujours curieux d'apprendre, je me consacre à la réalisation de
            projets qui allient innovation et fonctionnalité. Mon objectif est de progresser constamment et de
            contribuer à des solutions numériques impactantes.</p>
          <a href="CV_Florian_Louaisil.pdf" className="download-button">Télécharger mon CV</a>
        </div>
      </section>

      <Project />
      <Skills />

      <section id="contact">
        <h2>Contact</h2>
        <p>Voici mes coordonnées pour me contacter :</p>
        <ul>
          <li><strong>Email :</strong> <a href="mailto:florian.louaisil02@gmail.com">florian.louaisil02@gmail.com</a>
          </li>
        </ul>
      </section>

      <footer>
        <a href="https://www.linkedin.com/in/florian-louaisil-533395238" target="_blank">LinkedIn</a>
        <a href="https://github.com/FlorianLouaisil" target="_blank">GitHub</a>
      </footer>

    </main >
  )
}

export default App