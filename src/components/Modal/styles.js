import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);

  .modal__box {
    width: 100%;
    max-width: 350px;
    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;
    opacity: 1;
    animation: showUp 0.4s;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
  }

  .modal__box div {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grayinput);
    padding: 0.75rem 1.25rem;
    border-radius: 4px 4px 0px 0px;
  }

  .modal__box div h3 {
    color: var(--color-whitetext);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }
  .modal__box div button {
    background: none;
    border: none;
    color: var(--color-graydark);
    cursor: pointer;
  }
  .modal__box div button:hover {
    color: var(--color-whitetext);
  }
`;

export default Container;
