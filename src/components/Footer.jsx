import React from 'react';
import styled from 'styled-components';
import {BsFacebook, BsGithub, BsYoutube, BsLinkedin} from "react-icons/bs"

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { footerTextAnimations, footerLogoAnimations } from './../Animation';

function Footer() {

  const [element, controls] = UseScroll();

  return (
  <Foot ref={element}>
    <motion.span
      variants={footerTextAnimations}
      animate={controls}
      transition={{delay: 0.03, type:"tween", duration: 0.8}}
    >&copy; developed by Mohamed Arab</motion.span>
    <motion.div
      className="footre_social_icons"
      variants={footerLogoAnimations}
      animate={controls}
      transition={{delay: 0.03, type:"tween", duration: 0.8}}
      >
      <BsFacebook />
      <BsGithub />
      <BsYoutube />
      <BsLinkedin />
    </motion.div>
  </Foot>
  );
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;

  .footre_social_icons{
    display: flex;
    gap: 2rem;
    svg{
      font-size: 1.5rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;

      &:hover{
        color: var(--secondary-color);
      }
    }
  }

@media screen and (min-width: 280px) and (max-width: 1080px){
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
`
export default Footer;
