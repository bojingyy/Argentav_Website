import { Link } from "react-router-dom";
import logoImage from "../../logo_v2.png";
import { ChevronDown } from "lucide-react";

export default function GroundDefensePage() {
  return (
    <div className="app-shell min-h-screen pb-20 text-white">
      <div className="grid-overlay" aria-hidden="true" />
      <header className="fixed left-1/2 top-5 z-40 w-[calc(100%-1.25rem)] max-w-7xl -translate-x-1/2 rounded-2xl border border-[#2a3d63] bg-[#081427]/90 px-4 py-3 shadow-[0_10px_30px_rgba(2,8,18,0.45)] backdrop-blur-md md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 overflow-visible">
            <img src={logoImage} alt="Argentav Vision logo" className="h-20 w-20 scale-110 object-contain md:h-20 md:w-20 md:scale-125" />
            <div className="ml-1 font-['Sora'] text-sm font-semibold tracking-[0.2em] text-[#d8e9ff] md:ml-2 md:text-lg">ARGENTAV VISION</div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs text-[#b4c7ea] md:text-sm">
            <div className="group relative">
              <button
                type="button"
                className="flex cursor-default items-center gap-1 rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white"
              >
                Home
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className="absolute left-0 top-full z-50 pointer-events-none pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="min-w-[220px] rounded-xl border border-[#2a3d63] bg-[#081427]/95 p-2 shadow-[0_12px_28px_rgba(2,8,18,0.5)] backdrop-blur-md">
                  <Link to="/#drone-makers" className="block rounded-lg px-3 py-2 text-[#d8e9ff] transition hover:bg-[#0b1b35] hover:text-white">For Drone Makers</Link>
                  <Link to="/#ground-defense" className="mt-1 block rounded-lg px-3 py-2 text-[#d8e9ff] transition hover:bg-[#0b1b35] hover:text-white">For Ground Defense Builders</Link>
                  <Link to="/#civilian-use" className="mt-1 block rounded-lg px-3 py-2 text-[#d8e9ff] transition hover:bg-[#0b1b35] hover:text-white">For Civilian Use</Link>
                  <Link to="/#contact" className="mt-1 block rounded-lg px-3 py-2 text-[#d8e9ff] transition hover:bg-[#0b1b35] hover:text-white">Contact</Link>
                </div>
              </div>
            </div>
            <Link to="/solutions/drone-makers" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Drone Makers</Link>
            <Link to="/solutions/ground-defense" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Ground Defense</Link>
            <Link to="/solutions/civilian-use" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Civilian Use</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 pt-40 lg:px-8">
        <Link
          to="/"
          className="inline-flex rounded-xl border border-[#6680ab] px-5 py-3 font-semibold text-[#d8e9ff] transition hover:border-[#95b8ea]"
        >
          Back To Home
        </Link>
        <h1 className="mt-6 font-['Sora'] text-4xl font-bold md:text-6xl">Ground Defense</h1>
        <p className="mt-6 text-lg text-[#c8d8f3]">This page is intentionally blank for now.</p>
      </main>
    </div>
  );
}
