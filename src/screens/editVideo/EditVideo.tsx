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
} from "./EditVideoStyled";
import { Header } from "../../components/header/Header";
import { DashBoard } from "../../components/dashBoard/DashBoard";
import { storageRef } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Play } from "@phosphor-icons/react";
import thumbnailDefault from "../../assets/images/ThumnailDefault.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import api from "../../service/api";
export function EditVideo() {
  const { state } = useLocation();
  const { videoId } = state;
  const navigation = useNavigate();

  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  let data = {
    thumbnailUrl: thumbnailUrl ? thumbnailUrl : undefined,
    videoId: videoId,
    title: title ? title : undefined,
    userId: "315151",
  };
  const response = async () => {
    api
      .put("videos/updateVideo", data)
      .then((response) => {
        console.log(response);
        navigation("/yourchanel");
        alert("video editado com sucesso!");
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

  const handleSubmitImage = () => {
    if (!title && !thumbnail) {
      return alert("Escolha um video e uma imagem.");
    }

    if (!thumbnail && title) {
      response();
      return;
    }

    const imageBlob = new Blob([thumbnailFile]);
    const storage = ref(storageRef, `images/${(thumbnailFile as any).name}`);
    const uploadTask = uploadBytesResumable(storage, imageBlob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            setThumbnailUrl(downloadURL);
            data.thumbnailUrl = downloadURL;
            response();
          }
        );
      }
    );
  };

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
                Escolha a nova thumbnail para seu video
                <VideoFileInput
                  id="imageFile"
                  type="file"
                  onChange={onImageChange}
                />
              </Text>
            </FormBody>
            <TitleTextArea
              placeholder="Digite um novo titulo"
              onChange={(e) => setTitle(e.target.value)}
            ></TitleTextArea>
            <SendButton onClick={handleSubmitImage}>Editar</SendButton>
          </NewVideoDiv>
        </ContentViewDiv>
      </ViewDiv>
    </AddVideoBodyDiv>
  );
}
