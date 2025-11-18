import React from 'react';
import { useThemeStore } from '../hooks/useThemeStore';
import { MoonStar, Sun } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.button`
    position: fixed;
    bottom: 60px;
    right: 50px;
    z-index: 1234;
    border-radius: 12px;
    padding: 12px;
    border: none;
`

const StyledMoonStar = styled(MoonStar)`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    transition: 0.5s;  
`

const StyledSun = styled(Sun)`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    transition: 0.5s;  
`

const ToggleButton: React.FC = () => {
    const { isLight, toggleTheme } = useThemeStore();

    return (
        <Container onClick={toggleTheme}>
            {isLight ? <StyledMoonStar /> : <StyledSun />}
        </Container>
    )
}

export default ToggleButton;