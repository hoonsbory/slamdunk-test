import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CharMBTI, MbtiType, Script } from '../../datas/Scripts';
import useLoading from '../../hooks/useLoading';
import { MainBtn } from '../../styles/commonStyle';
import { leftFadeOut, relayAnimation } from '../../utils/animationUtils';
import LoadingModal from '../LoadingModal';
import Meta from '../Meta';
import Counter from './Counter';
import Header from './Header';
import Progress from './Progress';
import Question from './Question';

const resizeHeight = () =>
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`,
  );

const MainContainer = () => {
  const router = useRouter();
  const [isStarted, setIsStarted] = useState(false);
  const [scriptIdx, setScriptIdx] = useState<number>(0);
  const loaded = useLoading();
  const Wrapper = useRef<HTMLDivElement | null>(null);
  const scriptDatas = useRef([Script[scriptIdx]]);
  const resultObj = useRef<{ [key: string]: number }>({
    I: 0,
    E: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });
  useEffect(() => {
    resizeHeight();
    window.addEventListener('resize', resizeHeight);
  }, []);
  useEffect(() => {
    if (loaded) {
      Wrapper.current!.style.opacity = '1';
      relayAnimation(
        Wrapper.current as HTMLElement,
        `transform : translateY(0px) scale(1);
        opacity : 1;`,
        120,
      );
    }
  }, [loaded]);

  const changeScriptComponent = (idx: number) => {
    scriptDatas.current.pop();
    Script[idx] && scriptDatas.current.push(Script[idx]);
  };

  const calcMBTI = () => {
    let answer = '';
    const arr = Object.entries(resultObj.current);
    for (let i = 0; i < 8; i += 2) {
      if (arr[i][1] >= arr[i + 1][1]) answer += arr[i][0];
      else answer += arr[i + 1][0];
    }
    return answer as MbtiType;
  };

  const goToNextStep = async (Wrapper: HTMLElement, selectedIdx: number) => {
    await relayAnimation(Wrapper, leftFadeOut, 80);
    setScriptIdx(idx => {
      if (idx >= 11) router.push(CharMBTI[calcMBTI()]);
      else {
        changeScriptComponent(idx + 1);
        resultObj.current[Script[idx].answer[selectedIdx].char] += 1;
      }
      return idx + 1;
    });
  };
  return (
    <>
      <Meta
        description="MBTI 테스트를 통해 내가 어떤 슬램덩크 캐릭터와 맞는 지 확인해보세요"
        title="슬램덩크 MBTI 테스트"
        og_title="슬램덩크 MBTI 테스트"
        query=""
        img="mainImg.jpg"
      />
      <div>
        {loaded || <LoadingModal />}
        {isStarted && scriptIdx < 12 ? (
          <>
            <Progress idx={scriptIdx} />
            {scriptDatas.current.map(i => (
              <Question
                key={scriptIdx}
                idx={scriptIdx}
                datas={i}
                goToNextStep={goToNextStep}
              />
            ))}
          </>
        ) : (
          <Article ref={Wrapper}>
            <Header />
            <div />
            <p>※ 이미지 출처 - 더 퍼스트 슬램덩크</p>
            <Counter />
            <MainBtn
              onClick={async () => {
                await relayAnimation(
                  Wrapper.current as HTMLElement,
                  leftFadeOut,
                  80,
                );
                setIsStarted(true);
              }}
            >
              테스트 시작
            </MainBtn>
          </Article>
        )}
      </div>
    </>
  );
};

export default MainContainer;

const Article = styled.article`
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    transform: translateY(-100px) scale(0.7);
    opacity: 0;
  }
  > p {
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 12px;
    color: rgb(110, 110, 110);
  }
  div:first-of-type {
    background-image: url('./images/mainImg.jpg');
    background-size: cover;
    width: 500px;
    height: 300px;
    border-radius: 10px;
    @media (max-width: 550px) {
      width: 90vw;
      height: 55vw;
    }
  }
`;
