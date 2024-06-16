import React from 'react';
import './projects.css';
import projectImage1 from '../../assets/Images/Projects/1.png';
import projectImage2 from '../../assets/Images/Projects/2.png';
import projectImage3 from '../../assets/Images/Projects/3.png';
import { DiReact, DiPython, DiJsBadge, DiGit } from 'react-icons/di';
import { FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiFastapi } from "react-icons/si";

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src={projectImage1} alt="Project" className="project-image" />
                    <h3>Obsidian</h3>
                    <p>Obsidian is a specialized productivity app designed to enhance student efficiency and organization. It features a comprehensive todo list where users can manage tasks and assignments seamlessly, prioritize deadlines, and maintain a structured workflow.</p>
                    <div className="tags">
                        <span className="tag react"><DiReact /> React</span>
                        <span className="tag nodejs"><FaNodeJs /> Node.js</span>
                        <span className="tag javascript"><DiJsBadge /> JavaScript</span>
                    </div>
                </div>
                <div className="project-card">
                    <img src={projectImage2} alt="Project" className="project-image" />
                    <h3>BotaniBud</h3>
                    <p>BotaniBud is a beautifully crafted mockup design of a plant-care app created using Figma. It offers plant enthusiasts a user-friendly interface to manage their botanical treasures with ease. The app provides features such as plant care reminders, watering schedules, and detailed plant profiles with essential care information.</p>
                    <div className="tags">
                        <span className="tag figma"><FaFigma /> Figma</span>
                    </div>
                </div>
                <div className="project-card">
                    <img src={projectImage3} alt="Project" className="project-image" />
                    <h3>SKIDD</h3>
                    <p>SKIDD is an advanced Skin Disease Detection App designed to identify various skin conditions through image classification using cutting-edge algorithms like CNN, ResNet, YOLO, and NLP. Leveraging FastAPI as its robust backend framework, SKIDD allows users to upload images of skin anomalies for real-time analysis and diagnosis.</p>
                    <div className="tags">
                        <span className="tag python"><DiPython /> Python</span>
                        <span className="tag react"><DiReact /> React</span>
                        <span className="tag fastapi"><SiFastapi /> FastApi</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
