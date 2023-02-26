import React from 'react';
import styled from 'styled-components';
const Counter = () => {
  return (
    <Wrapper>
      <span>현재 총 &nbsp;</span>
      <a href="http://www.cutercounter.com/" target="_blank" rel="noreferrer">
        <img
          src="https://www.cutercounter.com/hits.php?id=hmmxfcxqf&nd=1&style=10"
          alt="website counter"
        />
      </a>
      <span>&nbsp; 번 실행되었습니다.</span>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
