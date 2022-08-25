import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { ITech } from "./TechsContext";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  bio?: string;
  contact: string;
  course_module: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser | null;
  //setUser:(user: IUser | null) => void;
  loading: Boolean;
  registerUser: (data: IUserRegister) => void;
  submitLogin: (data: IUserLogin) => void;
  logout: () => void;
  loader: (timer?: number) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const navigate = useNavigate();

  const loader = (timer = 2000) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, timer);
  };

  async function registerUser(data: IUserRegister): Promise<void> {
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
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

  async function submitLogin(data: IUserLogin): Promise<void> {
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(userResponse);

      localStorage.setItem("@kenzie-hub:token", token);

      navigate("/dashboard", { replace: true });
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

  const logout = (): void => {
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
