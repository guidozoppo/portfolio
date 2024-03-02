import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header>
        <h1><Link to='/'>Guido Zoppo</Link></h1>
        <div>
            <Link to='/'>Sobre Mi</Link>
            <Link to='/projects'>Proyectos</Link>
            <a href=''>Experiencia</a>
            <a target='_blank' href='https://www.linkedin.com/in/guidozoppo/'><FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} /></a>
        </div>
    </header>
  )
}
