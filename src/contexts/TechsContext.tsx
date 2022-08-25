import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { IUser, useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export interface ITechProviderProps {
  children: ReactNode;
}

export interface ITechContext {
  techs: ITech[];
  setTechs: Dispatch<SetStateAction<ITech[]>>;
  tech: ITech;
  setTech: Dispatch<SetStateAction<ITech>>;
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  loadTechs: (user: IUser) => void;
  newTech: (data: INewTech) => void;
  deleteTech: (id: string) => void;
  //editTech: (data: IEditTech) => void;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface INewTech {
  title: string;
  status: string;
}

// export interface IEditTech {
//   status: string;
// }

export interface IDeleteTech {
  id: string;
  tech: string;
}

export const TechsContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { user } = useAuth();
  const [techs, setTechs] = useState<ITech[]>([]);
  const [tech, setTech] = useState<ITech>({} as ITech);
  const [modal, setModal] = useState<string | null>(null);

  async function loadTechs(user: IUser) {
    try {
      const response = await api.get(`users/${user.id}`);
      setTechs(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      loadTechs(user);
    }
  }, [user]);

  function newTech(data: INewTech) {
    api
      .post("/users/techs", data)
      .then((res) => {
        setTechs((oldList) => [res.data, ...oldList]);
        toast.success("Tech criada com sucesso!", {
          autoClose: 2000,
          theme: "dark",
        });
        setModal(null);
      })
      .catch((error) => console.log(error));
  }

  // function editTech(data: IEditTech) {
  //   api
  //     .put(`/users/techs/${id}`, data)
  //     .then((res) => {
  //       toast.success("Tech salva com sucesso!", {
  //         autoClose: 2000,
  //         theme: "dark",
  //       });
  //       setModal(null);
  //     })
  //     .catch((error) => console.log(error));
  // }

  function deleteTech(id: string) {
    api
      .delete(`/users/techs/${id}`)
      .then((res) => {
        const newTechList = techs.filter((tech) => tech.id !== id);
        setTechs(newTechList);
        toast.success("Tech deletada com sucesso!", {
          autoClose: 2000,
          theme: "dark",
        });
        setModal(null);
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
        loadTechs,
        //editTech,
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
