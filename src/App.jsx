import { Route, Routes } from "react-router-dom";
import HomePage from "../website.jsx";
import CivilianUsePage from "./pages/CivilianUsePage.jsx";
import DroneMakersPage from "./pages/DroneMakersPage.jsx";
import GroundDefensePage from "./pages/GroundDefensePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solutions/drone-makers" element={<DroneMakersPage />} />
      <Route path="/solutions/ground-defense" element={<GroundDefensePage />} />
      <Route path="/solutions/civilian-use" element={<CivilianUsePage />} />
    </Routes>
  );
}
