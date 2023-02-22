import React from 'react';
import styled, { keyframes } from 'styled-components';
const Loading = () => {
  return (
    <Wrapper>
      <article>
        <div></div>
      </article>
    </Wrapper>
  );
};

export default Loading;

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(200%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`;

const animation = keyframes`
	0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  article {
    animation: ${fadeIn} 1s;
  }
  div {
    width: 75px;
    height: 75px;
    border: 16px solid #eee;
    border-radius: 100vw;
    border-top: 16px solid #ff5555;
    animation: ${animation} 2s linear infinite;
  }
  div::after {
    position: absolute;
    content: '';
    top: -7px;
    right: -7px;
    width: 16px;
    height: 16px;
    border-radius: 100vw;
    background-color: #ff5555;
    animation: ${animation} 2s linear infinite;
  }
  div::before {
    position: absolute;
    content: '';
    top: -7px;
    left: -7px;
    width: 16px;
    height: 16px;
    border-radius: 100vw;
    background-color: #ff5555;
    animation: ${animation} 2s linear infinite;
  }
`;
