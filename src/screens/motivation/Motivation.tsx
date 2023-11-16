import {
  MotivationBodyDiv,
  TextTest,
  ContentViewDiv,
  ViewDiv,
} from "./MotivationStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";

export function Motivation() {
  return (
    <MotivationBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <TextTest>
            ASDsdnoasdasldsakdjnsalkdnaskdsandlksandlkasndlksandlksandlkasndlksnadlknsaldknsalknlkasndlksandlknasldknaslkdnaslkdnsalkndslakndlkanlk
            asdsadsnadlaskdnasldknsalknaslkçdnlaskndlsakndlskandslandlsakndlskandlskandlskandlkasndlkasndlsandlkasndlkasndklansldknaskndlk
          </TextTest>
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
