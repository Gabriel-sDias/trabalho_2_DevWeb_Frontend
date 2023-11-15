import { styled } from "styled-components";

export const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  background-color: black;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4em;
  border-bottom: 1px ridge rgb(81, 81, 82);
`;
export const LogoDiv = styled.div`
  width: 10em;
  height: 100%;
  background-color: black;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  margin-left: 3.5em;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const UserInfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;
export const UserName = styled.h2`
  color: white;
`;
export const UserInfoText = styled.text`
  color: gray;
`;
export const ManagerVideosButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  margin-top: 0.5em;
`;
