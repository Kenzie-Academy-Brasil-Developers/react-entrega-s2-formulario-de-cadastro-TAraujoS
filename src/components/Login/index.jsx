import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import "./styles";
import { Form, Section } from "./styles";
import logo from "../../assets/Logo.svg";
import { toast } from "react-toastify";
import React from "react";
import { LinkStyled as Link } from "./styles";
import Input from "../Input";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@userData", JSON.stringify(response.data.user));
        localStorage.setItem("@userId", response.data.user.id);
        toast.success("Login efetuado com sucesso!");
        navigate(`/dashboard/:`);
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
  };

  const onError = () => toast.error("Preencha todos os campos!");

  return (
    <Section>
      <img src={logo} alt="Logo KenzieHub" />
      <Form action="" onSubmit={handleSubmit(submitLogin, onError)}>
        <h2>Login</h2>
        <Input
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
        <button className="submit" type="submit">
          Entrar
        </button>
        <p>Ainda não possui conta?</p>

        <Link to="/register">Cadastre-se</Link>
      </Form>
    </Section>
  );
}
export default Login;
