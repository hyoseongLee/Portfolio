import type { Theme } from "../../types/theme";

export const lightTheme: Theme = {
    color: {
      default: '#000',
      primary: '#07692B',
      second: '#949494',
      defaultText: '#000',
      menuText: '#333'
    },
    fontSize: {
      default: '16px',
      small: '12px',
      large: '32px',
      xlarge: '64px',
    },
    backgroundColor: {
      default: '#fff',
      second: '#e1e1e1',
      third: '#cfcfcf',
      contantsBg: '#1D1D1D',

    },
    fontWeight: {
      default: '400',
    },
    fontFamily: {
      default: "'SUIT', system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
  };
  
  export const darkTheme: Theme = {
    ...lightTheme,
    color: {
        default: '#fff',
        primary: '#07692B',
        second: '#949494',
        defaultText: '#000',
        menuText: '#fff'
    },
    backgroundColor: {
      default: '#000',
      second: '#121212',
      third: '#222',
      contantsBg: '#000',

    },
  };