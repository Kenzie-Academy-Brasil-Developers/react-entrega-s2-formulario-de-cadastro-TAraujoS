import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const loader = (timer = 2000) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, timer);
  };

  async function registerUser(data) {
    const cadastro = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    await api
      .post("/users", cadastro)
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso!", {
          autoClose: 2000,
          theme: "dark",
        });
        navigate(`/`);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado", {
          autoClose: 2000,
          theme: "dark",
        });
        console.log(err);
      });
  }

  async function verifyUser() {
    const token = localStorage.getItem("@kenzie-hub:token");

    if (token) {
      try {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setUser(data);
      } catch (error) {
        localStorage.clear();
        console.error(error);
      }
    }
    loader(500);
  }

  useEffect(() => {
    verifyUser();
  }, []);

  async function submitLogin(data) {
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);

      localStorage.setItem("@kenzie-hub:token", token);

      const navigateTo = location.state?.from?.pathname || "/dashboard";

      navigate(navigateTo, { replace: true });
      toast.success("Login efetuado com sucesso!", {
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Email ou senha inválidos", {
        autoClose: 2000,
        theme: "dark",
      });
      console.log(error);
    }
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
    toast.success("Logout efetuado com sucesso!", {
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading,
        loader,
        registerUser,
        submitLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
