import HeaderDashboard from "../../components/HeaderDashboard";
import TechList from "../../components/TechList";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <HeaderDashboard />
      <TechList />
    </>
  );
};

export default Dashboard;
