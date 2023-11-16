import {
  MotivationBodyDiv,
  ContentViewDiv,
  ViewDiv,
  TextTest,
  DeleteInput,
  SendButton,
} from "./DeleteVideoStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";
import { useLocation } from "react-router-dom";
import { YourChanelVideoList } from "../../components/yourChanelVideoList/YourChanelVideoList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
export function DeleteVideo() {
  const navigation = useNavigate();
  const { state } = useLocation();
  const { videoId } = state;
  const [deleteVideo, setDeleteVideo] = useState("");
  const response = async () => {
    api
      .delete("videos/deleteVideo/" + videoId)
      .then((response) => {
        console.log(response);
        navigation("/yourchanel");
        alert("video deletado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleDeleteVideo() {
    if (deleteVideo == "excluir" || deleteVideo == "Excluir") {
      response();
      return;
    }
    alert("Digite a palavra solicitada corretamente");
  }
  return (
    <MotivationBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <TextTest>
            Digite excluir no campo abaixo para excluir seu video.
          </TextTest>
          <DeleteInput
            placeholder="excluir"
            onChange={(e) => setDeleteVideo(e.target.value)}
          />
          <SendButton onClick={handleDeleteVideo}>Deletar</SendButton>
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
