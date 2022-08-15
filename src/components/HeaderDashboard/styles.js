import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30%;

  img {
    width: 140px;
  }

  > button {
    height: 30px;
    width: 50px;

    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;

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
  gap: 20%;

  border-top: 1px solid var(--color-grayinput);
  border-bottom: 1px solid var(--color-grayinput);

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.75rem;
    color: var(--color-white);
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.4rem;
    color: var(--color-graydark);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 25%;
    align-items: flex-start;
  }
`;
