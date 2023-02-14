/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import styled from 'styled-components';
import {FaChevronUp} from "react-icons/fa"

function UseScroll() {

    const [visible, setVisible] = useState(false);

    window.addEventListener("scroll", ()=>{
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    })

    return (
    <ScrolBox>
        <a href="#" className={visible ? "block" : "none"}>
            <FaChevronUp />
        </a>
    </ScrolBox>   
);
}

const ScrolBox = styled.div`
    max-width: 100vw;
    .none{
    visibility: hidden;
    opacity: 0;
    }
    a{
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: var(--secondary-color);
    padding: 1rem;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: 0.5s ease-in-out;
}
`

export default UseScroll;
