import React from 'react';

export default function Platforms({ title, platforms }) {
  return (
    <section className="platforms-section">
      <div className="platforms-container">
        <div className="platforms-title">{'PLATFORMS WE ARE USED'}</div>
        <div className="platforms-imgs">
          {platforms.map((platform, index) => (
            <img
              key={index}
              src={`../images/platforms/${platform}.png`}
              alt={`${platform} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
