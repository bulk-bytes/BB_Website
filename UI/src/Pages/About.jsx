import React from 'react';
import AboutHeader from '../components/about-components/AboutHeader';
import Story from '../components/about-components/Story';
import CoreValues from '../components/about-components/CoreValue';
import WhyChoose from '../components/about-components/WhyChoose';

const About = () => {
  return (
    <div className='fade-in'>
      <AboutHeader/>
      <Story/>
      <CoreValues/>
      <WhyChoose/>
    </div>
  );
};

export default About;
