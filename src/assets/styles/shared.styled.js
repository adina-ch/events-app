import styled from "styled-components";
import { colors } from "../../global/colors";

export const Title = styled.h1`
  padding: 0.5em 1em;
  font-weight: 500;
`;

export const SubTitle = styled.h2`
  margin-bottom: 0.5em;
  font-weight: 500;
`;

export const ActionBox = styled.div`
  background: ${colors.neutralLight};
  color: ${colors.secondaryDark};
  padding: 0.25em 0.5em;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid ${colors.neutralDark};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:nth-child(2) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  span {
    margin-left: 0.5em;
  }
`;

export const StyledButton = styled.button`
  background: ${(props) =>
    props.primary ? `${colors.primary}` : `${colors.textLight}`};
  color: ${(props) =>
    props.primary ? `${colors.textLight}` : `${colors.primary}`};

  font-size: 16px;
  border-radius: 3px;
  border: 2px solid ${colors.primary};
  margin-top: 1.5em;
  padding: 0.25em 2em;

  &:hover {
    color: ${colors.textLight};
    border: 2px solid ${colors.primaryDark};
    background: ${colors.primaryDark};
    cursor: pointer;
  }

  &:first-child {
    margin-right: 1.5em;
  }
`;
