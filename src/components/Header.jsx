import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <img src="https://media.licdn.com/dms/image/C4E03AQFOs9sKqr2nOQ/profile-displayphoto-shrink_800_800/0/1645125938026?e=1714003200&v=beta&t=i4UALtPavADlM2fFCdouVMZY6wCxw1kjITeHh3g73p0" alt="" />
            <h1>Guido Zoppo</h1>
          </div>
          <div className={`menu-burger ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
              <FontAwesomeIcon className='bars-icon' icon={faBars} />
          </div>
        </div>
        <div className={`section-items ${showMenu ? 'hidden' : ''} ${showDropdownMenu ? 'dropdown-menu' : ''}`}>
            <Link to='/'>Home</Link>
            <Link to='/'>Sobre Mi</Link>
            <Link to='/projects'>Proyectos</Link>
            {/* <a href=''>Experiencia</a> */}
        </div>
      </div>
    </header>
  );
}

