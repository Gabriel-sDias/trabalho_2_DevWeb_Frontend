import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { Motivation } from "../screens/motivation/Motivation";
import { YourChanel } from "../screens/yourChanel/YourChanel";
export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/yourchanel" element={<YourChanel />} />
      </Routes>
    </Router>
  );
}
