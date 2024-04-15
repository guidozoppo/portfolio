import './About.css'
import { AboutMeDescription } from "./AboutMeDescription"
import { Skills } from "./Skills"

export function About () {
  return (
    <section>
      <h2>SOBRE MI</h2>
      <p>Aca vas a encontrar informacion sobre mi, como estudios, experiencia y skills</p>
      <div className='about-details'>
        <AboutMeDescription/>
        <Skills/>
      </div>
    </section>
  )
}