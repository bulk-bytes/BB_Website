import React, { useEffect, useState } from 'react';
import './Component.css'; // Import your CSS file for styling

const WhyChooseBulkByte = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [offices, setOffices] = useState(0);

  useEffect(() => {
    const countUp = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count++;
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 30); // Adjust the speed of incrementing
    };

    countUp(setYearsOfExperience, 10);
    countUp(setHappyClients, 170);
    countUp(setEmployees, 200);
    countUp(setOffices, 4);
  }, []);

  return (
    <section className="bulk-byte-section">


      <div className="bulk-byte-widget bulk-byte-image">
      </div>
    </section>
  );
};

export default WhyChooseBulkByte;