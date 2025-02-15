import React, { useState, useEffect } from 'react';
import './Component.css'; // Ensure this imports the CSS file
// import backgroundImage from './background.jpeg'; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Store the active tab index
const tabData = [
  {
    title: "Web Design",
    description: "Create beautiful and functional websites that work on any device.",
    services: [
      "Responsive layouts",
      "User-centered design",
      "SEO optimization",
      "UX/UI testing"
    ],
    image:"./images/tabs/design.jpeg"
  },
  {
    title: "Web Development",
    description: "Develop powerful websites using modern technologies.",
    services: [
      "Frontend & backend development",
      "API integration",
      "Database management",
      "Web application development"
    ],
    image:"./images/tabs/development.jpeg"
  },
  {
    title: "App Development",
    description: "Build mobile applications for iOS and Android devices.",
    services: [
      "Cross-platform development",
      "App design and wireframes",
      "Push notifications",
      "App store optimization"
    ],
    image:"./images/tabs/app.jpeg"
  },
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs, including model training and deployment.",
    services: [
      "Model training",
      "Data analysis",
      "AI solution integration"
    ],
    image:"./images/tabs/ai.jpeg"
  },
  {
    title: "UI/UX",
    description: "Enhance user experience with intuitive and engaging UI/UX designs.",
    services: [
      "User research",
      "Wireframing & prototyping",
      "Visual design"
    ],
    image:"./images/tabs/ux.jpeg"
  }
]; 

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTab((prevTab) => (prevTab + 1) % tabData.length);
  }, 4000);

  return () => clearInterval(interval);
}, [tabData.length]);

return (
  <div className="htmega-tab-area">
    <div className="htmega-tab-content-area">
      {tabData.map((tab, index) => (
        <div
          key={index}
          className={`htmega-single-tab ${activeTab === index ? 'active' : ''}`}
        >
          <div className="tab-content">
            {tab.image && (
              <img src={tab.image} alt={`${tab.title} image`} className="service-image" />
            )}
            <div className="tab-text">
              <h2 className="tab-title">{tab.title}</h2>
              <p className="tab-description">{tab.description}</p>
              <ul className="services">
                {tab.services.map((service, idx) => (
                  <li key={idx}>
                    <strong>{service}</strong>
                  </li>
                ))}
              </ul>
              <div className="services-btn">
                <a href="#" className="read-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tab Navigation (Dot Indicators) */}
    <div className="htmega-tab-nav">
      {tabData.map((_, index) => (
        <div
          key={index}
          className={`tab-link ${activeTab === index ? 'htb-active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {tabData[index].title}
        </div>
      ))}
    </div>
  </div>
);
};

export default Tabs;

