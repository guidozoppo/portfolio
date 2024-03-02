import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { projects } from "../../data/projects.json"
import './ProjectsCarousel.css'
import { faReact, faBootstrap, faGithub, faJs, faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export function ProjectsCarousel () {

  function GetSymbol (symbolName) {
    const symbol = symbolName.toLowerCase()
    if (symbol === "react") {
      return faReact
    }
    else if (symbol === "bootstrap"){
      return faBootstrap
    } 
    else if (symbol === "javascript"){
      return faJs
    }
    else if (symbol === "css"){
      return faCss3Alt
    }
  } 

    return (
        <main className="projectsCarousel-container">
          {projects.map((project) => {
            if (project.urlImage != "") {

              return (
                <div className="carousel-container" key={project.id}>
                    <div className="img-container">
                      <a target="_blank" href={project.preview}>
                        <img src={project.urlImage} alt={project.urlImage} />
                      </a>
                    </div>
                    <div className="project-info-container">
                      <h1>{project.title}</h1>
                      <div className="project-stack">
                        <a className="preview-button"><FontAwesomeIcon className='react-icon' icon={GetSymbol(project.stack[0])} />{project.stack[0]}</a>
                        <a className="preview-button"><FontAwesomeIcon className='react-icon' icon={GetSymbol(project.stack[1])} />{project.stack[1]}</a>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-buttons">
                        <a className="preview-button" target="_blank" href={project.preview}><FontAwesomeIcon icon={faCode} />Preview</a>
                        <a className="preview-button" target="_blank" href={project.preview}><FontAwesomeIcon icon={faGithub} />GitHub</a>
                      </div>
                    </div>
                </div>
            )
          }
          })}
        </main>
    )
}