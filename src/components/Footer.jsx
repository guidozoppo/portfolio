import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export function Footer () {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-personal-description'>
                    <h4>GUIDO ZOPPO</h4>
                    <p>Soy un apasionado programador junior, graduado de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas 
                    en la UNCPBA, Argentina. Mi fascinación por la tecnología y el desarrollo de software me impulsa 
                    constantemente a buscar nuevos desafíos y oportunidades de aprendizaje.</p>
                    </div>
                <div className='social-icons'>
                    <a target="_blank" href="https://github.com/guidozoppo"><FontAwesomeIcon className='icone' icon={faGithub} /></a>
                    <a target='_blank' href='https://www.linkedin.com/in/guidozoppo/'><FontAwesomeIcon className='icone' icon={faLinkedin} /></a>
                </div>
            </div>
            <div className='author-info'>
                <h4>© {currentYear} - Guido Zoppo</h4>
            </div>
        </footer>
    )
}