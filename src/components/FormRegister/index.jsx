import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./styles";
import { Section } from "../Login/styles";
import logo from "../../assets/Logo.svg";
import { Header } from "../Dashboard/styles";
import { Form } from "./styles";
import { toast } from "react-toastify";

function FormRegister() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Senha deve conter 8 letras, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const registerUser = (data) => {
    const cadastro = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    api
      .post("/users", cadastro)
      .then((response) => {
        console.log(response);
        toast.success("Cadastro realizado com sucesso!");
        navigate(`/`);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
        console.log(err);
      });
  };

  const onError = () => toast.error("Preencha todos os campos!");

  return (
    <Section>
      <Header className="top">
        <img src={logo} alt="Logo KenzieHub" />
        <button>
          <Link to="/">Voltar</Link>
        </button>
      </Header>

      <Form onSubmit={handleSubmit(registerUser, onError)}>
        <h2>Crie sua conta</h2>
        <h4>Rapido e grátis, vamos nessa</h4>

        <label htmlFor="name">Nome</label>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui o seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="text"
            id="email"
            placeholder="Digite aqui o seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </div>
        <label htmlFor="password">Senha</label>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui o sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>
        <label htmlFor="confirm-password">Confirmar Senha</label>
        <div>
          <input
            type="password"
            id="confirm-password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>
        <label htmlFor="bio">Bio</label>
        <div>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </div>
        <label htmlFor="contact">Contato</label>
        <div>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </div>
        <label htmlFor="module">Selecionar Módulo </label>
        <select name="module" id="module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message} </span>

        <button type="submit">Cadastrar</button>
      </Form>
    </Section>
  );
}
export default FormRegister;
