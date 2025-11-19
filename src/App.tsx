import React from 'react';
import Globalstyle from './asset/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './asset/styles/Theme';
import { useThemeStore } from './hooks';
import {ToggleButton, TypingLayout }from './components';
import { Header } from './components';

const App = () => {
    const isLight = useThemeStore((state) => state.isLight);

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Globalstyle />
            <Header />
            <TypingLayout />
            <ToggleButton />
        </ThemeProvider>
    );
};

export default App;