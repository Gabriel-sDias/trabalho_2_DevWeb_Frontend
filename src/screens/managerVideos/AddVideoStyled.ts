import { styled } from "styled-components";

export const AddVideoBodyDiv = styled.div`
  padding: 0;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  display: flex;
  background-color: black;
  flex-direction: column;
`;

export const TextTest = styled.h1`
  size: 2em;
  color: #fff;
`;
export const ViewDiv = styled.div`
  width: 100vw;
  width: 100vw;
  height: 95vh;
  flex-direction: row;
  display: flex;
`;

export const ContentViewDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 85vw;
  max-width: 80vw;
  justify-content: space-around;
  word-wrap: break-word;
  overflow: scroll;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const NewVideoDiv = styled.div`
  width: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const VideoThumbnail = styled.img`
  width: 100%;
  height: 350px;
`;

export const NewVideo = styled.video`
  width: 100%;
  height: 400px;
`;

export const TitleTextArea = styled.textarea`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;
export const TextButton = styled.div`
  width: 30em;
  height: 5em;
  flex-direction: row;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TextButtonText = styled.text`
  color: white;
  margin-left: 0.5em;
`;
export const VideoFileInput = styled.input``;

export const ThumbFileInput = styled.input``;

export const FormBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const Text = styled.text`
  color: white;
  margin-bottom: 30px;
`;
export const SendButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
