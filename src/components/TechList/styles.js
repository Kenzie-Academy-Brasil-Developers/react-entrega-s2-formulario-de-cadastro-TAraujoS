import styled from "styled-components";

export const TechUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 55%;
  min-width: 360px;

  margin-bottom: 50px;
  padding: 1rem;
  gap: 1rem;

  background-color: var(--color-grayform);
  border-radius: 4px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.8rem;
    border-radius: 4px;
    background-color: var(--color-list);

    transition: 0.2s;
    z-index: 1;

    cursor: pointer;

    :hover {
      background-color: var(--color-grayinput);
      transform: scale(1.03);

      & p {
        color: var(--color-whitetext);
      }
    }
  }

  h3 {
    color: var(--color-whitetext);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  p {
    color: var(--color-graydark);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }
`;

export const SectionClear = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  h1 {
    color: var(--color-whitetext);
  }
`;
