import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInterval } from '../../hooks/setInterVal';
import MainSection from '../Layout';

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

const Intro: React.FC = () => {
    const [wordIdx, setWordIdx] = useState(0);

    useInterval(() => {
        setWordIdx(prev => (prev + 1) % animatedWords.length);
    }, 3000); // 3초마다 변경

    return (
      <MainSection>
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
                    </MainSection>
    );
};

export default Intro;
