import React, { useState, useRef } from "react";
import "./AnimatedButton.css";

const AnimatedButton = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [buttonText, setButtonText] = useState("Download CV");
  const linkRef = useRef(null);

  const handleClick = () => {
    if (!isWorking) {
      setIsWorking(true);
      setButtonText("Downloading…");

      setTimeout(() => {
        setButtonText("Completed!");
        if (linkRef.current) {
          linkRef.current.click();
        }
      }, getMSFromProperty("--dur", ":root") * 0.9);

      setTimeout(() => {
        setIsWorking(false);
        setButtonText("Download CV");
      }, getMSFromProperty("--dur", ":root") + 1000);
    }
  };

  const getMSFromProperty = (property, selector) => {
    const cs = window.getComputedStyle(document.querySelector(selector));
    const transDur = cs.getPropertyValue(property);
    const msLabelPos = transDur.indexOf("ms");
    const sLabelPos = transDur.indexOf("s");

    if (msLabelPos > -1) return parseFloat(transDur.substr(0, msLabelPos));
    if (sLabelPos > -1) return parseFloat(transDur.substr(0, sLabelPos)) * 1000;
    return 0;
  };

  return (
    <>
      <button
        type="button"
        className={isWorking ? "dl-working" : ""}
        onClick={handleClick}
        data-dl
        disabled={isWorking}
      >
        <span className="dl-icon"></span>
        <span>{buttonText}</span>
      </button>
      <a
        ref={linkRef}
        href="/Resume-Samson2025 (HTML).pdf"
        download
        style={{ display: "none" }}
      >
        Download
      </a>
    </>
  );
};

export default AnimatedButton;
