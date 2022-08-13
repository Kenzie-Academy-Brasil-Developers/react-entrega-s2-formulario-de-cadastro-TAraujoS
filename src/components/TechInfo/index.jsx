import { useTechs } from "../../contexts/TechsContext";

const TechInfo = ({ tech }) => {
  const { setTech } = useTechs();

  function handleClick() {
    setTech(tech);
  }

  return (
    <li onClick={handleClick}>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
    </li>
  );
};

export default TechInfo;
