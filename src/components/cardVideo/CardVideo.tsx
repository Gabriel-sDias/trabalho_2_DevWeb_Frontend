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
export function CardVideo({
  handleNavigaiton,
  userName,
  videoTitle,
  videoThumbnail,
  userProfilePicture,
  videoUrl,
}: props) {
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
