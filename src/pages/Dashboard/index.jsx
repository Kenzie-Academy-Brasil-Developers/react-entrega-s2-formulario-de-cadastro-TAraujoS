import { useContext } from "react";
import HeaderDashboard from "../../components/HeaderDashboard";
import Modal from "../../components/Modal";
import TechMain from "../../components/TechMain";
import { TechsContext } from "../../contexts/TechsContext";

const Dashboard = () => {
  const { modal } = useContext(TechsContext);

  return (
    <>
      {modal && <Modal />}
      <HeaderDashboard />
      <TechMain />
    </>
  );
};

export default Dashboard;
