import { VideoListBody } from "./VideoListStyled";
import { useState, useEffect } from "react";
import { CardVideo } from "../cardVideo/CardVideo";
import api from "../../service/api";
import LoadingSpinner from "../loading/Loading";
import { useNavigate } from "react-router-dom";

//Componete que exibi todos os videos cadastrados dentro da aplicação
export function VideoList() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigaiton = useNavigate();
  //função de navegação
  function handleNavigate(id: string, videoUrl: string) {
    navigaiton("/player/" + id, { state: { video: videoUrl } });
  }
  //requisição de dados para api
  const response = async () => {
    await api
      .get("videos/getVideos")
      .then((response) => {
        //colocando os dados dentro de um state
        setVideos(response.data);
        setIsLoading(false);
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  //função para atualizar a pagina apos a requisição dos dados
  useEffect(() => {
    if (isLoading) {
      response();
    }
  }, [videos]);

  //retornando componente que lista todos os dados recebidos usando o card de video.
  return (
    <VideoListBody>
      {isLoading ? (
        //componente que representa o carregamento da requisição
        <LoadingSpinner />
      ) : (
        videos.map((video) => {
          return (
            <CardVideo
              handleNavigaiton={() =>
                handleNavigate((video as any).id, (video as any).data.videoUrl)
              }
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
