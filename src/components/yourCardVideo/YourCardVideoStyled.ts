import styled from "styled-components";

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
  cursor: pointer;
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
  align-items: center;
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
  width: 330px;
  max-width: 330px;
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

export const DotButton = styled.button`
  height: 50%;
  border: none;
  background-color: black;
  cursor: pointer;
`;

export const MenuDiv = styled.div`
  position: relative;

  > .menu-trigger {
    display: inline-grid;
    place-items: center;
    padding: 0.5em;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const MenuContent = styled.div`
  background: #ffc;
  border: 1px solid #ccc;
  border-radius: 0.3em;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 10em;
  margin-top: 0.5em;
  transition: opacity 0.3s ease;

  &[data-aberto="true"] {
    > .menu-trigger > .fa-plus {
      display: none;
    }

    > .menu-menu {
      opacity: 1;
      visibility: visible;
    }
  }

  &[data-aberto="false"] {
    > .menu-trigger > .fa-minus {
      display: none;
    }

    > .menu-menu {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s step-end;
    }
  }
`;
