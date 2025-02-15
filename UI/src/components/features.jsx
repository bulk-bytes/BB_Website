import React from "react";
import "./Component.css";

const Features = ({featuresData,title}) => {
  return (
    <div className="features-container fade-in">
      <h2>{title}</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={`../images/icons/${feature.path}`} alt="" style={{width:"60px",marginBottom:"10px"}} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
