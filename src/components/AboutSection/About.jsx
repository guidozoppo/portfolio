import './About.css'
import { AboutMeDescription } from "./AboutMeDescription"
import { Skills } from "./Skills"

export function About () {
  return (
    <section>
      <h2>ABOUT ME</h2>
      <p>En esta sección compartiré detalles sobre mi formación, experiencia y habilidades.</p>
      <div className='about-details'>
        <AboutMeDescription/>
        <Skills/>
      </div>
    </section>
  )
}