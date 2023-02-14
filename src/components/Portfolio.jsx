import React from 'react';
import styled from 'styled-components';
import placeholder from '../Photos/placeholder.png';
import portfolio1 from '../Photos/portfolio1.png';
import portfolio2 from '../Photos/portfolio2.png';
import loadmore from '../Photos/loadmore.png';
import Title from './Title';

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { portfolioAnimation } from './../Animation';

function Portfolio() {

  const [element, controls] = UseScroll();

  return (
    <Section id='portfolio' ref={element}>
      <Title value="portfolio" />
      <div className="background">
        <img src={portfolio1} alt="Design1" className='design1' />
        <img src={portfolio2} alt="Design2" className='design2' />
      </div>
      <div className="portfolio_title">
        <p>our works</p>
        <h2>Check our super awesome portfolio</h2>
      </div>
      <div className="grid">
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-one grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-two grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-three grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-four grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-five grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-six grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-seven grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
        <motion.div variants={portfolioAnimation} animate={controls} transition={{delay: 0.03, type: "tween", duration: 0.8}} className="child-eight grid_box">
          <img src={placeholder} alt="placholder" />
        </motion.div>
      </div>
      <div className="loadmore">
          <span>Load More</span>
          <img src={loadmore} alt="load more" />
        </div>
    </Section>
    );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);

  .background {
    position: relative;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }

  .side_title{
    z-index: 2;
    h1{
      color: white;
    }
  }

  .portfolio_title{
    margin: 6rem 15rem;
    p{
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem; 
    }
    h2{
      color: white;
      font-size: 2rem;
    }
  }

  .grid{
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";

    .grid_box{
      height: 15rem;
      width: 100%;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        transition: 0.4s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }

      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        background-color: #8860e66a;
        z-index: 10;
      }
      &:nth-of-type(2) {
        z-index: 10;
        grid-area: two;
        background-color: #662d91ca;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background-color: #8860e6b0;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background-color: #8860e6b0;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        background-color: #662d91ca;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background-color: #8860e66a;
        height: 100%;
      }
      &:nth-of-type(8) {
        z-index: 10;
        grid-area: eight;
      }
    }
  }

.loadmore{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 4rem 0;

  span{
    color: white;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  img{
    cursor: pointer;
  }
}

@media screen and (min-width: 280px) and (max-width: 1080px){
  .background{
    display: none;
  }
  .portfolio_title{
    margin: 0;
    padding: 0 2rem;
    text-align: center;

    h2{
      font-size: 1.5rem;
    }
  }
  .grid{
    padding: 2rem 4rem;
    grid-template-columns: 1fr;
    grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight";
    
    .grid_box{
      height: 10rem !important;
    }
  }
}
`

export default Portfolio;
