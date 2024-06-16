import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { CiMail } from "react-icons/ci";


const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <h3><CiMail style={{ 
                fontSize: '40px', 
                verticalAlign: 'middle', 
                marginRight: '5px', 
                color: 'white' }} /> m.angelinesamson@gmail.com</h3>
            <div className="contact-info">
                <a href="https://www.linkedin.com/in/mary-angeline-samson-15728b210/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a href="https://github.com/AngieS-git" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                </a>
            </div>
            <p> © 2024 Mary Angeline Samson</p>
        </section>
    );
}

export default Contact;
