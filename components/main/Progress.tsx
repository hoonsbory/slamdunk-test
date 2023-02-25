import React from 'react';
import styled from 'styled-components';

const Progress = ({ idx }: { idx: number }) => {
  return (
    <Wrapper width={((idx + 1) / 12) * 100}>
      <div></div>
      <span>{idx + 1}/12</span>
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.header<{ width: number }>`
  position: fixed;
  top: 3vh;
  left: 50%;
  transform: translateX(-50%);
  width: 33%;
  min-width: 280px;
  max-width: 80vw;
  background: #d7baba;
  flex-direction: column-reverse;
  justify-content: center;
  border-radius: 2vh;
  height: 20px;
  display: inline-flex;
  -webkit-perspective: 1000;
  overflow-x: hidden;
  div {
    z-index: 1;
    float: left;
    background: #ff5555;
    height: 5vh;
    max-height: 20px;
    width: ${props => props.width}%;
    border-radius: 2vh;
    max-width: 100%;
    position: absolute;
    transition: width 0.5s;
  }
  span {
    z-index: 2;
    color: white;
  }
`;
