import React from 'react';
import Title from './Title';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { contactDescriptionAnimation, contactFormAnimation } from './../Animation';

function Contact() {

  const [element, controls] = UseScroll();

  return (
  <Section id='contact' ref={element}>
    <Title value="contact" />
    <div className="contact">
      <div className="contact_title">
        <p>Stay in touch with us</p>
        <h2>Contacto ipsam donec setem quia lipsum</h2>
      </div>
      <div className="contact_data">
          <motion.div
          className="contact_data_description"
          variants={contactDescriptionAnimation}
          animate={controls}
          transition={{delay: 0.03, type:"tween", duration: 0.8}}
          >
            <h4>Use from to contact us or just to say hi!</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              nulla?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod
              molestias animi, ad quibusdam et accusantium nisi architecto at
              vitae
            </p>
            <div>
              <p>
                <strong>Address:</strong> El-giza,Egypt
              </p>
              <p>
                <strong>Email:</strong> marab2411@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.yourwebsite.com
              </p>
            </div>
          </motion.div>
          <motion.div
            className="contact_data_form"
            variants={contactFormAnimation}
            animate={controls}
            transition={{delay: 0.03, type:"tween", duration: 0.8}}
            >
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </motion.div>
        </div>
    </div>
  </Section>
);
}

const Section = styled.section`
  min-height: 100vh;
  .contact{
    color: var(--primary-color);
    margin: 0 23rem;
    
    &_title{
      margin: 6rem 0;
      P{
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }
      h2{
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &_data{
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;

      &_description{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h4{
          font-size: 1.5rem;
        }
        p{
          letter-spacing: 0.1rem;
          text-align: justify;

          strong{
            text-transform: uppercase;
          }
        }
        
      }
      &_form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        input,textarea{
          text-transform: uppercase;
          border:none;
          border-bottom: 0.1rem solid var(--secondary-color);
          padding-bottom: 0.7rem;
          width: 100%;
          letter-spacing: 0.2rem;

          &:focus{
            outline :none;
          }
          &::placeholder{
            color: var(--secondary-color);
            letter-spacing: 0.4rem;
          }
        }
        textarea{
          height:50%;
          resize: none;
        }
        button{
          width: 100%;
          background: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          transition: 0.5s ease-in-out;
          cursor: pointer;
          &:hover{
            color: white;
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }

@media screen and (min-width: 280px) and (max-width: 1080px){
  .contact{
    margin: 1rem;
    &_title{
      padding: 0 2rem;
      text-align: center;
      p{
        font-size: 0.8rem;
      }
      h2{
        font-size: 1.3rem;
      }
    }
    &_data{
      grid-template-columns: 1fr;
      margin: 0;
      p{
        text-align: left;
        /**do not forget to handel the text */
      }
      &_form{
        button{
          height: 6rem;
        }
      }
    }
  }
}
`
export default Contact;
