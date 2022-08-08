import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 100%;

  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-white);
  }
  text-decoration: none;
  background-color: var(--color-graydark);
`;

export const Section = styled.section`
  min-height: 90vh;
  width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    margin: 60px 0 25px 0;
    width: 140px;
  }
`;

export const Form = styled.form`
  height: 45vh;
  width: 350px;
  min-height: 400px;
  max-height: 550px;
  padding: 30px 25px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: var(--color-grayform);

  h2 {
    color: var(--color-whitetext);
    margin: 0 auto;
  }

  label {
    display: flex;
    align-items: flex-start;
    color: var(--color-whitetext);

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0px;
  }

  input {
    height: 40px;
    width: 100%;
    padding: 5px;

    background-color: var(--color-grayinput);
    border: 1px solid var(--color-grayinput);
    border-radius: 4px;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.1rem;
    color: var(--color-graydark);
  }

  button {
    height: 40px;
    width: 100%;

    border-radius: 4px;
    color: var(--color-white);
    background-color: var(--color-pink);
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.6rem;

    &:hover {
      border: 1px solid var(--color-white);
    }
  }
`;
