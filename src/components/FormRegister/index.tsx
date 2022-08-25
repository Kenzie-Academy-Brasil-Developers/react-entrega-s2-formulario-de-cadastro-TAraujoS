import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import logo from "../../assets/Logo.svg";
import "./styles";
import { Section } from "../LoginForm/styles";
import { Form, HeaderForm } from "./styles";
import { toast } from "react-toastify";
import { LinkStyled as Link } from "./styles";
import { registerSchema } from "../../validators";
import { IUserRegister, useAuth } from "../../contexts/AuthContext";

function FormRegister() {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });

  const onError = () => toast.error("Preencha todos os campos!");

  const onSubmit = handleSubmit(registerUser, onError);
  return (
    <Section>
      <HeaderForm>
        <img src={logo} alt="Logo KenzieHub" />
        <Link to="/">Voltar</Link>
      </HeaderForm>

      <Form onSubmit={onSubmit}>
        <h2>Crie sua conta</h2>
        <h4>Rapido e grátis, vamos nessa</h4>
        <Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite aqui o seu nome"
          {...register("name")}
          error={errors?.name}
        />
        <Input
          type="text"
          id="email"
          label="Email"
          placeholder="Digite aqui o seu email"
          {...register("email")}
          error={errors?.email}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Digite aqui o sua senha"
          {...register("password")}
          error={errors?.password}
        />
        <Input
          type="password"
          label="Confirmar Senhar"
          id="confirm-password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          error={errors?.confirmPassword}
        />
        <Input
          type="text"
          label="Bio"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
          error={errors?.bio}
        />
        <Input
          type="text"
          label="Contato"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
          error={errors?.contact}
        />
        <label htmlFor="module">Selecionar Módulo </label>
        <select id="module" {...register("course_module")}>
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
