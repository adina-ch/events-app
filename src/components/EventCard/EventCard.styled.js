import styled from "styled-components";
import { colors } from "../../global/colors";

export const Card = styled.div`
  //   background: ${colors.neutralLighter};
  //   border-radius: 6px;
  padding: 1em 0 0.5em;
  margin-bottom: 0.5em;
  cursor: pointer;
  border-bottom: 2px solid ${colors.neutralLight};

  .date-time {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0.5em 0;
    color: ${colors.primary};
    padding: 0 0.25em;
  }

  .card-title {
    background: ${colors.primaryLight};
    display: flex;
    align-items: center;
    padding: 0 0.25em;
    h3 {
      font-weight: 400;
    }
  }

  //   h3 {
  //     color: ${colors.primaryDark};
  //     font-weight: 400;
  //     font-size: 20px;
  //   }

  //   .date-time {
  //     font-size: 12px;
  //     text-transform: uppercase;
  //     font-weight: 600;
  //     background: ${colors.primaryLight};
  //     display: flex;
  //     align-items: center;
  //     padding: 0.25em 0.5em;
  //   }

  .description {
    font-size: 14px;
    color: ${colors.neutralDarker};
    font-weight: 300;
    padding: 0 0.25em;
  }
`;
