import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledSearch = styled.div`
  position: relative;
  border: 1px solid ${colors.neutralDark};
  border-radius: 5px;
  overflow: hidden;

  .search-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    font-family: "Poppins", sans-serif;
    padding: 0.75em;
    padding-left: 2.75em;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;
