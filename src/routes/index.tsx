import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { Motivation } from "../screens/motivation/Motivation";
import { YourChanel } from "../screens/yourChanel/YourChanel";
import { AddVideo } from "../screens/managerVideos/AddVideo";
import { SearchResult } from "../screens/searchResult/SearchResult";
import { EditVideo } from "../screens/editVideo/EditVideo";
import { DeleteVideo } from "../screens/deleteVideo/DeleteVideo";
import { FullVideoPlayer } from "../screens/videoplayer/VideoPlayer";
import { SignIn } from "../screens/signIn/SignI";
import { SignUp } from "../screens/signUp/SignUp";
import { PrivateRoutes } from "./privateRoute";
//arquivo de configuração das rotas presentes dentro da aplicação
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motivation" element={<Motivation />} />
      <Route path="/search" element={<SearchResult />} />
      <Route
        path="/yourchanel"
        element={
          <PrivateRoutes>
            <YourChanel />
          </PrivateRoutes>
        }
      />
      <Route
        path="/addvideo"
        element={
          <PrivateRoutes>
            <AddVideo />
          </PrivateRoutes>
        }
      />
      <Route
        path="/editVideo"
        element={
          <PrivateRoutes>
            <EditVideo />
          </PrivateRoutes>
        }
      />
      <Route
        path="/deleteVideo"
        element={
          <PrivateRoutes>
            <DeleteVideo />
          </PrivateRoutes>
        }
      />

      <Route path="/player/:id" element={<FullVideoPlayer />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
}
