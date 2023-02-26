import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CharacterType, resultScript } from '../../datas/Scripts';
import useLoading from '../../hooks/useLoading';
import { MainBtn } from '../../styles/commonStyle';
import { relayAnimation } from '../../utils/animationUtils';
import Loading from '../LoadingModal';
import Meta from '../Meta';
import KakaoShare from './KakaoShare';

const Container = () => {
  const router = useRouter();
  if (router.query.isShared) router.push('/');
  const query = router.query.result as string;
  const [datas] = useState(resultScript[router.query.result as CharacterType]);
  const loaded = useLoading([`${query}.png`]);
  const WrapperRef = useRef<HTMLElement>(null);
  const metaObj = {
    img: `${query}.png`,
    query: query,
    title: `슬램덩크 테스트 - ${datas.name}`,
    description: `${datas.title}!! 【${datas.MBTI} ${datas.name}이(가) 나왔어! 너도 한 번 해봐!`,
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
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        strategy="beforeInteractive"
        src="//developers.kakao.com/sdk/js/kakao.min.js"
      />
      {loaded || <Loading />}
      <Meta {...metaObj} og_title={`나는 슬램덩크의 ${datas.name}!!`} />
      <Wrapper ref={WrapperRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.PATH}/images/${query}.png`}
          alt={`${datas.name} 이미지`}
        />
        <h4>{datas.title}</h4>
        <h2>
          {datas.name} - {datas.MBTI}
        </h2>
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
        <footer>
          <p>
            광고 및 기타 문의 -{' '}
            <a href="mailto:tonymkcv93@gmail.com">tonymkcv93@gmail.com</a>
          </p>
          <span> Special thanks to Seorim</span>
        </footer>
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
  h4 {
    margin-bottom: 0;
  }
  div:first-of-type {
    margin-bottom: 30px;
    span {
      margin-right: 3px;
      font-weight: bold;
    }
  }

  ul {
    width: 88%;
    padding-left: 0px;
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
  footer {
    font-size: 10px;
    color: gray;
    margin-top: 15px;
    a {
      text-decoration: underline;
    }
  }
`;

export default Container;
