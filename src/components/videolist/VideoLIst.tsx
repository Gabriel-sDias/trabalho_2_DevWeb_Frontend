import { VideoListBody } from "./VideoListStyled";
import { useState, useEffect } from "react";
import { CardVideo } from "../cardVideo/CardVideo";
import api from "../../service/api";
import LoadingSpinner from "../loading/Loading";
import { useNavigate } from "react-router-dom";

export function VideoList() {
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
            <CardVideo
              handleNavigaiton={handleNavigate}
              userName={(video as any).data.user.name}
              userProfilePicture={(video as any).data.user.profilePicture}
              videoThumbnail={(video as any).data.thumbnailUrl}
              videoTitle={(video as any).data.title}
              videoUrl={(video as any).data.videoUrl}
              key={(video as any).id}
            />
          );
        })
      )}
    </VideoListBody>
  );
}
