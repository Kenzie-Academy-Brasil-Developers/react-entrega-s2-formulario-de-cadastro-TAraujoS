import styled from "styled-components";

const EditForm = styled.form`
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

    border: 1px solid var(--color-grayinput);
    border-radius: 3px;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;

    color: var(--color-whitetext);
    background: var(--color-grayinput);
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

  .btnDiv {
    display: flex;
    align-items: center;

    height: 40px;
    border-radius: 6px;
    gap: 2rem;
  }

  .btnDiv button {
    height: 100%;
    width: 60%;
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 26px;

    color: var(--color-white);
    background: var(--color-purple);
    cursor: pointer;
  }

  .btnDiv button:hover {
    border: 1px solid var(--color-white);
  }

  .btnDiv span {
    align-items: center;
    display: flex;
    justify-content: center;

    height: 100%;
    width: 30%;
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: var(--color-white);
    background-color: var(--color-graydark);
    cursor: pointer;
  }
  .btnDiv span:hover {
    background-color: var(--color-grayinput);
  }
`;

export default EditForm;
