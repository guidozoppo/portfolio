import './HomePage.css'
import ZoppoGuidoCV from '../../../ZoppoGuidoCV.pdf';

export function HomePage() {

    const handleDownloadd = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = ZoppoGuidoCV
        link.download = 'ZoppoGuidoCV.pdf';
        link.click();  
    }

    return (
        <main id='homePage' className='HeaderMainPage-container'>
            <div className='main-page-container'>
                <h1>HOLA, SOY GUIDO ZOPPO</h1>
                <div className='personal-description'>
                    <p>Soy un apasionado programador junior, graduado de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas 
                    en la UNCPBA, Argentina. Mi fascinación por la tecnología y el desarrollo de software me impulsa 
                    constantemente a buscar nuevos desafíos y oportunidades de aprendizaje.</p>
                </div>
                <a href='#projects'>PROJECTS</a>
                <div>
                    <a href='../../../ZoppoGuidoCV.pdf' onClick={handleDownloadd}>Descargar CV</a>
                </div>
            </div>
        </main>
    )
}
