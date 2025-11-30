import Globalstyle from './asset/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './asset/styles/Theme';
import { useThemeStore } from './hooks';
import { ToggleButton }from './components';
import { Header } from './components';
import { Home } from './screens';


const App = () => {
    const isLight = useThemeStore((state) => state.isLight);

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Globalstyle />
            <Header />
            <Home />
            <ToggleButton />
        </ThemeProvider>
    );
};

export default App;