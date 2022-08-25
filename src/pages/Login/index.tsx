import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? <Navigate to="/dashboard" replace /> : <LoginForm />;
};

export default Login;
