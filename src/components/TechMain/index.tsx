import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import TechList from "../TechList";
import { SectionClear } from "../TechList/styles";
import { MainTech } from "./styles";

const TechMain = () => {
  const { setModal, techs } = useContext(TechsContext);

  return (
    <MainTech>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal("add")}>+</button>
      </div>
      {techs.length > 0 ? (
        <TechList />
      ) : (
        <SectionClear>
          <h1>Você não possui Techs ainda 😞</h1>
        </SectionClear>
      )}
    </MainTech>
  );
};

export default TechMain;
