import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import {useState} from 'react';
import {GiHamburger} from 'react-icons/gi';
const Navbar = () => {
   const [toggle, setToggle] = useState(false);

   const handleToggle = () => {
       setToggle(!toggle);
       console.log(toggle);
   }

    return ( <>
        <nav className="navbar">
          <div className="nav-link-left">
          <Link to="/Main" className="link-left karin">Karin Lundqvist</Link>
          
          </div>
  
       
          <div className={`nav-link-right ${toggle ? 'active' : ''}`}>  

            <Link to="/Portfolio" className="link-right">
                Portfolio
            </Link>
            
            <Link to="/CV" className="cv" className="link-right" >
                CV
            </Link>

            <a href="https://instagram.com/lundqvistkarin" target="_blank" rel="noreferrer" className="link-right">
            </a>
            <a href="https://www.linkedin.com/in/karin-lundqvist-555a3721b/" target="_blank" rel="noreferrer" className="link-right">
                LinkedIn
            </a>
            <a href="https://github.com/FikaKarin" target="_blank" rel="noreferrer" className="link-right">
                GitHub
            </a>
            <Link to="/Contact" className="Contact" className="link-right" >
                Contact
            </Link>
     
        </div>




        <GiHamburger onClick={handleToggle} className="toggle-menu"/>
          {/* <button onClick={handleToggle} className="toggle-menu">Menu</button> */}
        </nav>
        <div className={`sub-nav-right ${toggle ? 'active' : ''}`}>  
        <Link to="/Portfolio" className="link-right">
                Portfolio
            </Link>

            <Link to="/CV" className="cv" className="link-right" >
                CV
            </Link>

            <a href="https://instagram.com/lundqvistkarin" target="_blank" rel="noreferrer" className="link-right">
                Instagram
            </a>
            <a href="https://www.linkedin.com/in/karin-lundqvist-555a3721b/" target="_blank" rel="noreferrer" className="link-right">
                LinkedIn
            </a>
            <a href="https://github.com/FikaKarin" target="_blank" rel="noreferrer" className="link-right">
                GitHub
            </a>
            <Link to="/Contact" className="Contact" className="link-right" >
                Kontakt
            </Link>
          
     
        </div>

        </>
     );
}
 
export default Navbar;
