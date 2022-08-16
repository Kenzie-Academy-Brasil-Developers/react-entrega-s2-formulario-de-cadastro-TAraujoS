import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../contexts/TechsContext";
import { editSchema } from "../../validators";
import EditForm from "./styles";

const ModalEdit = () => {
  const { setModal, tech, editTech, deleteTech } = useContext(TechsContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editSchema),
  });

  return (
    <>
      <section>
        <h3>Tecnologia Detalhes</h3>
        <button onClick={() => setModal(null)}>X</button>
      </section>
      <EditForm onSubmit={handleSubmit(editTech)}>
        <label htmlFor="title">Nome do Projeto</label>
        <input
          id="title"
          placeholder={tech?.title}
          defaultValue={tech?.title}
          type="text"
        />

        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")} defaultValue={tech.status}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <div className="btnDiv">
          <button type="submit">Salvar Tecnologia</button>
          <span className="btnDelete" onClick={() => deleteTech(tech.id)}>
            Excluir
          </span>
        </div>
      </EditForm>
    </>
  );
};

export default ModalEdit;
