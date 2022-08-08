import { useNavigate } from "react-router-dom";
import "./styles";
import logo from "../../assets/Logo.svg";
import { Container, Header } from "./styles";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("@userData"));
  //criar um state para guardar as info do user;
  //usar o estado para renderizar as info na tela;

  //criar callback que faz a requisiçaõ para user especifico(endpoint  /users/id) // pegar resposta e atualizar o state q tinah sido criado
  //chamar a callback criada na montagem do componente, por meio do useeffect

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Header>
        <img src={logo} alt="Logo KenzieHub" />
        <button onClick={() => logout()}>Sair</button>
      </Header>
      <Container>
        <h4>Olá, {user.name}</h4>
        <p>{user.course_module}</p>
      </Container>
    </>
  );
}
export default Dashboard;
