import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { scriptType } from '../../datas/Scripts';
import useLoading from '../../hooks/useLoading';
import { MainBtn } from '../../styles/commonStyle';
import { relayAnimation } from '../../utils/animationUtils';
import Loading from '../Loading';

interface props {
  idx: number;
  datas: scriptType;
  goToNextStep: (Wrapper: HTMLElement, selectedIdx: number) => void;
}

const Question = ({ idx, datas, goToNextStep }: props) => {
  const loaded = useLoading([`q${idx + 1}.png`]);
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
      <div>
        {loaded ? (
          <img src={`${process.env.PATH}/images/q${idx + 1}.png`} />
        ) : (
          <Loading />
        )}
      </div>

      <h1>Q{idx + 1}</h1>
      <pre>{datas.question}</pre>
      {datas.answer.map((data, idx) => (
        <MainBtn
          key={idx}
          onClick={() => goToNextStep(WrapperRef.current as HTMLElement, idx)}
        >
          {data.text}
        </MainBtn>
      ))}
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80vh;
  align-items: center;
  h1 {
    color: #ff5555;
  }
  pre {
    font-family: Maplestory;
    white-space: break-spaces;
  }
  pre,
  h1 {
    margin: 0;
  }
  > * {
    transform: translateX(500px) scale(0.5);
    opacity: 0;
    word-break: keep-all;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 309px;
    border-radius: 12px;
    @media (max-width: 550px) {
      width: 90vw;
      height: 55vw;
    }
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
