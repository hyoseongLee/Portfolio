import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'SUIT';
    src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}


@font-face {
    font-family: 'SUIT';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
html, body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.default};
    color: ${({ theme }) => theme.color.default};
    background-color: ${({ theme }) => theme.backgroundColor.default};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeight.default};
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }


  button {
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    padding: 0.5em 1em;
    border: 1px solid transparent;
    transition: border-color 0.3s ease;
  }
`;

export default Globalstyle;