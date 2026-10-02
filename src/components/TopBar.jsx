import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CaretDown, List, X } from "@phosphor-icons/react";
import logoImage from "../assets/logo-mark.png";

const homeLinks = [
  { id: "drone-makers", label: "For Drone Makers" },
  { id: "ground-defense", label: "For Ground Defense Builders" },
  { id: "civilian-use", label: "For Civilian Use" },
  { id: "contact", label: "Contact" },
];

const solutionLinks = [
  { path: "/vexa", label: "Vexa" },
  { path: "/solutions/drone-makers", label: "Drone Makers" },
  { path: "/solutions/ground-defense", label: "Ground Defense" },
  { path: "/solutions/civilian-use", label: "Civilian Use" },
];

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-fg" : "text-fg-muted hover:text-fg"}`;

export default function TopBar({ onHomeSectionClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);
    navigate("/");
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const renderHomeLink = ({ id, label }, className) => {
    if (onHomeSectionClick) {
      return (
        <a
          key={id}
          href={`#${id}`}
          onClick={(event) => {
            event.preventDefault();
            setMenuOpen(false);
            onHomeSectionClick(id);
          }}
          className={className}
        >
          {label}
        </a>
      );
    }

    return (
      <Link key={id} to={`/#${id}`} onClick={() => setMenuOpen(false)} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2.5">
          <img src={logoImage} alt="" width="36" height="36" className="h-9 w-9 object-contain" />
          <span className="text-lg font-semibold tracking-tight text-fg">Argentav</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <div className="group relative">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              Home
              <CaretDown size={12} weight="bold" aria-hidden="true" className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="min-w-[248px] border border-ink-line bg-ink-raised p-1.5 shadow-[0_16px_40px_rgba(4,6,10,0.6)]">
                {homeLinks.map((link) =>
                  renderHomeLink(link, "block px-3 py-2.5 text-sm text-fg-muted transition-colors hover:bg-ink hover:text-fg")
                )}
              </div>
            </div>
          </div>
          {solutionLinks.map(({ path, label }) => (
            <NavLink key={path} to={path} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-fg md:hidden"
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-ink-line bg-ink px-4 pb-6 pt-2 md:hidden">
          <Link to="/" onClick={handleHomeClick} className="block py-3 text-base font-medium text-fg">
            Home
          </Link>
          <div className="border-l border-ink-line pl-4">
            {homeLinks.map((link) => renderHomeLink(link, "block py-2 text-sm text-fg-muted"))}
          </div>
          {solutionLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block py-3 text-base font-medium ${isActive ? "text-signal" : "text-fg"}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
