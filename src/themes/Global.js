import {createGlobalStyle} from "styled-components";
import AcMedium from "../fonts/ACTexto-Medium.otf";
export const Global = createGlobalStyle`
  @font-face {
    font-family: "AC-text";
    src: url(${AcMedium}) format("otf");
  }
  *{
    margin: 0;padding: 0;
    box-sizing:border-box;
    font-family: "AC-text", sans-serif;
}
`
