import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  // position: fixed;
  // z-index: 1;
  // background: ${colors.background};
  // top: 0;
`;

export const Avatar = styled.div`
  background-color: ${colors.primary};
  color: ${colors.textLight};
  border-radius: 50%;
  padding: 0.5em;
  margin-left: auto;
`;

export const Line = styled.div`
  background-color: ${colors.neutralLight};
  width: 96%;
  height: 1px;
  margin: 0 auto;
  border-radius: 5em;
`;
