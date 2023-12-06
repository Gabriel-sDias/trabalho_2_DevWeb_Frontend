import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 1.125rem;
  font-family: var(--font-sans);
  color: white;

  .form-input {
    margin-top: 8px;
    width: 100%;

    font-size: 1rem;
    color: black;

    padding: 8px;
    border: 1px solid var(--color-grey);
    border-radius: 8px;
  }
`;
