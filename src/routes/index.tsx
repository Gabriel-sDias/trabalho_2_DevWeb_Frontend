import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { Motivation } from "../screens/motivation/Motivation";
import { YourChanel } from "../screens/yourChanel/YourChanel";
import { AddVideo } from "../screens/managerVideos/AddVideo";
import { SearchResult } from "../screens/searchResult/SearchResult";
import { EditVideo } from "../screens/editVideo/EditVideo";
import { DeleteVideo } from "../screens/deleteVideo/DeleteVideo";
import { FullVideoPlayer } from "../screens/videoplayer/VideoPlayer";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/yourchanel" element={<YourChanel />} />
        <Route path="/addvideo" element={<AddVideo />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/editVideo" element={<EditVideo />} />
        <Route path="/deleteVideo" element={<DeleteVideo />} />
        <Route path="/player/:id" element={<FullVideoPlayer />} />
      </Routes>
    </Router>
  );
}
