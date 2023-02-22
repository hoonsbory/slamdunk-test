import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scriptType } from '../../datas/Scripts';
import { MainBtn } from '../../styles/commonStyle';
import { relayAnimation } from '../../utils/animationUtils';

interface props {
  idx: number;
  datas: scriptType;
  goToNextStep: (Wrapper: HTMLElement, selectedChar: string) => void;
}

const Question = ({ idx, datas, goToNextStep }: props) => {
  console.log(idx, datas);
  const WrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    relayAnimation(
      WrapperRef.current as HTMLElement,
      `transform : translateX(0px) scale(1);
         opacity : 1;`,
      80,
    );
  }, [idx]);
  return (
    <Wrapper ref={WrapperRef}>
      <img src={`${process.env.PATH}/images/Q${idx + 1}.png`} />
      <h1>Q{idx + 1}</h1>
      <p>{datas.question}</p>
      {datas.answer.map((data, idx) => (
        <MainBtn
          key={idx}
          onClick={() =>
            goToNextStep(WrapperRef.current as HTMLElement, data.char)
          }
        >
          {data.text}
        </MainBtn>
      ))}
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  margin-top: 3vh;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90vh;
  align-items: center;
  h1 {
    color: #ff5555;
  }
  * {
    transform: translateX(500px) scale(0.5);
    opacity: 0;
    word-break: keep-all;
  }
  img {
    width: 550px;
    height: 309px;
    border-radius: 12px;
    @media (max-width: 550px) {
      width: 90vw;
      height: 55vw;
    }
  }
`;
