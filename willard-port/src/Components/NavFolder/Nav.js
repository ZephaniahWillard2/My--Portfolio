import React from "react";
import Footer from '../FootFolder/Footer';

import {Link} from 'react-router-dom';
import Logo from "../../Images/Logo.png";
import './NavStyles.css';

const Nav = () => {
    
    return(
        <nav className="navContainer">
            <ul className="navList">
                <li className="homeLink"><Link to="/" style={{textDecoration:'none'}}><img src={Logo} className="navLogo" alt="Logo" style={{height:"5vh"}}/></Link></li>
                <li><Link to="/about" style={{textDecoration:'none'}}>About</Link></li>
                <li><Link to="/projects" style={{textDecoration:'none'}}>Projects</Link></li>
                <li><Link to="/contact" style={{textDecoration:'none'}}>Contact</Link></li>
                <Footer/>
            </ul>
            

        </nav>
    )
};

export default Nav;