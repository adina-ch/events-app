import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledSidebar = styled.div`
  position: absolute;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 150px;
  background: ${colors.primary};
  color: ${colors.textLight};

  @media (max-width: 600px) {
    top: 81px;
    width: 100%;
    height: auto;
  }

  ul {
    width: 100%;
  }

  li {
    list-style: none;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      background: ${colors.primaryDark};
    }

    // add transition effect
    &:hover {
      background: ${colors.primaryDark};
      cursor: pointer;
    }
  }
`;

export const LogoWrapper = styled.div`
  padding: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
