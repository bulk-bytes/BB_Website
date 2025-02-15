import React from "react";
import "./Component.css";

const Process = ({processSteps,title}) => {
  return (
    <div className="process-container fade-in">
      <h2>{title}</h2>
      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div key={index} className="process-card">
            <img src={`../images/icons/${step.path}`} alt="" style={{width:"60px",marginBottom:"10px"}} />
            <p className="step">{step.step}</p>
            <h3>{step.title}</h3>
            <p className="description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
