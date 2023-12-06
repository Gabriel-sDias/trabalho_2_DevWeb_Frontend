import {
  SignInBodyDiv,
  ContentViewDiv,
  Content,
  SendButton,
  TextTest,
} from "./SignUpStyled";
import { useNavigate } from "react-router-dom";
import GenericInput from "../../components/SignInInput/Input";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/Auth";
import api from "../../service/api";
//tela principal do perfil do usuario.
export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  function handleSignUp() {
    navigate("signUp");
  }

  function handleLogin() {
    if (!email || !password || !name) {
      alert("Preencha todos os campos");
      return;
    }
    handleNewUser();
  }

  const handleNewUser = async () => {
    const request = await api
      .post("user/register", {
        name: name,
        email: email,
        password: password,
        profilePicture: "empty",
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/signIn");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <SignInBodyDiv>
      <Content>
        <GenericInput
          label="Nome"
          input={{
            id: "name-input",

            name: "name-input",
            placeholder: "name",
            onChange: (e) => setName(e.target.value),
          }}
        />
        <GenericInput
          label="Email"
          input={{
            id: "Email-input",
            type: "email",
            name: "email-input",
            placeholder: "exemplo@gmail.com",
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
        <SendButton onClick={handleLogin}>Cadastrar</SendButton>
      </Content>
    </SignInBodyDiv>
  );
}
