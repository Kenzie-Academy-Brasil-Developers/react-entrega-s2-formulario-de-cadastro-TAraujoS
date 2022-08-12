import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles";
import { Form, Section } from "./styles";
import logo from "../../assets/Logo.svg";
import { toast } from "react-toastify";
import React from "react";
import { LinkStyled as Link } from "./styles";
import Input from "../Input";
import { loginSchema } from "../../validators";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const { user, loading, submitLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onError = () => toast.error("Preencha todos os campos!");

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
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
