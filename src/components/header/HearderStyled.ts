import { styled } from "styled-components";
//arquivo de estilização, substitui o CSS
export const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 4em;
  z-index: 999;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const LogoDiv = styled.div`
  width: 10em;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3.5em;
`;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
`;

export const InputDiv = styled.div`
  width: 40em;
  height: 100%;

  align-items: center;
  justify-content: center;
  display: flex;
`;
export const SearchInput = styled.input`
  width: 38em;
  height: 40px;
  border-radius: 20px 0px 0px 20px;
  border-width: 1px;
  text-transform: lowercase;
`;
export const SearchButton = styled.button`
  width: 5em;
  height: 45.8px;
  border-radius: 0px 40px 40px 0px;
  margin-right: 2px;
  border-left: none;
  background-color: #2e2e2e;
  border: none;
`;

export const UserProfilePictureDiv = styled.div`
  width: 8em;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;
