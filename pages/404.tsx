import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
`;
const ErrorPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(timer.current);
      router.push('/');
    }
  }, [count]);

  return (
    <Wrapper>
      잘못된 접근입니다.
      <br /> <b>{count}초 후 메인페이지</b>로 이동합니다.
    </Wrapper>
  );
};

export default ErrorPage;
