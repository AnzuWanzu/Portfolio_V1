import React from 'react';
import './about.css';
import aboutImage from '../../assets/Images/About.jpg'; 

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="image-container">
                <img
                    src={aboutImage}
                    alt="About"
                    className="about-image"
                />
            </div>

            <p>Hello! I'm Mary Angeline Samson, a 4th-year Computer Engineering student with specialization 
                in Low Code Web App Development at Mapua University. 

            I have a broad interest in Robotics, Machine Learning, UI/UX design, and web app development.

            Currently, I'm focused on developing a Smart Greenhouse for my family's farm, leveraging 
            the power of IoT to create sustainable and efficient farming solutions. 
            I thrive on challenges and am always eager to learn and apply new skills. 
            Whether it's building intuitive web applications, exploring the intricacies of robotics, 
            or designing user-friendly interfaces.
            </p>
        </section>
    );
}

export default About;
