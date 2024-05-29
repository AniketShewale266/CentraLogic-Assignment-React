import React from 'react'
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <h3>Aniket</h3>
            </div>

            <div className='navMenus'>
                <ul>
                    <li><Link to="header" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} d uration={500}>Contact</Link></li>
                </ul>
            </div>

            <div className='btns'>
                <button className='btn'>My Skills</button>
            </div>
        </div>
    </>
  )
}

export default Navbar