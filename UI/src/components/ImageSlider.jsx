import React from 'react';
import './Component.css'; // Import the CSS file for styling

const ImageSlider = () => {
  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <div className="image-slider-track">
        {[
            { src: '/images/slider/mdiclinic.webp', alt: 'Mediclinic' },
            { src: '/images/slider/millat.webp', alt: 'Millat' },
            { src: '/images/slider/redhanded.webp', alt: 'Redhanded' },
            { src: '/images/slider/kia.webp', alt: 'Kia' },
            { src: '/images/slider/innova.webp', alt: 'Innova' },
            { src: '/images/slider/accu-med.webp', alt: 'Accu Med' },
            { src: '/images/slider/liquid-logo.webp', alt: 'Liquid' },
            { src: '/images/slider/yodha.webp', alt: 'Yodha' },
            { src: '/images/slider/mobihealth.webp', alt: 'MHI' },
            { src: '/images/slider/hakeem-lg.webp', alt: 'IHakeem' },
            { src: '/images/slider/alfa.webp', alt: 'Alfac' },
            { src: '/images/slider/talk-psy.webp', alt: 'Talk Psy' },
            { src: '/images/slider/mdiclinic.webp', alt: 'Mediclinic' },
            { src: '/images/slider/millat.webp', alt: 'Millat' },
            { src: '/images/slider/redhanded.webp', alt: 'Redhanded' },
            { src: '/images/slider/kia.webp', alt: 'Kia' },
          ].map((image, index) => (
            <div className="image-slide" key={index}>
              <img decoding="async" src={image.src} width="200" height="auto" alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;