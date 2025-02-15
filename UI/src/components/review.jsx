import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons
import './Component.css';

const reviews = [
  {
    name: 'John Doe',
    title: 'CEO, Example Company',
    text: '"This service is amazing. Highly recommend!"',
    image: './images/review/balor2.jpeg',
    rating: 5, // Added rating
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Manager, ABC Corp.',
    text: '"A great experience from start to finish."',
    image: './images/review/cena.jpeg',
    rating: 4, // Added rating
  },
  {
    name: 'Alice Johnson',
    title: 'Product Designer, XYZ Ltd.',
    text: '"Innovative and reliable. Will definitely use again."',
    image: './images/review/roman.jpeg',
    rating: 5, // Added rating
  },
  // Add more reviews here
];

const ReviewCarousel = ({ theme = 'light' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay functionality

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`review-carousel ${theme}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-live="polite" // Makes updates live for screen readers
    >
      <div className="carousel-container">
        {/* Left Arrow */}
        <button
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous review"
        >
          <FaChevronLeft size={30} />
        </button>

        {/* Carousel Slide */}
        <div className="carousel-slide">
          <div className="review-card">
            <div className="review-img-container">
              <img
                className="review-img lazy"
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                loading="lazy"
              />
            </div>
            <p className="review-name">{reviews[currentIndex].name}</p>
            <p className="review-title">{reviews[currentIndex].title}</p>
            <p className="review-text">
              <q>{reviews[currentIndex].text}</q>
            </p>
            <div className="review-rating">
              {Array.from({ length: reviews[currentIndex].rating }, (_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next review"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* Pagination */}
      <div className="carousel-pagination">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to review ${index + 1}`}
          ></span>
        ))}
      </div>

      {/* Current Slide Index */}
      <div className="carousel-index">
        <span>
          {currentIndex + 1} / {reviews.length}
        </span>
      </div>
    </div>
  );
};

export default ReviewCarousel;
