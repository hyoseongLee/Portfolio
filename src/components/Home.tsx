import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import bgcontant from '../asset/img/bgcontant.jpg';
import { useInterval } from '../hooks/setInterVal';

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  overflow: hidden;
  & > div {
    height: 100%;
    display: flex;
  }
`;

const Picture = styled.div`
  width: 43%;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: calc(100% - 43%);
  background-color: ${props => props.theme.backgroundColor.contantsBg};
  padding: 20px;
  overflow-y: scroll;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;     
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontSize.xlarge};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.color.menuText};
  margin-bottom: 30px;
`;


const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedWord = styled.span`
  font-size: ${props => props.theme.fontSize.large};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.color.menuText};
  animation: ${slideDown} 1s forwards;
`;

const Highlight = styled.span`
  margin-left: 12px;
  font-size: ${props => props.theme.fontSize.large};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.color.text};
`;

const ProjectBox = styled.button`
    width: 150px;
    background-color: ${props => props.theme.backgroundColor.second};
    margin-top : 30px;
    border-radius: 12px;
    color: ${props => props.theme.color.button};
    font-size: ${props => props.theme.fontSize.default};
    opacity: 1.5px;
`

const animatedWords = ["creative", "passionate", "curious"];

const Home: React.FC = () => {
    const [wordIdx, setWordIdx] = useState(0);

    useInterval(() => {
        setWordIdx(prev => (prev + 1) % animatedWords.length);
    }, 3000); // 3초마다 변경

    return (
        <Wrapper>
            <div>
                <Picture>
                    <img src={bgcontant} alt="bgContant" />
                </Picture>
                <Container>
                    <div>
                        <Title>HyoSeong`s</Title>
                        <div>
                            <AnimatedWord>
                                {animatedWords[wordIdx]}
                            </AnimatedWord>
                            <Highlight>FrontEnd Developer</Highlight>
                        </div>
                        <div><Highlight>Portfolio ✌️</Highlight>
                        </div>
                        <ProjectBox>Go Project</ProjectBox>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
};

export default Home;
