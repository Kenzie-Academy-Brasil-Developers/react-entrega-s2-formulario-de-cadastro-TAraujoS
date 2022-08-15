import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { TechUl } from "./styles";
import trash from "../../assets/trash.svg";

const TechList = () => {
  const { techs, deleteTech } = useContext(TechsContext);

  return (
    <TechUl>
      {techs?.map((tech) => (
        <li key={tech.id} tech={tech}>
          <h3>{tech.title}</h3>
          <div className="btnDelete">
            <p>{tech.status}</p>
            <img src={trash} alt="Lixeira" onClick={() => deleteTech()} />
          </div>
        </li>
      ))}
    </TechUl>
  );
};

export default TechList;
