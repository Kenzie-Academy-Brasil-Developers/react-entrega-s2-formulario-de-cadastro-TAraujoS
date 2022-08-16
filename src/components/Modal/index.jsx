import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import Container from "./styles";
import ModalAdd from "../AddModal";
import ModalEdit from "../EditModal";

const Modal = () => {
  const { modal } = useContext(TechsContext);

  return (
    <Container>
      <div className="modal">
        {modal === "add" ? <ModalAdd /> : <ModalEdit />}
      </div>
    </Container>
  );
};

export default Modal;
