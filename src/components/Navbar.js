import React, { useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
          <img src='nav-logo.png' alt='logo' style={{height: "90px"}}/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                    ABOUT US
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-link' onClick={closeMobileMenu}>
                    PROJECTS
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/diversification' className='nav-link' onClick={closeMobileMenu}>
                    DIVERSIFICATION
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/ourprocess' className='nav-link' onClick={closeMobileMenu}>
                    OUR PROCESS
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/testimonials' className='nav-link' onClick={closeMobileMenu}>
                    TESTIMONIALS
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/careers' className='nav-link' onClick={closeMobileMenu}>
                    CAREERS
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contactus' className='nav-link' onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
            </li>
          </ul>  
        </div>
      </nav>
    </>
  )
}

export default Navbar
