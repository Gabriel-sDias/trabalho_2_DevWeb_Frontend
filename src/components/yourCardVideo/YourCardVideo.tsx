import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
import {
  CardBody,
  ProfileImageDiv,
  UserProfilePicture,
  VideoDiv,
  VideoInfoDiv,
  VideoTItleAndUserInfoDiv,
  VideoThumbnail,
  UserInfo,
  VideoTitle,
  DotButton,
  MenuContent,
  MenuDiv,
} from "./YourCardVideoStyled";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./YourCardVideoCss.css";
type props = {
  handleNavigaiton: any;
  videoTitle: string;
  videoThumbnail: string;
  videoIdentifier: string;
  userProfilePicture: string;
  userName: string;
};
export function YourCardVideo({
  handleNavigaiton,
  userName,
  videoTitle,
  videoThumbnail,
  userProfilePicture,
  videoIdentifier,
}: props) {
  const menuRef = useRef<any>();
  const navigation = useNavigate();
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
  function handleEditVideo(videoId: string) {
    navigation("/editVideo", { state: { videoId: videoId } });
  }
  function handleDeleteVideo(videoId: string) {
    navigation("/deleteVideo", { state: { videoId: videoId } });
  }
  return (
    <CardBody>
      <VideoDiv onClick={handleNavigaiton}>
        <VideoThumbnail src={videoThumbnail} />
      </VideoDiv>
      <VideoInfoDiv>
        <ProfileImageDiv>
          <UserProfilePicture src={userProfilePicture} />
        </ProfileImageDiv>
        <VideoTItleAndUserInfoDiv>
          <VideoTitle>{videoTitle}</VideoTitle>
          <UserInfo>{userName}</UserInfo>
        </VideoTItleAndUserInfoDiv>

        <div className="menu" id="menu" ref={menuRef} data-aberto="false">
          <DotButton onClick={openMenu}>
            <DotsThreeOutlineVertical size={32} color="#ffffff" weight="fill" />
          </DotButton>

          <div className="menu-menu">
            <button
              className="button-2"
              onClick={() => handleEditVideo(videoIdentifier)}
            >
              Editar
            </button>
            <button
              className="button-2"
              onClick={() => handleDeleteVideo(videoIdentifier)}
            >
              Excluir
            </button>
          </div>
        </div>
      </VideoInfoDiv>
    </CardBody>
  );
}
