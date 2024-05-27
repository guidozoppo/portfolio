import './Experience.css'

export function Experience() {
    return (
        <div id='Experience' className='experience-container'>
            <h3>EXPERIENCIA</h3>
            <article>
                <section>
                    <div className='div-dates'>
                        <h4>Febr 2023 - Enero 2024</h4>
                    </div>
                    <div className='div-info-experience'>
                        <h4>Junior Unity Developer</h4>
                        <h5>Invow</h5>
                        <p>Participé en el desarrollo de Superviral19, un juego móvil desarrollado con <span>Unity</span> y <span>C#</span>. 
                            A pesar de no tener conocimientos previos en estas tecnologías, me capacité rápidamente y pude contribuir al proyecto.</p>
                        <p>Completé un curso intensivo de Unity y C# a través de Udemy y de un integrante del proyecto, 
                            adquiriendo las habilidades necesarias para contribuir eficazmente.</p>
                        <p>Trabajé en estrecha colaboración mediante la metodologia de <span>scrum</span> con otros desarrolladores y diseñadores para asegurar una integración fluida y un desarrollo coherente.</p>

                        <div className='skills-container'>
                            <div className='skill-experience'>C#</div>
                            <div className='skill-experience'>Unity</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='div-dates'>
                        <h4>Dic 2022 - Febr 2023</h4>
                    </div>
                    <div className='div-info-experience'>
                        <h4>Web scraping comparison</h4>
                        <h5>Invow</h5>
                        <p>Desarrollé una solución automatizada para sincronizar la disponibilidad de autos entre un cliente que alquila vehículos y su proveedor de flotas.</p>
                        <p>Primero me reuní con el cliente para entender sus necesidades</p>
                        <p>Luego implementé un programa utilizando <span>Selenium con Javascript</span> para automatizar la obtención de datos de disponibilidad de autos desde la página del proveedor.</p> 
                        <p>Diseñé un proceso que compara la disponibilidad del proveedor con la base de datos del cliente, identificando las discrepancias para una futura actualizacion manual del inventario.</p>
                        <p>Con este programa se logro una reducción significativa del tiempo requerido para actualizar la disponibilidad de autos.</p>
                        <div className='skills-container'>
                            <div className='skill-experience'>Selenium</div>
                            <div className='skill-experience'>Javascript</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='div-dates'>
                        <h4>Sept 2021 - Oct 2022</h4>
                    </div>
                    <div className='div-info-experience'>
                        <h4>Junior Frontend</h4>
                        <h5>Gamulan.com</h5>
                        <p>Participé en el desarrollo de varias secciones del frontend de Gamulan.com, utilizando <span>HTML5</span>, <span>CSS3</span> y <span>JavaScript</span>. 
                            Trabajé directamente con el cliente para implementar sus requisitos y asegurar que las secciones del sitio cumplieran 
                            con sus expectativas.</p>
                        <p>Mantuve comunicación directa con el cliente para entender sus necesidades y preferencias, 
                            realizando ajustes y mejoras basadas en su retroalimentación.</p>
                        <p>Aseguré que todas las secciones desarrolladas fueran completamente responsivas, 
                            garantizando una visualización óptima en dispositivos móviles y ordenadores.</p>
                        <p></p>
                        <div className='skills-container'>
                            <div className='skill-experience'>HTML5</div>
                            <div className='skill-experience'>CSS3</div>
                            <div className='skill-experience'>Javascript</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='div-dates'>
                        <h4>Mar 2021 - Sept 2021</h4>
                    </div>
                    <div className='div-info-experience'>
                        <h4>QA Manual</h4>
                        <h5>Gamulan.com</h5>
                        <p>Participé en el proceso de QA manual para Gamulan.com.</p>
                        <p>Mantuve comunicación directa con el desarrollador del sitio web para entender las nuevas funcionalidades y mejoras implementadas.</p>
                        <p>Junto con el desarrollador, creamos tarjetas en <span>Trello</span> para cada nueva funcionalidad o cambio en el sitio, detallando los requisitos y criterios de prueba.</p>
                        <p>Realicé pruebas manuales exhaustivas de las nuevas funcionalidades y cambios, asegurando que cumplieran con los requisitos especificados y funcionaran correctamente.</p>
                        <p>Cualquier error o problema encontrado en una funcionalidad lo documenté en su respectiva tarjeta de Trello, 
                            acompañando con capturas de pantalla o videos para una mejor comprensión.</p>
                        <p>Proporcioné feedback detallado al desarrollador, colaborando para resolver los problemas encontrados y realizando pruebas de verificación posteriores a las correcciones.</p>
                    </div>
                </section>
            </article>
        </div>
    )
}