import { DashBoardBody, TextButton, TextButtonText } from "./DashBoardStyled";
import { useNavigate } from "react-router-dom";
import { House, UserCirclePlus, Books } from "@phosphor-icons/react";
import { useContext } from "react";
import AuthContext from "../../context/Auth";
//Componente auxiliar de navegação
export function DashBoard() {
  const navigate = useNavigate();
  const { signed } = useContext(AuthContext);
  //funções de navegação
  function handleHome() {
    navigate("/");
  }
  function handleYourChanel() {
    if (!signed) {
      alert("Você precisa estar logado para acessar seu canal.");
    }
    navigate("/yourchanel");
  }
  function handleMotivation() {
    navigate("/motivation");
  }
  //retornando componente que representa o DashBoard
  return (
    <DashBoardBody>
      <TextButton onClick={handleHome}>
        <House size={32} color="#fffafa" />
        <TextButtonText>Inicio</TextButtonText>
      </TextButton>
      <TextButton onClick={handleYourChanel}>
        <UserCirclePlus size={32} color="#fffafa" />
        <TextButtonText>Seu canal</TextButtonText>
      </TextButton>
      <TextButton onClick={handleMotivation}>
        <Books size={32} color="#fffafa" />
        <TextButtonText>Motivação</TextButtonText>
      </TextButton>
    </DashBoardBody>
  );
}
