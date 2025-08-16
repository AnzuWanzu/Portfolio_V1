import React from "react";
import "./skills.css";
import { SiArduino } from "react-icons/si";
import { DiCss3, DiReact, DiPython, DiJsBadge, DiGit } from "react-icons/di";
import { FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { LuCircuitBoard } from "react-icons/lu";
import { PiFileCpp } from "react-icons/pi";

const Skills = () => {
  const iconSize = 40;
  return (
    <section id="skills">
      <h2>Tech Stacks</h2>
      <ul>
        <li>
          <DiJsBadge size={iconSize} /> JavaScript
        </li>
        <li>
          <FaHtml5 size={iconSize} /> HTML
        </li>
        <li>
          <DiCss3 size={iconSize} /> CSS
        </li>
        <li>
          <DiReact size={iconSize} /> React
        </li>
        <li>
          <FaNodeJs size={iconSize} /> Node.js
        </li>
        <li>
          <DiPython size={iconSize} /> Python
        </li>
        <li>
          <FaJava size={iconSize} /> Java
        </li>
        <li>
          <DiGit size={iconSize} /> Git
        </li>
        <li>
          <SiArduino size={iconSize} /> Arduino
        </li>
        <li>
          <LuCircuitBoard size={iconSize} /> PCB Design
        </li>
      </ul>
    </section>
  );
};

export default Skills;
