import { Link } from 'react-router-dom';
import './ImageWithTextAndButton.css'

export function ImageWithTextAndButton() {
  return (
    <div className="containerStyle">
      <img src="https://media.wired.co.uk/photos/648ca7803ea74362c96e52f8/16:9/w_2560%2Cc_limit/Best-Websites-To-Show-Off-Your-Portfolio-Business-1357904435.jpg" alt="asd" />
      <div className="overlayStyle">
        <h1>Hola, Soy Guido</h1>
        <p>Gracias por visitar mi portfolio hecho con React!</p>
        <Link to={'/projects'}><button>Ver Proyectos</button></Link>
      </div>
    </div>
  );
}