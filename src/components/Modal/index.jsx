import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import Container from "./styles";
import ModalAdd from "../AddModal";

const Modal = () => {
  const { modal } = useContext(TechsContext);

  return (
    <Container>
      <div className="modal__box">
        {modal === "add" ? <ModalAdd /> : <h1>Nada</h1>}
      </div>
    </Container>
  );
};

export default Modal;
