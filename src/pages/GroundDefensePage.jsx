import ScenarioPage from "../components/ScenarioPage.jsx";
import { scenarios } from "../content/vexa.js";

export default function GroundDefensePage() {
  return <ScenarioPage scenario={scenarios[1]} />;
}
