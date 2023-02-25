import { ReactElement } from 'react';
import styled from 'styled-components';

const MainLayout = ({ children }: { children: ReactElement }) => {
  return <Div>{children}</Div>;
};

export default MainLayout;

const Div = styled.section`
  max-width: 550px;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  bottom: 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div {
    width: 100%;
  }
`;
