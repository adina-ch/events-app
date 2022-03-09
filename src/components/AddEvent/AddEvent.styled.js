import styled from "styled-components";
import { colors } from "../../global/colors";

export const CreateEvent = styled.div`
  .create-event-form {
    padding: 0 1em 1em 2em;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1em;

  label {
    display: block;
  }

  input,
  textarea {
    padding: 0.5em;
    width: 100%;
    max-width: 550px;
  }

  input[type="date"],
  input[type="time"] {
    width: auto;
  }

  textarea {
    resize: none;
  }
`;
