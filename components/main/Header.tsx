import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <p>내가 슬램덩크 캐릭터라면?</p>
      <p>내 성격과 맞는 슬램덩크 캐릭터 찾기</p>
      <a
        href="https://www.webfreecounter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.cutercounter.com/hits.php?id=hvxfqkax&nd=1&style=1"
          border="0"
          alt="website counter"
        />
      </a>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  p:first-child {
    font-size: 26px;
    color: #ff5555;
    margin-bottom: 5px;
  }
  font-size: 16px;
`;
