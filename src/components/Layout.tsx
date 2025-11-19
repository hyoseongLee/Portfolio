import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderHeight = '70px';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${HeaderHeight};
  box-sizing: border-box;
  `

const Container = styled.div`
 width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.backgroundColor.contantsBg};
  border-radius: 24px;

`

interface TypingProps {
    text: string;
    speed?: number;
    className?: string;
}
const TypingMotion: React.FC<TypingProps> = ({ text, speed = 0.07, className }) => {
    const letters = text.split('');
    return (
        <div className={className}>
            {letters.map((char, i) =>
                char === '\n' ? (
                    <br key={i} />
                ) : (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * speed }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </motion.span>
                )
            )}
        </div>
    );
};

// styled-components로 감싼 TypingMotion 생성
const StyledTypingMotion = styled(TypingMotion)`
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.xlarge};
  font-weight: ${props => props.theme.fontWeight.default};
  text-align: center;
  white-space: pre-line;
`;

export default function TypingLayout() {
    return (
        <Wrapper>
        <Container>
        <StyledTypingMotion
  text={"Hello, world!\nHYO SEONG's\nFrontend Developer\n Portfolio ✌️"}
  speed={0.07}
/>
</Container></Wrapper>
    );
}
