import type { Theme } from "../../types/theme";

export const lightTheme: Theme = {
    color: {
      default: '#000',
      primary: '#07692B',
      second: '#949494',
      text: '#4f8cff',
      menuText: '#333',
      button: '#fff',
    },
    fontSize: {
      default: '16px',
      small: '12px',
      large: '32px',
      xlarge: '64px',
    },
    backgroundColor: {
      default: '#fff',
      second: '#333',
      third: '#cfcfcf',
      contantsBg: '#F6FBFF',

    },
    fontWeight: {
      default: '400',
      bold: '600',
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
        text: '#4f8cff',
        menuText: '#fff',
        button: '#fff',
    },
    backgroundColor: {
      default: '#000',
      second: '#121212',
      third: '#222',
      contantsBg: '#000',

    },
  };