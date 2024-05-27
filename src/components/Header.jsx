import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Estilos CSS para el encabezado

export function Header () {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowDropdownMenu(false); // Ocultar el menú en filas al mostrar el menú hamburguesa
  };

  return (
    <header>
      <div className='header-container'>
        <div className='header-content'>
          <div className='name-container'>
            <img src="/images/photo-profile.jpg" alt="Profile Image" />
            <h1>Guido Zoppo</h1>
          </div>
          <div className={`menu-burger ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
              <FontAwesomeIcon className='bars-icon' icon={faBars} />
          </div>
        </div>
        <div className={`section-items ${showMenu ? 'hidden' : ''} ${showDropdownMenu ? 'dropdown-menu' : ''}`}>
            <a href='#homePage'>Home</a>
            <a href='#About'>About</a>
            <a href='#Experience'>Experience</a>
            <a href='#projects'>Proyectos</a>
        </div>
      </div>
    </header>
  );
}

