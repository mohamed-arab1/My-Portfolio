import React from 'react';
import { motion } from 'framer-motion';
import {homeAnimations, homeInfoAnimations} from "../Animation"

import home from "../Photos/home.png"
import play from '../Photos/play.png'
import styled from "styled-components"
import Navbar from './Navbar';

function Home() {
  return (
    <Section id='home'>
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimations}
        transition={{delay:0.3, duration:0.5, type:"tween"}}
      >
        <div className="content">
          <div className="title">
            <h1>web development</h1>
          </div>
          <div className="subTitle">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur iure nobis nemo. Modi cupiditate velit quis pariatur, optio sed animi sint</p>
          </div>
          <img src={play} alt="" />
        </div>
      </motion.div>
      <motion.div
      className="info"
      variants={homeInfoAnimations}
      transition={{delay:0.3, duration:0.5, type:"tween"}}
      >
        <div className="grid">
          <div className="col">
            <strong>WEB DEVELOPMENT</strong>
            <p>Front End Developer</p>
          </div>
          <div className="col">
            <strong>EMAIL</strong>
            <p>marab2411@gmail.com</p>
          </div>
          <div className="col">
            <strong>MOBILE</strong>
            <p>+20 1099444563</p>
          </div>
          <div className="col">
            <strong>ADDRESS</strong>
            <p>EL-GIZA ,EGYPT</p>
          </div>
          <div className="col">
            <strong>SERVICES</strong>
            <p>Full Coding</p>
          </div>
          <div className="col">
            <strong>WORKING HOURS</strong>
            <p>Monday To Friday</p>
            <p>08:00 am To 18:00 pm</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .home{
    height: 100%;
    
    .content{
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 18rem;
      width: 65%;
      gap: 1.2rem;
      margin-top: 8rem;

      .title{
        h1{
          font-size: 4.7rem;
          line-height: 5.2rem;
        }
      }
      .subTitle{
        p{
          font-size: 1.3rem;
          margin-bottom: 1.75rem;
          width: 70%
        }
      }
    }
  }
  .info{
      position: absolute;
      bottom: -6rem;
      right: 0;
      background-color: var(--secondary-color);
      color: white;
      padding: 4rem;
      .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
      }
    }

@media screen and (min-width : 280px) and (max-width: 1080px){
  .home{
    .content{
      padding-left: 2rem;
      width: 100%;
      margin-bottom: 2rem;

      .title{
        h1{
          font-size: 3rem;
          line-height:3.5rem;
        }
      }
    }
  }
  .info{
    position: initial;
    .grid{
      grid-template-columns: 1fr;
    }
  }
}
`

export default Home;
