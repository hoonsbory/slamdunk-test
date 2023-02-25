import React from 'react';
import styled, { keyframes, css } from 'styled-components';
const Loading = () => {
  return <Div></Div>;
};

export default Loading;

const animation = keyframes`
	0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`;

const radius_color_ani = css`
  border-radius: 100vw;
  animation: ${animation} 1.5s linear infinite;
`;
const sideDot = css`
  ${radius_color_ani}
  top: -7px;
  width: 16px;
  height: 16px;
  position: absolute;
  background-color: #ff5555;
  content: '';
`;
const Div = styled.div`
  width: 75px;
  height: 75px;
  border: 16px solid #eee;
  border-top: 16px solid #ff5555;
  ${radius_color_ani}
  ::after {
    right: -7.5px;
    ${sideDot}
  }
  ::before {
    left: -7.5px;
    ${sideDot}
  }
`;
