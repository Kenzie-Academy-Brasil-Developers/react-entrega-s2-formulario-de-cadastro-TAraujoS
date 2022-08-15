import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";

export const TechsContext = createContext({});

const TechProvider = ({ children }) => {
  const { user } = useAuth();
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState([]);
  const [modal, setModal] = useState(null);

  async function loadTechs() {
    try {
      console.log(user);
      const response = await api.get(`users/${user.id}`);
      console.log("TESTE ID:", user.id);
      setTechs(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadTechs();
  }, [user]);

  async function newTech(data) {
    try {
      const response = await api.post(`/users/techs/`, data);
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function editTech(data) {
    try {
      const response = await api.put(`/users/techs/${tech.id}`, data);
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech() {
    try {
      const response = await api.delete(`/users/techs/${tech.id}`);
      setModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechsContext.Provider
      value={{
        tech,
        setTech,
        techs,
        setTechs,
        modal,
        setModal,
        newTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

// export const useTechs = () => {
//   return useContext(TechsContext);
// };

export default TechProvider;
