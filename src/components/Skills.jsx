import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import skills1 from "../Photos/skills1.png"
import skills2 from "../Photos/skills2.png"

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { skillsAnimation } from './../Animation';

function Skills() {

  const [element, controls] = UseScroll();

  const skillsData = [
    {
      name: "creativity",
      amount: 75,
    },
    {
      name: "coding",
      amount: 80,
    },
    {
      name: "react",
      amount: 90,
    },
    {
      name: "marketing",
      amount: 70,
    },
    {
      name: "design",
      amount: 30,
    }
  ]

  return (
  <Section id='skills' ref={element}>
    <Title value="skills" />
    <div className="background">
      <img src={skills1} alt="background" className="skill1" />
      <img src={skills2} alt="background" className="skill2" />
    </div>
    <div className="skill_title">
      <p>Our Skills</p>
      <h2>Check our super awesome skills</h2>
    </div>
    <div className="skills">
      <div className="skills_bars">
        {
          skillsData.map(({name, amount}) =>{
            return(
              <motion.div
                className="skills_bars_bar" kay={name}
                variants={skillsAnimation}
                animate={controls}
                transition={{delay: 0.03, type:"tween", duration: 0.8}}
              >
                <div className="container">
                  <progress value={amount} max="100" />
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
              </motion.div>
            )
          })
        }
      </div>
      <div className="skills_content">
        <p className="title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptatem, totam illum rem iure nisi sequi consectetur magnam alias explicabo accusamus, commodi quae voluptates deleniti?
        </div>
      </div>
    </div>
  </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--secondary-color);
  height: 140vh;
  .background{
    position: relative;
    
    .skill1{
      position: absolute;
      right: 0;
      z-index: 1;
    }
    .skill2{
      position: absolute;
      left: 0;
      top: 20rem;
      z-index: 1;
    }
  }
  .side_title{
    h1{
      z-index: 2;
      color: white;
      font-size: 9rem;
    }
  }
  .skill_title{
    padding: 6rem 10rem;
    p{
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2{
      color: white;
      font-size: 2rem;
    }
  }
  .skills{
    display:flex;
    padding: 0 20rem;
    gap: 10rem;

    &_bars{
      transform: rotate(-90deg);
      width: max-content:
      height: max-content:
      display: flex;
      flex-direction: column;
      z-index: 3;
      gap: 4rem;
      &_bar{
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        .container{
          display: flex;
          flex-direction: column;
          gap: 4rem;
          
          span{
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress{
            width: 30rem;
            appearance: none;

            &::-webkit-progress-bar{
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value{
              background-color: var(--primary-color);
            }
          }
        }
        h3{
          transform: rotate(90deg);
          color: white;
          font-size: 2rem;
          padding-right: 2rem;
        }
      }
    }
    .skills_content{
      display:flex;
      flex-direction: column;
      gap: 2.5rem;
      color: white;
      z-index: 3;
      .title{
        font-weight: bold;
        letter-spacing: 0.1rem;
      }
    }
  }

@media screen and (min-width: 280px) and (max-width: 1080px){
  overflow-x: hidden;
  padding: 2rem 0;
  height: max-content;
  .background{
    display: none;
  }
  .skill_title{
    padding: 2rem;
    text-align: center;
    h2{
      font-size: 1.5rem;
    }
  }
  .skills{
      padding: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      &_bars{
        padding: 0.2rem;
        gap: 0;
        justify-content: center;
        align-items: center;

        &_bar{
          .container{
            gap: 1rem;
            progress{
              width: 12rem;
              height: 0.5rem;

              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3{
            font-size: 1rem;
          }
        }

      }
      &_content{
        padding: 0 2rem;
      }
    }
`

export default Skills;
