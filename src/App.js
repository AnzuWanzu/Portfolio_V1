import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';
import Certifications from './components/Certificates/Certifications';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
