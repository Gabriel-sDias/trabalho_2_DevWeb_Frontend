import { HomeBodyDiv, TextTest, ViewDiv, ContentViewDiv } from "./HomeStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { VideoList } from "../../components/videolist/VideoLIst";
//Tela inical da aplicação
export function Home() {
  return (
    <HomeBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <VideoList />
        </ContentViewDiv>
      </ViewDiv>
    </HomeBodyDiv>
  );
}
