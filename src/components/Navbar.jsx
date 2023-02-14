/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from 'react';
import styled from 'styled-components';
import logo from "../Photos/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"
import {UseScroll} from './UseScroll';
import { motion } from 'framer-motion';
import { navAnimation } from './../Animation';
function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [element, controls] = UseScroll();
  return (
    <Nav
      ref={element}
      variants={navAnimation}
      transition={{delay: 0.1}}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      <div className='brand_container'>
        <a href="#" className='brand'>
          <img src={logo} alt="" />
        </a>
        <div className="toggle-menu">
          {isNavOpen 
          ?<MdClose
              onClick={_=>setIsNavOpen(false)}
          /> 
          : <GiHamburgerMenu
              onClick={e=>{
                e.stopPropagation();
                setIsNavOpen(true);
              }} 
          />}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href='#home' onClick={_=>setIsNavOpen(false)}>Home</a>
            </li>
          <li >
            <a href='#service' onClick={_=>setIsNavOpen(false)}>Services</a>
            </li>
          <li >
            <a href='#portfolio' onClick={_=>setIsNavOpen(false)}>Portfolio</a>
            </li>
          <li >
            <a href='#blog' onClick={_=>setIsNavOpen(false)}>Blog</a>
            </li>
          <li >
            <a href='#skills' onClick={_=>setIsNavOpen(false)}>Skills</a>
            </li>
          <li >
            <a href='#contact' onClick={_=>setIsNavOpen(false)}>Contact</a>
            </li>
        </ul>
      </div>
    </Nav>
    );
}

  const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    margin: 0 12rem;
    color: white;
    padding-top: 2rem;

    .brand_container{
      margin: 0 2rem;
      .toggle-menu{
        display: none;
      }
    }

    .links{      
      ul{
        list-style: none;
        color: white;
        display: flex;
        gap: 3rem;
        flex-direction: row;
        li{
          a{
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
          }
        }
        .active{
          a{
            border-bottom: 0.2rem solid var(--secondary-color);
          }
        }
      }
    }

@media screen and (min-width : 280px) and (max-width: 1080px){
  margin: 0;
  position: relative;
  .brand_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  
    .toggle-menu{
      display: block;
      padding-right: 1rem;
      z-index: 1;
    }
  }
  .show{
    opacity: 1 !important;
    visibility: visible !important;
  }

  .links{
    position: absolute;
    overflow-x: hidden;
    top: 0;
    right: 0;
    width: ${({state})=> state ? "60%" : "0"};
    height: 100vh;
    background-color: var(--secondary-color);
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out;
    ul{
      flex-direction: column;
      text-align: center;
      justify-content: center;
      height: 100%;
    }
  }

}
  `

export default Navbar;
