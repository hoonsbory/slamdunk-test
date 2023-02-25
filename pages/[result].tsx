import React from 'react';
import Container from '../components/result/Container';
import MainLayout from '../layout/MainLayout';
const Result = () => {
  return (
    <MainLayout>
      <Container />
    </MainLayout>
  );
};

export default Result;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { result: 'baekho' } },
      { params: { result: 'daehyup' } },
      { params: { result: 'taewoong' } },
      { params: { result: 'soyeon' } },
      { params: { result: 'daeman' } },
      { params: { result: 'chisoo' } },
      { params: { result: 'ahn' } },
      { params: { result: 'hanna' } },
      { params: { result: 'taeseob' } },
      { params: { result: 'jinwoo' } },
      { params: { result: 'daljae' } },
      { params: { result: 'woosung' } },
      { params: { result: 'junho' } },
      { params: { result: 'hoyeol' } },
      { params: { result: 'hyunchul' } },
      { params: { result: 'hyunpil' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
