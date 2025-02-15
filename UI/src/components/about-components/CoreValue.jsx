import React from 'react';
import { FaUsers, FaHandshake, FaShieldAlt, FaTasks, FaLightbulb } from 'react-icons/fa';
import './About.css';

export default function CoreValues() {
  return (
    <div className="core-values-section">
      <h1 className="core-values-title">Core Values that Drive Our Brand Forward</h1>
      <p className="core-values-intro">
        Our values serve as a guiding force for the company’s actions, decisions, and interactions.
      </p>
      <div className="core-values-content">
        <div className="core-value-card">
          <FaUsers className="core-value-icon" />
          <h2>Client Value</h2>
          <p>
            We strive to exceed our clients' expectations and deliver measurable results that positively impact their business.
          </p>
        </div>
        <div className="core-value-card">
          <FaHandshake className="core-value-icon" />
          <h2>People Driven</h2>
          <p>
            As a people-driven company, we prioritize the needs and well-being of our employees, customers, and communities.
          </p>
        </div>
        <div className="core-value-card">
          <FaShieldAlt className="core-value-icon" />
          <h2>Integrity</h2>
          <p>
            We place a high value on honesty, transparency, and ethical behavior, maintaining a high level of trust with our stakeholders.
          </p>
        </div>
        <div className="core-value-card">
          <FaTasks className="core-value-icon" />
          <h2>Accountability</h2>
          <p>
            We value taking responsibility for our actions and outcomes, holding ourselves and our employees accountable for our performance.
          </p>
        </div>
        <div className="core-value-card">
          <FaLightbulb className="core-value-icon" />
          <h2>Collaboration</h2>
          <p>
            Collaboration fuels innovation and progress by bringing together diverse backgrounds and skill sets toward a common goal.
          </p>
        </div>
      </div>
    </div>
  );
}
