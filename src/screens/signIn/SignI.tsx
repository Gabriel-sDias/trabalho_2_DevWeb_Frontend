import {
  SignInBodyDiv,
  ContentViewDiv,
  Content,
  SendButton,
  TextTest,
} from "./SignInStyled";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../components/SignInInput/Input";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/Auth";

//tela principal do perfil do usuario.
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  function handleSignUp() {
    navigate("/signUp");
  }

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    const data = {
      email,
      password,
    };
    await signIn(data);
  };

  return (
    <SignInBodyDiv>
      <Content>
        <GenericInput
          label="E-mail"
          input={{
            id: "name-input",
            type: "email",
            name: "email-input",
            placeholder: "exemplo@exemplo.com",
            onChange: (e) => setEmail(e.target.value),
          }}
        />
        <GenericInput
          label="Senha"
          input={{
            id: "password-input",
            type: "password",
            name: "password-input",
            placeholder: "correct-horse-battery-staple",
            onChange: (e) => setPassword(e.target.value),
          }}
        />
        <SendButton onClick={handleLogin}>Login</SendButton>
        <TextTest> Não possui uma conta?</TextTest>
        <SendButton onClick={handleSignUp}>Cadastrar</SendButton>
      </Content>
    </SignInBodyDiv>
  );
}
