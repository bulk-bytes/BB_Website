import React from 'react';
import './Component.css';

const IndustryCards = () => {
    const cardData = [
        {
          title: 'Green Tech',
          description:
            'Reduce carbon emissions, optimize energy usage, and streamline the waste management process with the help of transformative custom AI solutions.',
          link: '/greentech/',
          image: '/images/industrycards/greentech.jpeg',
        },
        {
          title: 'IoT',
          description:
            'Transform industrial operations by developing revolutionary IoT solutions for real-time equipment monitoring and automated inventory management.',
          link: '/iot/',
          image: 'images/industrycards/iot.jpeg',
        },
        {
          title: 'Fin Tech',
          description:
            'Elevate your financial ventures by automating, scaling, and securing your business operations or launching the pioneering Fintech products quickly.',
          link: '/fintech/',
          image: 'images/industrycards/finetec.jpeg',
        },
        {
          title: 'Health Tech',
          description:
            'Transform healthcare by leveraging AI-driven technologies for personalized treatment, remote consultations, and data-driven predictive analytics.',
          link: '/healthtech/',
          image: 'images/industrycards/health.jpeg',
        },
        {
          title: 'Ed Tech',
          description:
            'Empower education systems with AI and digital solutions for personalized learning, virtual classrooms, and educational content delivery.',
          link: '/edtech/',
          image: 'images/industrycards/ed.jpeg',
        },
        {
          title: 'Retail ',
          description:
            'Optimize customer experiences, inventory management, and sales strategies by leveraging AI-driven solutions for retail businesses.',
          link: '/retailai/',
          image: 'images/industrycards/retail.jpeg',
        },
        {
          title: ' AI Diagnostic',
          description:
            'Improve diagnostic accuracy and healthcare outcomes by integrating AI solutions for predictive diagnostics and medical image analysis.',
          link: '/diagnostic/',
          image: 'images/industrycards/diagnostic.jpeg',
        },
        {
          title: 'HIPAA Compliance',
          description:
            'Ensure your healthcare business is fully compliant with HIPAA regulations through secure, AI-driven solutions that safeguard sensitive patient data.',
          link: '/hipaa-compliance/',
          image: 'images/industrycards/hipa.jpeg',
        },
      ];
      

  return (
    <div className="industry-cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="industry-card">
          <div className="industry-card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href='/' className="industry-card-button">
              <span className="button-text">Read More</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
          <img src={card.image} alt={card.title} className="industry-card-image" />
        </div>
      ))}
    </div>
  );
};

export default IndustryCards;
