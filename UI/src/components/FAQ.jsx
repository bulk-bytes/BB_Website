import React from 'react';
import './Component.css';

const FAQ = ({faqs}) => {
  

  return (
    <div id="faqs" className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">{faq.question}</summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
