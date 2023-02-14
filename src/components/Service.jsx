import React from 'react';
import styled from "styled-components"
import service1 from '../Photos/service1.png'
import service2 from '../Photos/service2.png'
import service3 from '../Photos/service3.png'
import play from '../Photos/play.png'
import Title from './Title';

import {UseScroll} from './UseScroll';
import { motion } from 'framer-motion';
import { secvicesAnimation } from './../Animation';

function Service() {

  const [element, controls] = UseScroll();

  const data = [
    {
      type: "Design",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service1,
    },
    {
      type: "Code",
      text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
      image: service2,
    },
    {
      type: "Support",
      text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
      image: service3,
    }
  ]

  return (
    <Services 
      id='service'
      ref={element}
      >
      <Title value="services" />
      <div className="service">
        {data.map(({type, text, image}, index)=>{
          return(
            <motion.div
            className="all_services" 
            id={index} 
            variants={secvicesAnimation}
            transition={{delay: 0.03, duration: 0.8, type:"tween"}}
            animate={controls}
            >
              <div className="service_image">
                <img src={image} alt="service" />
              </div>
              <div className="service_title">
                <span>0{index+1}</span>
                <h2>{type}</h2>
              </div>
              <p className='service_description'>{text}</p>
              <img src={play} alt="" />
            </motion.div>
          )
        })} 
      </div>
    </Services>
  );
}

const Services = styled.section`
  min-height: 100vh;

  .service{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    align-items: center;
    margin: 10rem 14rem 0 14rem;
    gap: 5rem;
    .all_services{
      padding: 2rem;
      &:nth-of-type(3){
        background-color: var(--primary-color);

        .service_title{
          span{
            color: white;
          }
        }
        .service_description{
          color: white;
        }
      }
      .service_title{
          span{
            font-weight: bold;
            font-size: 1rem;
            color: var(--primary-color)
          }
          h2{
            font-size: 3rem;
            line-height: 2.5rem;
            margin-bottom: 3rem;
            color: var(--secondary-color);
          }
        }
        .service_description{
          margin-bottom: 1rem;
          font-size: 1rem;
          color: var(--primary-color);
        }
      .service_image{
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width : 280px) and (max-width: 1080px){
    .service{
      grid-template-columns: 1fr;
      margin: 2rem 0;
      gap: 2rem;
      padding: 0 2rem;
  }
`

export default Service;
