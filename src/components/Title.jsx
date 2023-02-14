import React from 'react';
import styled from 'styled-components';

function Title({ value }) {
  return (
      <Div className='side_title'>
        <h1>{value}</h1>
      </Div>
    );
}

const Div = styled.div`
  position: relative;

  h1{
    position: absolute;
    transform: translateX(-47%) translateY(20vw) rotate(-90deg);
    color: var(--secondary-color);
    font-size: 7rem;
    font-weight: 100;
    text-transform: uppercase;
  }

  @media screen and (min-width : 280px) and (max-width: 1080px){
    display:none;
  }
`

export default Title;
