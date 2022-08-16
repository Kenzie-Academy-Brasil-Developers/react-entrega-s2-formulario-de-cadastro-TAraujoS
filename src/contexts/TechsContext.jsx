import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const TechsContext = createContext({});

const TechProvider = ({ children }) => {
  const { user } = useAuth();
  const [techs, setTechs] = useState([]);
  const [tech, setTech] = useState([]);
  const [modal, setModal] = useState(null);

  async function loadTechs() {
    try {
      const response = await api.get(`users/${user.id}`);
      setTechs(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      loadTechs();
    }
  }, [user]);

  function newTech(data) {
    api
      .post("/users/techs", data)
      .then((res) => {
        setTechs((oldList) => [res.data, ...oldList]);
        toast.success("Tech criada com sucesso!");
      })
      .catch((error) => console.log(error));
  }

  function editTech(data) {
    api
      .put(`/users/techs/${techs.id}`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  function deleteTech(id) {
    api
      .delete(`/users/techs/${id}`)
      .then((res) => {
        const newTechList = techs.filter((tech) => tech.id !== id);
        setTechs(newTechList);
        toast.success("Tech deletada com sucesso!");
      })
      .catch((error) => console.log(error));
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
