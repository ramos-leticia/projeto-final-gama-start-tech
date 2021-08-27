import React, {useState} from "react";
import logo from '../assets/img/logo-jobsnet.svg';
import '../../src/index.css';
import {Link} from 'react-router-dom';
import './navbar.css';

;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className="nav-container">
                    <Link to='/' className="logo">                      
                        <img src={logo} alt="Logo JobsNET" onClick={closeMenu}/>                        
                    </Link>
                    <div className="icon-nav" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-list'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-list'>
                            <Link to='/cadastro' className='nav-links' onClick={closeMenu}>Cadastrar</Link>
                        </li>
                        <li className='nav-list'>
                            <Link to='/login' className='nav-links' onClick={closeMenu}>Entrar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
                 
 

export default Navbar;