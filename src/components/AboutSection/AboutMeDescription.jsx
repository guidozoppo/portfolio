import './AboutMeDescription.css'
import ZoppoGuidoCV from '../../../ZoppoGuidoCV.pdf';

export function AboutMeDescription () {

  const handleDownloadd = (e) => {
    //e.target.download = 'ZoppoGuidoCV.pdf'
    e.preventDefault();
    const link = document.createElement('a');
    link.href = ZoppoGuidoCV
    link.download = 'ZoppoGuidoCV.pdf';
    link.click();
  }

  return (
    <section className="about-description-section">
      <h3>Conoceme!</h3>
      <div className='about-me-details'>
        <p>Soy un apasionado programador junior, graduado de la Tecnicatura Universitaria en Desarrollo de 
          Aplicaciones Informaticas en la UNCPBA, Argentina. 
          Mi fascinación por la tecnología y el desarrollo de software me impulsa constantemente a buscar nuevos desafíos
          y oportunidades de aprendizaje.
        </p>

        <p>
          En mi experiencia en la industria, he tenido la oportunidad de enfrentarme a una variedad de proyectos 
          que me han permitido adquirir habilidades técnicas y prácticas valiosas. 
          Estoy comprometido con el crecimiento profesional continuo, 
          siempre busco expandir mi conjunto de habilidades y mantenerme al día con las últimas tendencias y 
          tecnologías en el campo de la programación.
        </p>

        <p>
          Estoy emocionado por la oportunidad de contribuir con mi pasión y dedicación a proyectos desafiantes,
          mientras sigo aprendiendo y creciendo en el camino.
        </p>

        <p>
          Además, creo que la actitud proactiva y la disposición para enfrentar nuevos desafíos
          son fundamentales en el mundo del desarrollo de software. 
          Estoy listo para sumergirme en nuevas tecnologías, resolver problemas complejos 
          y trabajar en equipo para alcanzar objetivos comunes.
        </p>
        <p>
        ¡Estoy entusiasmado por tenes nuevas oportunidades esperando 
        la posibilidad de colaborar en proyectos innovadores mientras 
        continúo aprendiendo en el mundo de la programación!
        </p>

        <p className='download-cv'><a href='../../../ZoppoGuidoCV.pdf' onClick={handleDownloadd}>ACA TE DEJO MI CV PARA DESCARGAR</a></p>
      </div>
    </section>
  )
}