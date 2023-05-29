import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Home</a>
      <ul className="permalinks">
        {/* <li><a href="#home">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/gustavo-choque/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/GusChoque" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/guty.choque/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small className="footer__end">Thank you! Come visit again. ♥</small>
        <small className="footer__end">&copy; {getYear()}.</small>
      </div>
    </footer>
  )
}

export default Footer
