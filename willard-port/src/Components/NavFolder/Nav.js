import React from "react";
import {Link} from 'react-router-dom';
import './NavStyles.css';

const Nav = () => {
    
    return(
        <nav className="navContainer">
            <ul className="navList">
                <li className="homeLink"><Link to="/" style={{textDecoration:'none'}}>ZW</Link></li>
                <li><Link to="/about" style={{textDecoration:'none'}}>About</Link></li>
                <li><Link to="/projects" style={{textDecoration:'none'}}>Projects</Link></li>
                <li><Link to="/contact" style={{textDecoration:'none'}}>Contact</Link></li>

            </ul>

        </nav>
    )
};

export default Nav;