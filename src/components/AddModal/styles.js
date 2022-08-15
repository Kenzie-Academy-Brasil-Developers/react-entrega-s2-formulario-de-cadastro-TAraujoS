import styled from "styled-components";

const ModalForm = styled.form`
  background-color: var(--color-grayform);
  padding: 0.75rem 1.25rem;

  label {
    color: var(--color-whitetext);
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.495rem;
  }

  input {
    width: 100%;
    height: 38px;
    color: var(--color-whitetext);
    background: var(--color-grayinput);
    border: 1px solid var(--color-grayinput);
    border-radius: 3px;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    transition: 0.2s;
  }

  input:focus {
    border: 1px solid var(--color-whitetext);
  }

  select {
    width: 100%;
    height: 2.4rem;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    color: var(--color-graydark);
    background: var(--color-grayinput);
    border: 1px solid var(--color-grayinput);
    border-radius: 4px;
  }

  select:focus {
    color: var(--color-whitetext);
    border: 1px solid var(--color-whitetext);
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;
    color: var(--color-whitetext);
    background: var(--color-pink);
    border: 1px solid var(--color-pink);
    border-radius: 4px;
    margin-bottom: 1rem;
    transition: 0.2s;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff427f;
    border: 1px solid var(--color-whitetext);
  }

  button:active {
    transform: scale(1);
  }

  span {
    color: var(--color-whitetext);
  }
`;

export default ModalForm;
