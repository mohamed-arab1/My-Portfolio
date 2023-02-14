import React, {useState} from 'react';
import styled from 'styled-components';
import placeholder from "../Photos/placeholder.png";
import testimonial1 from "../Photos/testimonial1.png";
import testimonial2 from "../Photos/testimonial2.png";

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { testimonialsAnimation } from './../Animation';

function Testimonial() {

  const [element, controls] = UseScroll();
  const [selected, setSelected] = useState(0);
  const testimonialData = [
    {
      designation: "Designer",
      name: "Marry Underwood",
      review:
        "Decided every couldn't a implemented the suspicion I the voices in blind solider, the project into taken is issued to assistant object anyone quitting social think, population accordingly of this from but his room uniforms yourself a if were english turner. Back yes, lady here.",
    },
    {
      designation: "Developer",
      name: "Richard Gates",
      review:
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      designation: "Planner",
      name: "Selene Olivera",
      review:
        "also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
  ];

  return (
  <Section ref={element}>
    <div className="background">
      <img src={testimonial1} alt="background design" className="design1" />
      <img src={testimonial2} alt="background design" className="design2" />
    </div>
    <div className="container">
      <div className="testimonials">
        {
          testimonialData.map(({designation, name, review}, index) =>{
            return(
              <motion.div
              className={`testimonial ${
                selected === index ? "active" : "hidden"
                }`}
                key={index}
                variants={testimonialsAnimation}
                animate={controls}
                transition={{delay: 0.03, type:"tween", duration: 0.8}}
                >
                  <div className="image">
                    <div className="circle1"></div>
                    <div className="circle2">
                      <img src={placeholder} alt="placeholder" />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">{designation}</span>
                    <div className="neme">{name}</div>
                  </div>
                  <p className="reviwe">{review}</p>
              </motion.div> 
            )
          })
        }
      </div>
      <div className="controls">
        <button 
        className={selected === 0 ? "active" : ""} 
        onClick={()=> setSelected(0)}>
        </button>
        <button 
        className={selected === 1 ? "active" : ""} 
        onClick={()=> setSelected(1)}
        ></button>
        <button
        className={selected === 2 ? "active" : ""} 
        onClick={()=> setSelected(2)}
        ></button>
      </div>
    </div>
  </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .background{
    position: relative;
    .design1{
      position: absolute;
      height: 35rem;
      left: 0;
      top: 5rem;
    }
    .design2{
      position: absolute;
      right: 0;
    }
  }
  .container{
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: white;

    .testimonials{
      display: flex;
      gap: 1rem;
      z-index: 2;
      text-align: center;
      justify-content: center;
      width: 30%;

      .testimonial{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .image{
          position: relative;
          .circle1{
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            width: 10rem;
            height: 10rem;
            border: .2rem solid white;
            border-radius: 50%;
          }
          .circle2{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10rem;
            height: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }
      .hidden{
          display: none;
        }
    }
    .title-container{
      .designation{
        color: var(--secondary-color)
      }
    }
    .reviwe{
        height: 8rem;
      }
    .controls{
      display: flex;
      gap: 1rem;

      button{
        padding: 0.5rem;
        border-radius: 50%;
        border: 0.1rem solid transparent;
        background-color: var(--secondary-color);
        cursor: pointer;
      }
      .active{
        background-color: transparent;
        border-color: var(--secondary-color);4
      }
    }
    
  }

@media screen and (min-width: 280px) and (max-width: 1080px){
  .background{
    display: none;
  }
  .container{
    padding: 4rem 0;
    .testimonials{
      width: 80%;
      .testimonial{
        .reviwe{
          height: 13rem;
        }
      }
    }
  }
}
`

export default Testimonial;
