import React from 'react';
import IMG1 from '../../assets/guti-sas.png';
import IMG2 from '../../assets/comming-soon.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'GUTI - ITSM',
      img: IMG1,
      description:
        'GUTI is an information technology service management solution, incident tracking system and service desk solution.',
      technologies: 'React | Redux | TypeScript | Django | Python',
      link: '#portfolio',
      github: '#portfolio',
    },
    {
      id: 2,
      title: 'Under Construction',
      img: IMG2,
      description:
        'Under Construction',
      technologies: 'Under Construction',
      link: '#portfolio',
      github: '#portfolio',
    },
    {
      id: 3,
      title: 'Under Construction',
      img: IMG2,
      description:
        'Under Construction',
      technologies: 'Under Construction',
      link: '#portfolio',
      github: '#portfolio',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
