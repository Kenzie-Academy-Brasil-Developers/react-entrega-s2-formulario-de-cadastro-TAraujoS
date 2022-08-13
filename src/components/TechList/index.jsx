import { useTechs } from "../../contexts/TechsContext";

const TechList = () => {
  const { techs } = useTechs();

  const modalTech = () => {};

  return (
    <main>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={() => modalTech()}>+</button>
      </div>

      <ul>
        <li>
          <h3>TECH</h3>
          <p>Descrição</p>
        </li>
      </ul>
    </main>
  );
};

export default TechList;
