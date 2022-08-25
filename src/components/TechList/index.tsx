import { useContext } from "react";
import { ITech, TechsContext } from "../../contexts/TechsContext";
import { TechUl } from "./styles";

const TechList = () => {
  const { techs, setModal, setTech } = useContext(TechsContext);

  function handleClick(tech: ITech) {
    setModal("edit");
    setTech(tech);
  }

  return (
    <TechUl>
      {techs?.map((tech) => (
        <li key={tech.id} onClick={() => handleClick(tech)}>
          <h3>{tech.title}</h3>
          <p>{tech.status}</p>
        </li>
      ))}
    </TechUl>
  );
};

export default TechList;
