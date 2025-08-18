import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import { CSSTransition } from "react-transition-group";
import "@dotlottie/player-component/dist/dotlottie-player.mjs"; // Ensure correct path
import TextType from "../../assets/styles/TextType";

const Home = () => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      nodeRef={nodeRef}
    >
      <section id="home" ref={nodeRef}>
        <div className="home-header">
          <h1>
            Hello, I'm <span className="highlight">Angie</span>
          </h1>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Alien%20Monster.webp"
            alt="Alien Monster"
            width="90"
            height="90"
            className="circular-image"
          />
        </div>

        <div className="home-content">
          <p>
            I’m a Computer Engineering student with a keen interest in web app
            development, UI/UX design, robotics, and machine learning. This
            portfolio showcases some of my works, skills, and creativity.
            Explore my projects, get to know my process, and see how I can bring
            value to your next big idea :)
          </p>
        </div>

        <h4 style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <CiLocationOn
            style={{
              fontSize: "30px",
              verticalAlign: "middle",
              marginRight: "5px",
              color: "white",
            }}
          />
          Manila, Philippines
        </h4>

        <div className="home-icons">
          <a
            href="https://github.com/AngieS-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mary-angeline-samson-15728b210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>

        <div className="animation-container">
          <dotlottie-player
            src="https://lottie.host/d8577849-ba13-49ec-9593-42664bdbdc1a/rYqq90A2TC.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", maxWidth: "250px", height: "auto" }} // Adjusted width and added maxWidth
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Home;
