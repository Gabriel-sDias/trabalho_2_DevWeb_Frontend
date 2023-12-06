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
import DefaltAvatar from "../../assets/images/User-avatar.svg.png";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { UserProfile } from "../../assets/images/UserProfile";
import AuthContext from "../../context/Auth";
import "./ModalMenu.css";
type props = {
  onSearch: boolean;
  searchTitle: string;
};
//Componente de navagação, o cabeçalho do site.

export function Header({ onSearch, searchTitle }: props) {
  const [search, setSearch] = useState("");
  const menuRef = useRef<any>();
  const { signed, signOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function openMenu() {
    const $menu = document.getElementById("menu");

    let state = menuRef.current.dataset.aberto;
    if (state == "false") {
      state = "true";
    } else {
      state = "false";
    }
    menuRef.current.dataset.aberto = state;
  }

  //funções de navagação
  function handleYourChanel() {
    navigate("/yourchanel");
  }
  function handleHome() {
    navigate("/");
  }
  function handleLogin() {
    navigate("/signIn");
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
      <UserProfilePictureDiv onClick={openMenu}>
        <div className="menuHeader" id="menu" ref={menuRef} data-aberto="false">
          <div className="menu-menuHeader">
            {signed ? (
              <>
                <button className="button-2" onClick={handleYourChanel}>
                  Meu canal
                </button>
                <button className="button-2" onClick={signOut}>
                  Sair
                </button>
              </>
            ) : (
              <>
                <button className="button-2" onClick={handleLogin}>
                  Login
                </button>
              </>
            )}
          </div>
        </div>
        <UserProfilePicture
          src={
            signed
              ? (user as any).result.getUser.data.profilePicture == "empty"
                ? DefaltAvatar
                : (user as any).result.getUser.data.profilePicture
              : DefaltAvatar
          }
        />
      </UserProfilePictureDiv>
    </HeaderBody>
  );
}
