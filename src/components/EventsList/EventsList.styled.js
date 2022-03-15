import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledEventsList = styled.div`
  padding: 0 1em 1em 2em;
  color: ${colors.textDark};
  display: flex;
`;

export const AllEventsAndActions = styled.div`
  width: 55%;
`;

export const SortFilter = styled.div`
  padding: 1.5em 0;
  display: flex;
`;

export const AllEvents = styled.div``;

export const StyledDetails = styled.div`
  width: 40%;

  margin-right: 1em;
  margin-left: 5%;
  padding: 1em 2em;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  h3 {
    color: ${colors.primary};
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    padding: 0.25em 0;

    .more {
      margin-left: 1em;
    }

    .icon {
      margin-right: 0.5em;
    }
  }

  .details-header {
    margin-bottom: 1em;
  }
`;
