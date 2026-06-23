import { Link } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";

export default function GroundDefensePage() {
  return (
    <div className="app-shell min-h-screen pb-20 text-white">
      <div className="grid-overlay" aria-hidden="true" />
      <TopBar />

      <main className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-8">
        <Link
          to="/"
          className="inline-flex rounded-xl border border-slate-500 px-5 py-3 font-semibold text-slate-100 transition hover:border-blue-300 hover:text-white"
        >
          Back To Home
        </Link>
        <h1 className="mt-6 font-['Sora'] text-4xl font-bold md:text-6xl">Ground Defense</h1>
        <p className="mt-6 text-lg text-blue-100">This page is intentionally blank for now.</p>
      </main>
    </div>
  );
}
