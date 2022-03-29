import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
  }
  
  li{
    list-style: none;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  color: ${colors.textDark};
`;

export const Wrapper = styled.div`
  width: 100%;
`;
