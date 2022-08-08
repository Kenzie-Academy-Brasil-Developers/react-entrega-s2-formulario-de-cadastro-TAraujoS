import styled from "styled-components";

export const Form = styled.form`
  height: 90%;
  width: 350px;
  padding: 30px 25px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: var(--color-grayform);

  gap: 15px;

  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-whitetext);
    margin: 0 auto;
  }

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-graydark);
    margin: 0 auto;
  }

  label {
    display: flex;
    align-items: flex-start;
    color: var(--color-whitetext);

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
  }

  select {
    height: 40px;
    width: 100%;
    padding: 5px;

    color: var(--color-graydark);
    background-color: var(--color-grayinput);
    border: 1px solid var(--color-grayinput);
    border-radius: 4px;
  }

  option {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: var(--color-graydark);
  }

  > button {
    height: 40px;
    width: 100%;

    border-radius: 4px;
    color: var(--color-white);
    background-color: var(--color-purple);
    cursor: pointer;

    &:hover {
      border: 1px solid var(--color-white);
    }
  }
`;
