import React from 'react';
import './Hero.css'; // Add styles for hero component

const Hero = ({ featuredMovie }) => {
  return (
    <div 
      className="hero" 
      style={{ backgroundImage: `url(/poster/bg1.jpg)` }} // Use url() for the image
    >
      <div className="hero-overlay">
        <h1>{featuredMovie.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
