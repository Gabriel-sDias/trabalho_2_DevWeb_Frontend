import styled from "styled-components";
//arquivo de estilização, substitui o CSS
export const CardBody = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-inline: 60px;
`;

export const VideoDiv = styled.div`
  width: 100%;
  height: 300px;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const VideoInfoDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
`;
export const ProfileImageDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const UserProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;
export const VideoTItleAndUserInfoDiv = styled.div`
  width: 355px;
  max-width: 355px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const VideoTitle = styled.h4`
  color: white;
`;

export const UserInfo = styled.text`
  color: gray;
  margin-top: -10px;
`;
