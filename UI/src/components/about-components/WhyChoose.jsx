import React from 'react';
import { FaCheckCircle, FaIndustry, FaUsersCog, FaGlobe, FaClock, FaDollarSign } from 'react-icons/fa';
import './About.css';

export default function WhyChoose() {
  return (
    <div className="why-choose-section">
      <h1 className="why-choose-title">Why Choose Bulk Bytes</h1>
      <p className="why-choose-intro">
        Discover what sets Bulk Bytes apart and why we’re the trusted choice for delivering cutting-edge software solutions.
      </p>
      <div className="why-choose-content">
        <div className="why-choose-card">
          <FaCheckCircle className="why-choose-icon" />
          <h2>Proven Track Record</h2>
          <p>
            Our team is committed to going above and beyond your expectations, ensuring complete satisfaction with our services.
          </p>
        </div>
        <div className="why-choose-card">
          <FaIndustry className="why-choose-icon" />
          <h2>Industry-Specific Expertise</h2>
          <p>
            We efficiently deliver outstanding results by understanding the specific standards and requirements of your industry.
          </p>
        </div>
        <div className="why-choose-card">
          <FaUsersCog className="why-choose-icon" />
          <h2>Skilled Staff</h2>
          <p>
            At Bulk Bytes, our team of specialists combines deep expertise, innovative ideas, and a strong determination to achieve success.
          </p>
        </div>
        <div className="why-choose-card">
          <FaGlobe className="why-choose-icon" />
          <h2>Global Expansion</h2>
          <p>
            We have a global presence across the UK, USA, and UAE, enabling us to provide excellence with agility and promptness.
          </p>
        </div>
        <div className="why-choose-card">
          <FaClock className="why-choose-icon" />
          <h2>On-Time Delivery</h2>
          <p>
            Our teams are committed to delivering products and services within the specified timeframe, without compromising on quality.
          </p>
        </div>
        <div className="why-choose-card">
          <FaDollarSign className="why-choose-icon" />
          <h2>Premium Value</h2>
          <p>
            Our flexible hiring models, including dedicated teams, fixed-price projects, and hourly rates, offer premium value to our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
