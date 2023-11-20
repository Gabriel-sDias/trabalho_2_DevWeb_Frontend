import React, { useState, useRef, useEffect } from "react";
import {
  AddVideoBodyDiv,
  ContentViewDiv,
  ViewDiv,
  NewVideo,
  NewVideoDiv,
  TitleTextArea,
  TextButton,
  TextButtonText,
  ThumbFileInput,
  VideoFileInput,
  VideoThumbnail,
  FormBody,
  Text,
  SendButton,
} from "./AddVideoStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { storageRef } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Play } from "@phosphor-icons/react";
import thumbnailDefault from "../../assets/images/ThumnailDefault.png";
import { useNavigate } from "react-router-dom";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import api from "../../service/api";
import { UserProfile } from "../../assets/images/UserProfile";

//tela para adicionar um video feito pelo usuario.
export function AddVideo() {
  const navigation = useNavigate();
  const videoPlayer = useRef<any>();
  const [progressPorcent, setPorgessPorcent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [video, setVideo] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  let data = {
    user: {
      name: "Gabriel",
      profilePicture: UserProfile,
      userId: "315151",
    },
    thumbnailUrl: thumbnailUrl,
    videoUrl: videoUrl,
    title: title,
  };
  const response = async () => {
    api
      .post("videos/register", data)
      .then((response) => {
        console.log(response);
        navigation("/yourchanel");
        alert("video criado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setThumbnailFile(event.target.files[0]);
      setThumbnail(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onVideoChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setVideoFile(event.target.files[0]);
      setVideo(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmitImage = () => {
    if (!video || !thumbnail) {
      return alert("Escolha um video e uma imagem.");
    }

    const imageBlob = new Blob([thumbnailFile]);
    const storage = ref(storageRef, `images/${(thumbnailFile as any).name}`);
    const uploadTask = uploadBytesResumable(storage, imageBlob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            setThumbnailUrl(downloadURL);
            data.thumbnailUrl = downloadURL;
            console.log("ta chegando aqui?", downloadURL);
            handleSubmitVideo();
          }
        );
      }
    );
  };

  const handleSubmitVideo = () => {
    const videoBlob = new Blob([videoFile]);
    const storage = ref(storageRef, `videos/${(videoFile as any).name}`);
    const uploadTask = uploadBytesResumable(storage, videoBlob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            await setVideoUrl(downloadURL);
            data.videoUrl = downloadURL;
            console.log("ta chegando aqui tambem?", downloadURL);

            response();
          }
        );
      }
    );
  };

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
    <AddVideoBodyDiv>
      <Header onSearch={false} searchTitle="" />
      <ViewDiv>
        <DashBoard />
        <ContentViewDiv>
          <NewVideoDiv>
            <VideoThumbnail src={thumbnail ? thumbnail : thumbnailDefault} />
            <FormBody>
              <Text>
                Escolha o video que vocês deseja postar
                <VideoFileInput
                  id="imageFile"
                  type="file"
                  onChange={onVideoChange}
                />
              </Text>
            </FormBody>
            <FormBody>
              <Text>
                Escolha uma imagem para sua thumbnail
                <ThumbFileInput
                  id="videoFile"
                  type="file"
                  onChange={onImageChange}
                />
              </Text>
              <TitleTextArea
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Escreva o titulo do seu video"
              ></TitleTextArea>
              <SendButton onClick={handleSubmitImage}>Enviar</SendButton>
              {!videoUrl && (
                <p style={{ color: "white" }}>{progressPorcent}%</p>
              )}
            </FormBody>
          </NewVideoDiv>
          {video ? (
            <NewVideoDiv>
              <NewVideo
                ref={videoPlayer}
                src="https://firebasestorage.googleapis.com/v0/b/devweb-80e3f.appspot.com/o/2023-07-03%2022-40-25.mp4?alt=media&token=63cb41c8-3988-4794-aac0-5e3684baf8a3"
              />
              <TextButton onClick={() => setIsPlaying(!isPlaying)}>
                <Play size={32} color="#fffafa" />
                <TextButtonText>{isPlaying ? "Play" : "Pause"}</TextButtonText>
              </TextButton>
            </NewVideoDiv>
          ) : (
            <></>
          )}
        </ContentViewDiv>
      </ViewDiv>
    </AddVideoBodyDiv>
  );
}
