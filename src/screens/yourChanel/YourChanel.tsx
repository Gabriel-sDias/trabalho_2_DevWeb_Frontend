import { MotivationBodyDiv, ContentViewDiv, ViewDiv } from "./YourChanelStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";

import { YourChanelVideoList } from "../../components/yourChanelVideoList/YourChanelVideoList";
export function YourChanel() {
  return (
    <MotivationBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <YourChanelBanner />
          <YourChanelVideoList />
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
