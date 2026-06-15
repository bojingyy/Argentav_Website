import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";

export default function DroneMakersPage() {
  return (
    <div className="app-shell min-h-screen pb-20 text-black">
      <div className="grid-overlay" aria-hidden="true" />
      <TopBar />

      <main className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-8">
        <Link
          to="/"
          className="inline-flex rounded-xl border border-slate-300 px-5 py-3 font-semibold text-blue-900 transition hover:border-blue-900"
        >
          Back To Home
        </Link>
        <h1 className="mt-6 font-['Sora'] text-4xl font-bold md:text-6xl">Drone Makers</h1>
        <p className="mt-6 text-lg text-blue-900">This page is intentionally blank for now.</p>
      </main>
    </div>
  );
}
