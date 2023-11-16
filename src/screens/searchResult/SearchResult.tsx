import {
  MotivationBodyDiv,
  TextTest,
  ContentViewDiv,
  ViewDiv,
} from "./SearchResultStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";
import { CardVideo } from "../../components/cardVideo/CardVideo";
import { VideoList } from "../../components/videolist/VideoLIst";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../service/api";
import LoadingSpinner from "../../components/loading/Loading";
import { AxiosResponse } from "axios";
//tela que exibe o resultado das pesquisa feita pelo usuario
export function SearchResult() {
  const { state } = useLocation();
  const { search } = state;
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const request = async () => {
    await api
      .post("videos/getVideosByTitle", { title: search })
      .then((response) => {
        setResult(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log(search);
    if (isLoading) {
      request();
    }
  }, [result]);

  return (
    <MotivationBodyDiv>
      <Header onSearch={true} searchTitle={search} />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            result.map((video: any) => {
              return (
                <CardVideo
                  handleNavigaiton={() => {}}
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
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
