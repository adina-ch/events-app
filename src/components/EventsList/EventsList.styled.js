import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledEventsList = styled.div`
  padding: 0 1em 1em 2em;
  color: ${colors.textDark};
  display: flex;
`;

export const AllEventsAndActions = styled.div`
  // background-color: pink;
  // width: 40%;
  width: 100%;
`;

export const StyledActions = styled.div``;

export const SortFilter = styled.div`
  padding: 1.5em 0;
  display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const AllEvents = styled.div``;

export const StyledDetails = styled.div`
  // width: 55%;
  // border-left: 1px solid blue;
  // border-left: 1px solid ${colors.neutralDark}
  margin-left: 5%;
  padding: 0 0 3em 3em;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
`;
