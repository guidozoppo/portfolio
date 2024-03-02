import './ContentMainPage.css'
import { ImageWithTextAndButton } from "./ImageWithTextAndButton";
import { ProjectMinView } from "./ProjectMinView";

export function ContentMainPage () {
    return (
        <main className="content-main-page">
            <ImageWithTextAndButton />
            <div>
                <h3>Proyectos Destacados</h3>
            </div>
            <div className='projects-container'>
                <ProjectMinView />
                <ProjectMinView />
                <ProjectMinView />
            </div>
        </main>
    )
}
