import React from 'react';
import Globalstyle from './asset/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './asset/styles/Theme';
import { useThemeStore } from './hooks/useThemeStore';
import ToggleButton from './components/ToggleButton';

const App = () => {
    const isLight = useThemeStore((state) => state.isLight);

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Globalstyle />
            <ToggleButton />
        </ThemeProvider>
    );
};

export default App;