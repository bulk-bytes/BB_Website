import React from 'react';
import { FaLightbulb, FaLaptopCode, FaHandshake, FaRocket } from 'react-icons/fa';
import './About.css';

export default function Story() {
  return (
    <div className="story-section">
      <h1 className="story-title">Discover Our Story</h1>
      <div className="story-content">
        <div className="story-card">
          <FaLightbulb className="story-icon" />
          <h2>Visionary Solutions</h2>
          <p>
            Bulk Bytes is dedicated to delivering innovative digital solutions
            and empowering businesses to thrive in today’s fast-paced world.
          </p>
        </div>
        <div className="story-card">
          <FaLaptopCode className="story-icon" />
          <h2>Our Journey</h2>
          <p>
            Our story began with passionate developers solving real-world
            problems using modern tools, creating user-friendly and scalable systems.
          </p>
        </div>
        <div className="story-card">
          <FaHandshake className="story-icon" />
          <h2>Partnerships</h2>
          <p>
            We collaborate with businesses of all sizes, from startups to
            enterprises, and serve industries ranging from e-commerce to healthcare.
          </p>
        </div>
        <div className="story-card">
          <FaRocket className="story-icon" />
          <h2>Your Success</h2>
          <p>
            Partner with us to unlock your potential. Let Bulk Bytes help you
            write the next chapter of your success story with technology.
          </p>
        </div>
      </div>
    </div>
  );
}
