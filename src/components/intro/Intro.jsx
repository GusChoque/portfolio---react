import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/otro.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>React and Django Projects</small>
            </article>
          </div>
          <p>I’ve spent the last several months in a remote environment, working with HTML, CSS, and JavaScript, building everything from landing pages to APIs. In addition, I have developed expertise in REST API integration, utilizing frameworks such as React, Django, and TailwindCSS to create dynamic and responsive web applications. My proficiency in Python, Typescript, SQL, Material UI, and other essential programming tools enables me to deliver robust and efficient solutions for various projects.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro