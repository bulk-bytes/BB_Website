import React from 'react';
import './Component.css';
<a href="https://www.flaticon.com/free-icons/overview" title="overview icons">Overview icons created by Afian Rochmah Afif - Flaticon</a>
const MethodologyStep = ({ stepNumber, title, description, imageUrl, stepIconUrl }) => (
  <div className="methodology-step">
    <div className="methodology-step__icon">
      <img decoding="async" width="70" height="70" src={stepIconUrl} alt={`Step ${stepNumber} icon`} />
    </div>
    <div className="methodology-step__number">
      <div>{`Step ${stepNumber}`}</div>
    </div>
    <div className="methodology-step__title">
      <h2>{title}</h2>
    </div>
    <div className="methodology-step__description">
      <p>{description}</p>
    </div>
  </div>
);

const BulkbyteMethodology = () => {
  return (
    <div className="methodology-container">
      <div className="methodology-heading">
        <h2>Our Proven Bulkbyte Methodology: Steps to Achieve Success</h2>
      </div>
      <div className="methodology-description">
        <p>
          Our Bulkbyte Methodology is a proven approach for success, guiding each step carefully to ensure that no details are overlooked.
        </p>
      </div>

      <section className="methodology-steps">
        <div className="methodology-steps__container">
          <MethodologyStep
            stepNumber={1}
            title="Initial Analysis"
            description="Our first step is to deeply analyze the business context, challenges, and objectives. This analysis sets the stage for the entire process."
            stepIconUrl="./images/methodologysteps/disclosure.png"
          />
          <MethodologyStep
            stepNumber={2}
            title="Strategy Formulation"
            description="We craft a personalized strategy that aligns with the business goals, ensuring that all elements of the solution will work in harmony."
            stepIconUrl="./images/methodologysteps/planning.png"
          />
          <MethodologyStep
            stepNumber={3}
            title="Design and Prototyping"
            description="Based on the formulated strategy, we design and prototype the solution to ensure we meet the requirements before implementation."
            stepIconUrl="./images/methodologysteps/prototype.png"
          />
          <MethodologyStep
            stepNumber={4}
            title="Development and Integration"
            description="Our development phase focuses on building the solution while integrating it with existing systems, ensuring seamless functionality."

            stepIconUrl="./images/methodologysteps/api.png"
          />
          <MethodologyStep
            stepNumber={5}
            title="Testing and Deployment"
            description="We thoroughly test the solution to ensure reliability, before deploying it in a live environment for real-world usage."

            stepIconUrl="./images/methodologysteps/integration.png"
          />
          <MethodologyStep
            stepNumber={6}
            title="Continuous Monitoring"
            description="After deployment, we monitor the solution's performance and address any issues, ensuring optimal functionality over time."
            stepIconUrl="./images/methodologysteps/data-analysis.png"
          />
        </div>
      </section>
    </div>
  );
};
export default BulkbyteMethodology;
