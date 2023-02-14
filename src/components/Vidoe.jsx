import React from 'react';
import styled from 'styled-components';
import video1 from "../Photos/video1.png"
import video2 from "../Photos/video2.png"

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { videoAnimation } from './../Animation';

function Vidoe() {

  const [element, controls] = UseScroll();

  return (
  <Section ref={element}>
    <div className="background">
        <img src={video1} alt="Design1" className='design1' />
        <img src={video2} alt="Design2" className='design2' />
      </div>
      <motion.div
        className="vidoe"
        variants={videoAnimation}
        animate={controls}
        transition={{delay: 0.03, type:"tween", duration: 0.8}}
      >
        <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/dNAw6rOXSd0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </motion.div>
  </Section>
  );
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .vidoe{
    z-index: 10;
  }
  .background {
    .design1 {
      position: absolute;
      left: 0;
      bottom: -8rem;
      width: 18rem;
    }
    .design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px){
    height:100%;
    padding: 6rem 2rem;
    .background{
      display: none;
    }
    .vidoe{
      iframe{
        width: 80vw;
        height: 10rem;

      }
    }
  }
`

export default Vidoe;
