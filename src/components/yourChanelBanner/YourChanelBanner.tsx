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
import { useContext } from "react";
import AuthContext from "../../context/Auth";
import DefaltAvatar from "../../assets/images/User-avatar.svg.png";
export function YourChanelBanner() {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  function handleAddVideo() {
    navigation("/addvideo");
  }
  return (
    <HeaderBody>
      <LogoDiv>
        <Logo
          src={
            (user as any).result.getUser.data.profilePicture == "empty"
              ? DefaltAvatar
              : (user as any).result.getUser.data.profilePicture
          }
        />
      </LogoDiv>
      <UserInfoDiv>
        <UserName>{(user as any).result.getUser.data.name}</UserName>
        <UserInfoText>
          @{(user as any).result.getUser.data.name} ‧{" "}
          {(user as any).result.getUser.data.followers} inscritos
        </UserInfoText>
        <ManagerVideosButton onClick={handleAddVideo}>
          Adicionar Video
        </ManagerVideosButton>
      </UserInfoDiv>
    </HeaderBody>
  );
}
