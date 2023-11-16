import {
  MotivationBodyDiv,
  ContentViewDiv,
  ViewDiv,
  NewVideo,
  NewVideoDiv,
  TextButton,
  TextButtonText,
} from "./VideoPlayerStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { YourChanelBanner } from "../../components/yourChanelBanner/YourChanelBanner";
import React, { useRef, useState, useEffect } from "react";
import { YourChanelVideoList } from "../../components/yourChanelVideoList/YourChanelVideoList";
import { useLocation } from "react-router-dom";
import { Play } from "@phosphor-icons/react";

export function FullVideoPlayer() {
  const { state } = useLocation();
  const { video } = state;
  const videoPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (video) {
      if (isPlaying) {
        videoPlayer.current.pause();
      } else {
        videoPlayer.current.play();
      }
    }
  }, [isPlaying]);

  return (
    <MotivationBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <ContentViewDiv>
          <NewVideoDiv>
            <NewVideo ref={videoPlayer} src={video} />
            <TextButton onClick={() => setIsPlaying(!isPlaying)}>
              <Play size={32} color="#fffafa" />
              <TextButtonText>{isPlaying ? "Play" : "Pause"}</TextButtonText>
            </TextButton>
          </NewVideoDiv>
        </ContentViewDiv>
      </ViewDiv>
    </MotivationBodyDiv>
  );
}
