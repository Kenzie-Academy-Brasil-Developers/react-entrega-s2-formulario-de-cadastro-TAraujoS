import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import "./styles";
import { Form, Section } from "./styles";
import logo from "../../assets/Logo.svg";
import { toast } from "react-toastify";
import React from "react";

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
        <label htmlFor="email">
          Email <span>{errors.email?.message}</span>
        </label>
        <input
          type="email"
          placeholder="Digite seu email aqui"
          {...register("email")}
        />
        <label htmlFor="password">
          Senha <span>{errors.password?.message}</span>
        </label>
        <input
          type="password"
          placeholder="Digite sua senha aqui"
          {...register("password")}
        />
        <button className="submit" type="submit">
          Entrar
        </button>
        <p>Ainda não possui conta?</p>
        <button className="register" type="button">
          <Link to="/register">Cadastre-se</Link>
        </button>
      </Form>
    </Section>
  );
}
export default Login;
