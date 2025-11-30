import styled from 'styled-components';
import type { ReactNode } from 'react';

const Wrapper = styled.section`
  margin-top: 32px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.contantsBg};
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  min-height: calc(100vh - 70px);
`;

type Props = {
  children: ReactNode;
};

export default function MainSection({ children }: Props) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
