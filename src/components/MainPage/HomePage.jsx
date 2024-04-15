import './HomePage.css'

export function HomePage() {

   /*  const handleDownloadd = (e) => {
        e.target.download = 'ZoppoGuidoCV.pdf'  
    } */

    return (
        <main id='homePage' className='HeaderMainPage-container'>
            <h1>HOLA, SOY GUIDO ZOPPO</h1>
            <div className='personal-description'>
                <p>Soy un apasionado programador junior, graduado de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas 
                en la UNCPBA, Argentina. Mi fascinación por la tecnología y el desarrollo de software me impulsa 
                constantemente a buscar nuevos desafíos y oportunidades de aprendizaje.</p>
            </div>
            <a>PROJECTS</a>
            {/* <div>
                <a href='../../../ZoppoGuidoCV.pdf' onClick={handleDownloadd}>Descargar CV</a>
            </div> */}
        </main>
    )
}
