import {
  MotivationBodyDiv,
  TextTest,
  ContentViewDiv,
  ViewDiv,
} from "./YourChanelStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";
export function YourChanel() {
  return (
    <MotivationBodyDiv>
      <Header />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <YourChanelBanner />
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
