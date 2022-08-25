import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles";
import { Form, Section } from "./styles";
import logo from "../../assets/Logo.svg";
import { toast } from "react-toastify";
import { LinkStyled as Link } from "./styles";
import Input from "../Input";
import { loginSchema } from "../../validators";
import { IUserLogin, useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const { submitLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  const onError = () => toast.error("Preencha todos os campos!");

  const onSubmit = handleSubmit(submitLogin, onError);
  return (
    <Section>
      <img src={logo} alt="Logo KenzieHub" />
      <Form action="" onSubmit={onSubmit}>
        <h2>Login</h2>
        <Input
          id="email"
          label="Email"
          type="text"
          error={errors?.email}
          placeholder="Digite aqui o seu email"
          {...register("email")}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          error={errors?.password}
          placeholder="Digite aqui o sua senha"
          {...register("password")}
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
export default LoginForm;
