import React, {Component} from "react";
import logo from '../assets/img/logo-jobsnet.svg';
import '../../src/index.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <>
                <nav className='navbar'>
                    <div className="nav-container">
                        <Link to='/' className="logo">                       
                            <img src={logo} alt="Logo JobsNET"/>                        
                        </Link>
                        <div className="links-nav">
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={'/cadastro'}>Cadastro</a></li>
                            <li><a href={"/login"}>Entrar</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

}


 export default Navbar;
  
 