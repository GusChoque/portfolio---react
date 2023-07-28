import React from 'react';
import CV from '../../assets/CV_Gustavo_Choque_-_EN.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="CV Gustavo Choque - EN" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
