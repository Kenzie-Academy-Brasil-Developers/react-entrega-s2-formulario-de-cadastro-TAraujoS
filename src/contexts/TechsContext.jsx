import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";

export const TechsContext = createContext({});

const TechProvider = ({ children }) => {
  const { loadUser } = useAuth();
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState([]);

  async function newTech(data) {
    try {
      const response = await api.post(`/users/techs/`, data);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function editTech(data) {
    try {
      const response = await api.put(`/users/techs/${tech.id}`, data);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTech() {
    try {
      const response = await api.delete(`/users/techs/${tech.id}`);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechsContext.Provider
      value={{ techs, setTechs, tech, setTech, newTech, editTech, deleteTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export const useTechs = () => {
  return useContext(TechsContext);
};

export default TechProvider;
