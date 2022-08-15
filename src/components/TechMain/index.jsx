import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import TechList from "../TechList";
import { MainTech } from "./styles";

const TechMain = () => {
  const { setModal } = useContext(TechsContext);

  return (
    <MainTech>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal("add")}>+</button>
      </div>
      <TechList />
    </MainTech>
  );
};

export default TechMain;
