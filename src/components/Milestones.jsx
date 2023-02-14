/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import milestone1 from "../Photos/milestone1.png";
import milestone2 from "../Photos/milestone2.png";
import milestone3 from "../Photos/milestone3.png";
import milstoneBackground from "../Photos/milestone-background.png";

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { milstonesAnimation } from './../Animation';

function Milestones() {

  const [element, controls] = UseScroll();

  const milstone = [
    {
      image: milestone1,
      data: "clinets served",
      amount: "407"
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: "10T"
    },
    {
      image: milestone3,
      data: "recommendation",
      amount: "235"
    }
  ]

  return (
  <Section id='milestones' ref={element}>
    <div className="background">
      <img src={milstoneBackground} alt="milstones background" />
    </div>
    <div className="milstones">
      {
        milstone.map(({image, data, amount}, index) => {
          return(
            <motion.div 
              className="milstone" id={index}
              variants={milstonesAnimation}
              animate={controls}
              transition={{delay: 0.03, type:"tween", duration: 0.8}}
            >
              <p>{amount}</p>
              <span>{data}</span>
              <img src={image} alt="milstone photo" />
            </motion.div>
          )
        })
      }
    </div>
  </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
  padding-left: 10rem;
  .background{
    position: absolute;
    left: 0;
    bottom: -30%;

    img{
      height: 43rem;
      z-index: 2;
    }
  }
  .milstones{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milstone{
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      p{
        font-size: 5rem;
        font-weight: bold;
        line-height: 3rem;
      }
      span{
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img{
        height: 6rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px){
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background{
      display:none;
    }
    .milstones{
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`
export default Milestones;
