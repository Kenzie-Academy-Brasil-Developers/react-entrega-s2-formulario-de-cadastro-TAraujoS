import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { newSchema } from "../../validators";
import ModalForm from "./styles";

const ModalAdd = () => {
  const { setModal, newTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newSchema) });

  return (
    <>
      <section>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={handleSubmit(newTech)}>
        <label htmlFor="status">Nome</label>
        <input
          id="title"
          label="Nome"
          {...register("title")}
          error={errors?.title}
          placeholder="Tecnologia"
        />

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
