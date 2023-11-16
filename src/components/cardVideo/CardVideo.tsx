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
} from "./CardVideoStyled";
type props = {
  handleNavigaiton: any;
  videoTitle: string;
  videoThumbnail: string;
  videoUrl: string;
  userProfilePicture: string;
  userName: string;
};
//Card generico para representar o video cadastrado
export function CardVideo({
  handleNavigaiton,
  userName,
  videoTitle,
  videoThumbnail,
  userProfilePicture,
  videoUrl,
}: props) {
  //retornando componente que representa o Card generico do video
  return (
    <CardBody onClick={handleNavigaiton}>
      <VideoDiv>
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
      </VideoInfoDiv>
    </CardBody>
  );
}
