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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserProfile } from "../../assets/images/UserProfile";

type props = {
  onSearch: boolean;
  searchTitle: string;
};
//Componente de navagação, o cabeçalho do site.

export function Header({ onSearch, searchTitle }: props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //funções de navagação
  function handleYourChanel() {
    navigate("/yourchanel");
  }
  function handleHome() {
    navigate("/");
  }
  function handleSearch() {
    navigate("/search", { state: { search: search } });
  }
  //retornando componente que representa o cabeçalho
  return (
    <HeaderBody>
      <LogoDiv onClick={handleHome}>
        <Logo src={MiniYoutube} />
      </LogoDiv>
      <InputDiv>
        <SearchInput
          placeholder="Pesquisar"
          value={onSearch ? searchTitle : undefined}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <MagnifyingGlass size={28} color="#fcfcfc" />
        </SearchButton>
      </InputDiv>
      <UserProfilePictureDiv onClick={handleYourChanel}>
        <UserProfilePicture src={UserProfile} />
      </UserProfilePictureDiv>
    </HeaderBody>
  );
}
