import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../website.jsx";
import CivilianUsePage from "./pages/CivilianUsePage.jsx";
import DroneMakersPage from "./pages/DroneMakersPage.jsx";
import GroundDefensePage from "./pages/GroundDefensePage.jsx";
import VexaPage from "./pages/VexaPage.jsx";

// Start each page at the top, or at its #anchor. The homepage handles its own anchors.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash) return;
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vexa" element={<VexaPage />} />
        <Route path="/solutions/drone-makers" element={<DroneMakersPage />} />
        <Route path="/solutions/ground-defense" element={<GroundDefensePage />} />
        <Route path="/solutions/civilian-use" element={<CivilianUsePage />} />
      </Routes>
    </>
  );
}
