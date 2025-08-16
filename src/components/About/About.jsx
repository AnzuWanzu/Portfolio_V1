import React from "react";
import "./about.css";
import aboutImage from "../../assets/Images/About.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="image-container">
        <img src={aboutImage} alt="About" className="about-image" />
      </div>

      <p>
        Hello! I'm Mary Angeline Samson, a 4th-year Computer Engineering student
        specializing in Low Code Web App Development at Mapua University. I
        recently wrapped up an amazing 9-month internship at Manulife IT
        Delivery Center Asia Inc. in Makati, where I dove deep into full-stack
        development. During my time there, I worked on 'Index 2.0' - an Azure
        AI-powered application that uses optical character recognition to
        streamline health insurance form processing. My experience spans across
        JavaScript, Python, React, and Azure Functions, with hands-on work in
        REST APIs and CI/CD pipelines. I've gotten comfortable with Agile/SCRUM
        methodologies and really enjoy the collaborative aspect of software
        development - from code reviews to stand-ups. When I'm not coding for
        work or school, I'm usually at home painting miniature figurines,
        playing weekly DnD sessions with friends, and tinkering with small
        Arduino projects.
      </p>
    </section>
  );
};

export default About;
