import { Link } from "react-router-dom";

export default function CivilianUsePage() {
  return (
    <div className="app-shell min-h-screen pb-20 text-white">
      <div className="grid-overlay" aria-hidden="true" />
      <main className="mx-auto w-full max-w-7xl px-6 pt-16 lg:px-8">
        <h1 className="font-['Sora'] text-4xl font-bold md:text-6xl">Civilian Use</h1>
        <p className="mt-6 text-lg text-[#c8d8f3]">This page is intentionally blank for now.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl border border-[#6680ab] px-5 py-3 font-semibold text-[#d8e9ff] transition hover:border-[#95b8ea]"
        >
          Back To Home
        </Link>
      </main>
    </div>
  );
}
