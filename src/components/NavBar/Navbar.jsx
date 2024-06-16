import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="home" smooth={true} duration={500} activeClass="active">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} offset={-70} activeClass="active">About</Link></li>
                <li><Link to="projects" smooth={true} duration={500} offset={-70} activeClass="active">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
                <li><AnimatedButton /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
