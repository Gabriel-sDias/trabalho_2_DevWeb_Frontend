import { VideoListBody } from "./YourChanelVideoListStyled";
import { useState, useEffect } from "react";
import { CardVideo } from "../cardVideo/CardVideo";
import api from "../../service/api";
import LoadingSpinner from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import { YourCardVideo } from "../yourCardVideo/YourCardVideo";
export function YourChanelVideoList() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigaiton = useNavigate();

  function handleNavigate() {
    navigaiton("/");
  }

  const response = async () => {
    await api
      .get("videos/getVideos")
      .then((response) => {
        setVideos(response.data);
        setIsLoading(false);
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isLoading) {
      response();
    }
  }, [videos]);

  return (
    <VideoListBody>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        videos.map((video) => {
          return (
            <YourCardVideo
              handleNavigaiton={handleNavigate}
              userName={(video as any).data.user.name}
              userProfilePicture={(video as any).data.user.profilePicture}
              videoThumbnail={(video as any).data.thumbnailUrl}
              videoTitle={(video as any).data.title}
              videoIdentifier={(video as any).id}
              key={(video as any).id}
            />
          );
        })
      )}
    </VideoListBody>
  );
}
