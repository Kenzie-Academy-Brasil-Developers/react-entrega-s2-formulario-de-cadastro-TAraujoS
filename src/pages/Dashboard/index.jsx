import { useContext } from "react";
import HeaderDashboard from "../../components/HeaderDashboard";
import Modal from "../../components/Modal";
import TechMain from "../../components/TechMain";
import { useAuth } from "../../contexts/AuthContext";
import { TechsContext } from "../../contexts/TechsContext";

const Dashboard = () => {
  const { loading } = useAuth();
  const { modal } = useContext(TechsContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {modal && <Modal />}
      <HeaderDashboard />
      <TechMain />
    </>
  );
};

export default Dashboard;
