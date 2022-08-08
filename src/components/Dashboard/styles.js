import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20rem;

  img {
    width: 140px;
  }

  > button {
    height: 30px;
    width: 50px;
    color: var(--color-white);
    background-color: var(--color-grayform);
    border-radius: 4px;

    cursor: pointer;

    &:hover {
      border: 1px solid var(--color-white);
    }

    &:active {
      background-color: var(--color-white);
      color: var(--color-grayform);
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 20vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20rem;

  border-top: 1px solid var(--color-grayinput);
  border-bottom: 1px solid var(--color-grayinput);

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-white);
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-graydark);
  }
`;
