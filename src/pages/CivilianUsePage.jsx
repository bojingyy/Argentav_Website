import ScenarioPage from "../components/ScenarioPage.jsx";
import { scenarios } from "../content/vexa.js";

export default function CivilianUsePage() {
  return <ScenarioPage scenario={scenarios[2]} />;
}
