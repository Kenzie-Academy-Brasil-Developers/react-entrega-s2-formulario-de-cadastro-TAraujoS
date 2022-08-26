import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { newSchema } from "../../validators";
import ModalForm from "./styles";

import { TechsContext } from "../../contexts/TechsContext";
import { toast } from "react-toastify";
import { BiErrorCircle } from "react-icons/bi";

type FormData = {
  title: string;
  status: string;
};

const ModalAdd = () => {
  const { setModal, newTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(newSchema) });

  const onError = () => toast.error("Nome Obrigatório!");
  const onSubmit = handleSubmit(newTech, onError);
  return (
    <>
      <section>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={onSubmit}>
        <label htmlFor="title">Nome</label>
        <div>
          <input id="title" {...register("title")} placeholder="Tecnologia" />
          <span>{errors?.title && <BiErrorCircle />}</span>
        </div>
        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button type="submit">Cadastrar Tecnologia</button>
      </ModalForm>
    </>
  );
};

export default ModalAdd;
