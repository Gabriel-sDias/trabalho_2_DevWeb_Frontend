import {
  HeaderBody,
  InputDiv,
  Logo,
  LogoDiv,
  SearchInput,
  UserProfilePicture,
  UserProfilePictureDiv,
  SearchButton,
} from "./HearderStyled";
import MiniYoutube from "../../assets/images/MiniYoutube_cropped.png";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderBody>
      <LogoDiv>
        <Logo src={MiniYoutube} />
      </LogoDiv>
      <InputDiv>
        <SearchInput placeholder="Pesquisar" />
        <SearchButton>
          <MagnifyingGlass size={28} color="#fcfcfc" />
        </SearchButton>
      </InputDiv>
      <UserProfilePictureDiv>
        <UserProfilePicture />
      </UserProfilePictureDiv>
    </HeaderBody>
  );
}
