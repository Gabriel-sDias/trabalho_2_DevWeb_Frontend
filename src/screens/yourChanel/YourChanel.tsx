import {
  MotivationBodyDiv,
  TextTest,
  ContentViewDiv,
  ViewDiv,
} from "./YourChanelStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";
import { CardVideo } from "../../components/cardVideo/CardVideo";
import { VideoList } from "../../components/videolist/VideoLIst";
export function YourChanel() {
  return (
    <MotivationBodyDiv>
      <Header />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <YourChanelBanner />
          <VideoList />
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
