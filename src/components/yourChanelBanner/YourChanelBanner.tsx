import {
  HeaderBody,
  UserInfoDiv,
  Logo,
  LogoDiv,
  UserInfoText,
  UserName,
  ManagerVideosButton,
} from "./YourChanelBannerStyled";
import { useNavigate } from "react-router-dom";
//Componente que server como um Banner exibindo dados do perfil do usuairo.
import { UserProfile } from "../../assets/images/UserProfile";
export function YourChanelBanner() {
  const navigation = useNavigate();
  function handleAddVideo() {
    navigation("/addvideo");
  }
  return (
    <HeaderBody>
      <LogoDiv>
        <Logo src={UserProfile} />
      </LogoDiv>
      <UserInfoDiv>
        <UserName>Zezinho gameplays</UserName>
        <UserInfoText>@zezinhoGamplays ‧ 100 inscritos</UserInfoText>
        <ManagerVideosButton onClick={handleAddVideo}>
          Adicionar Video
        </ManagerVideosButton>
      </UserInfoDiv>
    </HeaderBody>
  );
}
