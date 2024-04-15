import './HomePage.css'

export function HomePage() {

   /*  const handleDownloadd = (e) => {
        e.target.download = 'ZoppoGuidoCV.pdf'  
    } */

    return (
        <main className='HeaderMainPage-container'>
            <h1>HOLA, SOY GUIDO ZOPPO</h1>
            <p>Soy un programador junior dispuesto a aceptar desafios y con muchas ganas de aprender y ayudar</p>
            <a>PROJECTS</a>
            {/* <div>
                <a href='../../../ZoppoGuidoCV.pdf' onClick={handleDownloadd}>Descargar CV</a>
            </div> */}
        </main>
    )
}
