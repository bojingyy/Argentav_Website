import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logoImage from "../../logo_v2.png";

const homeLinks = [
  { id: "drone-makers", label: "For Drone Makers" },
  { id: "ground-defense", label: "For Ground Defense Builders" },
  { id: "civilian-use", label: "For Civilian Use" },
  { id: "contact", label: "Contact" },
];

const solutionLinks = [
  { path: "/solutions/drone-makers", label: "Drone Makers" },
  { path: "/solutions/ground-defense", label: "Ground Defense" },
  { path: "/solutions/civilian-use", label: "Civilian Use" },
];

export default function TopBar({ onHomeSectionClick }) {
  const navigate = useNavigate();

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate("/");
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const renderHomeLink = ({ id, label }, index) => {
    const className = `${index > 0 ? "mt-1 " : ""}block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-blue-900`;

    if (onHomeSectionClick) {
      return (
        <a
          key={id}
          href={`#${id}`}
          onClick={(event) => {
            event.preventDefault();
            onHomeSectionClick(id);
          }}
          className={className}
        >
          {label}
        </a>
      );
    }

    return (
      <Link key={id} to={`/#${id}`} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3 overflow-visible">
          <img src={logoImage} alt="Argentav logo" className="h-20 w-20 scale-110 object-contain md:h-20 md:w-20 md:scale-125" />
          <div className="ml-1 font-['Sora'] text-lg font-semibold tracking-[0.06em] text-black md:ml-2 md:text-2xl">Argentav</div>
        </div>
        <nav className="flex flex-wrap gap-2 text-xs md:text-sm">
          <div className="group relative">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex cursor-default items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-blue-900 transition hover:border-blue-900"
            >
              Home
              <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="min-w-[220px] rounded-xl border border-slate-200 bg-white/95 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.1)] backdrop-blur-md">
                {homeLinks.map(renderHomeLink)}
              </div>
            </div>
          </div>
          {solutionLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-blue-900 transition hover:border-blue-900">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
