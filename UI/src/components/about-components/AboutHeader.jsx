import React, { useEffect, useState } from "react";
import "./About.css";

const AboutHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component renders
    setIsVisible(true);
  }, []);

  return (
    <div className="about-header fade-in">
      <div className={`about-header-content ${isVisible ? "visible" : ""}`}>
        <h1>Bulk Bytes: Empowering Innovation Through Software Excellence</h1>
        <p>
          Bulk Bytes is a dynamic software house dedicated to providing
          cutting-edge digital solutions. Founded with a passion for innovation
          and technology, Bulk Bytes specializes in delivering top-notch
          services in web development, mobile app creation, backend systems,
          and custom software solutions.
        </p>
      </div>
      <img
        src="../images/backgrounds/about.png"
        alt="About Background"
        srcSet="
          ../images/backgrounds/about-small.png 600w,
          ../images/backgrounds/about.png 1200w
        "
        sizes="(max-width: 600px) 100vw, 50vw"
      />
    </div>
  );
};

export default AboutHeader;
