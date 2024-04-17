import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Welcome to ZeeCare, your comprehensive solution for hospital
            management. We're here to streamline and enhance every aspect of
            healthcare administration, ensuring efficiency, accuracy, and utmost
            care for both patients and staff.
            <br />
            <br />
            Join the ZeeCare family today and experience the difference in hospital management excellence. Your journey towards efficient, patient-centric care starts here.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
