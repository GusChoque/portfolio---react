import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gustavo-choque/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/GusChoque" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/guty.choque/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials