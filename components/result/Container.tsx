import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { resultScript } from '../../datas/Scripts';
import useLoading from '../../hooks/useLoading';
import { MainBtn } from '../../styles/commonStyle';
import { relayAnimation } from '../../utils/animationUtils';
import Loading from '../Loading';
import Meta from '../Meta';
import KakaoShare from './KakaoShare';
const Container = () => {
  const router = useRouter();
  const loaded = useLoading();
  const [datas] = useState(resultScript[router.query.result as string]);
  const WrapperRef = useRef<HTMLElement>(null);
  const metaObj = {
    query: '/' + router.query.result,
    title: `슬램덩크 테스트 - ${datas.name}`,
    description: `슬램덩크의 ${datas.title}!! ${datas.name}가(이) 나왔어! 너도 한 번 해봐!`,
  };
  useEffect(() => {
    if (!loaded) return;
    relayAnimation(
      WrapperRef.current!,
      `transform : translateY(0px) scale(1);
         opacity : 1;`,
      80,
    );
  }, [loaded]);
  return (
    <>
      {loaded || <Loading />}
      <Head>
        <script defer src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>
      <Meta
        description={metaObj.description}
        title={metaObj.title}
        og_title={`나는 슬램덩크의 ${datas.name}!!`}
        url=""
      />
      <Wrapper ref={WrapperRef}>
        <img
          src={`${process.env.PATH}/images/${datas.name}.png`}
          alt={`${datas.name} 이미지`}
        />
        <h4>{datas.title}</h4>
        <h2>{datas.name}</h2>
        <div>
          {datas.keywords.map(i => (
            <span key={i}>#{i}</span>
          ))}
        </div>
        <ul>
          {datas.content.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <KakaoShare {...metaObj} />
        <MainBtn onClick={() => router.push('/')}>다시 테스트하러 가기</MainBtn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.article`
  > * {
    transform: translateY(-100px) scale(0.7);
    opacity: 0;
  }
  padding-bottom: 40px;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0 -2px 10px 1px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  :-webkit-scrollbar {
    display: none;
  }
  img {
    margin-top: 20px;
    width: 300px;
    max-height: 400px;
    border-radius: 12px;
  }
  h2 {
    color: #ff5555;
  }
  div:first-of-type {
    margin-bottom: 30px;
  }
  span {
    margin-right: 3px;
    font-weight: bold;
  }
  ul {
    width: 88%;
    text-align: left;
  }
  li {
    list-style: none;
    margin-bottom: 20px;
  }
  li:before {
    color: #ff5555;
    content: '•';
    margin-right: 8px;
    font-size: 25px;
    line-height: 18px;
    display: inline-block;
    vertical-align: sub;
  }
`;

export default Container;
