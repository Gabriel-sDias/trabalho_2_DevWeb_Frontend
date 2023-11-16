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
        <UserProfilePicture src="https://firebasestorage.googleapis.com/v0/b/projeto-barbearia-4cfe5.appspot.com/o/23c4617c-2817-4b5b-bb2d-db690d4a18f2.jpg?alt=media&token=aec5cea2-afc0-4a82-84ac-033beea4d179" />
      </UserProfilePictureDiv>
    </HeaderBody>
  );
}
