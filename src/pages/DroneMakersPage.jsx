import ScenarioPage from "../components/ScenarioPage.jsx";
import { scenarios } from "../content/vexa.js";

export default function DroneMakersPage() {
  return <ScenarioPage scenario={scenarios[0]} />;
}
