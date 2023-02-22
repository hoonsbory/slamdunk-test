import styled from 'styled-components';

const MainBtn = styled.button`
  background: #ff5555;
  box-shadow: rgb(255 136 64 / 34%) 0px 5px 20px;
  width: 80%;
  color: white;
  position: relative;
  border-radius: 12px;
  padding: 3px 6px;
  height: auto;
  min-height: 54px;
  width: 90%;
  cursor: pointer;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  width: 80%;
  transform: translate3D(0, 0, 0);
  -webkit-font-smoothing: subpixel-antialiased;
  flex-direction: row;
  will-change: transform, opacity;
  :hover {
    transform: translateY(-7px) !important;
  }
`;

export { MainBtn };
