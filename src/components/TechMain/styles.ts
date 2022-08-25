import styled from "styled-components";

export const MainTech = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 60vh;
  align-items: center;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    margin: 20px 0px 15px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;

    color: var(--color-whitetext);
  }

  button {
    width: 30px;
    height: 30px;
    font-size: 24px;

    background: var(--color-grayform);
    border-radius: 4px;
    color: var(--color-white);

    cursor: pointer;

    :hover {
      background-color: var(--color-grayinput);
    }
  }
`;
