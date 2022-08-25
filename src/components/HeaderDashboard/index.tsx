import "./styles";
import logo from "../../assets/Logo.svg";
import { Container, Header } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

const HeaderDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Header>
        <img src={logo} alt="Logo KenzieHub" />
        <button onClick={logout}>Sair</button>
      </Header>
      <Container>
        <h4>Olá, {user?.name}</h4>
        <p>{user?.course_module}</p>
      </Container>
    </>
  );
};

export default HeaderDashboard;
