import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loading from './Loading';
const LoadingModal = () => {
  return (
    <Wrapper>
      <article>
        <Loading />
      </article>
    </Wrapper>
  );
};

export default LoadingModal;

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
    animation: ${fadeIn} 0.5s;
  }
`;
