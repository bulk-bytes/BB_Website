import React from "react";
const Services = ({servicesData,title}) => {
  return (
    <div className="services-container">
      <h2 className="services-title">{title}</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={`../images/icons/${service.path}`} alt=""  style={{width:"60px"}} />
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
