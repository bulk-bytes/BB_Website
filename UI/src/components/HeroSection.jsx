import React, { useState, useEffect } from 'react';
import './Component.css'; // Make sure you have the necessary CSS for the typing effect
import { Link } from 'react-router-dom';

const HeroSection = ({ title, description, path }) => {
  const [text, setText] = useState(""); // For the typing effect
  const [index, setIndex] = useState(0); // Index to track character
  const [isTyping, setIsTyping] = useState(true); // Flag to control typing
  const fullText = title;
  const typingSpeed = 120; // Speed of typing (ms)
  const pauseAfterTyping = 1000; // Pause before restart (ms)

  useEffect(() => {
    if (isTyping) {
      if (index < fullText.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout); // Cleanup timeout
      } else {
        // Pause after typing completes, then restart
        setIsTyping(false);
        setTimeout(() => {
          setText(""); // Clear text
          setIndex(0); // Reset index
          setIsTyping(true); // Restart typing
        }, pauseAfterTyping);
      }
    }
  }, [index, isTyping]);

  // Determine if the background is a video or an image
  const isVideo = path.match(/\.(mp4|webm|ogg)$/i);

  return (
    <section className="hero-section fade-in">
      <div className="hero-video-container">
        {isVideo ? (
          <video autoPlay muted loop className="hero-video">
            <source src={`./images/backgrounds/${path}`} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={`../images/backgrounds/${path}`} alt="Hero Background" className="hero-image" />
        )}
      </div>

      <div className="hero-content">
        <h1>
          {text}
          <span className="blinking-cursor">|</span>
        </h1>
        <p>{description}</p>
        <Link to='/contact'><button className="cta-button">Contact Us</button></Link>
      </div>
    </section>
  );
};

export default HeroSection;
