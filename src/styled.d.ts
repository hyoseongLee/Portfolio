import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    fontColor: string;
    fontDefault: string;
    fontWeightDefault: number;
    fontSizeDefault: string;
  }
}