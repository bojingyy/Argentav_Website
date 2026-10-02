import { MotionConfig } from "framer-motion";
import TopBar from "./TopBar.jsx";
import logoImage from "../assets/logo-mark.png";

export default function SiteLayout({ onHomeSectionClick, children }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-[100dvh] flex-col bg-ink text-fg">
        <TopBar onHomeSectionClick={onHomeSectionClick} />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div className="flex items-center gap-2.5">
              <img src={logoImage} alt="" width="28" height="28" className="h-7 w-7 object-contain" />
              <span className="font-semibold tracking-tight">Argentav</span>
            </div>
            <p className="text-sm text-fg-muted">&copy; {new Date().getFullYear()} Argentav. AI vision software for detection and tracking.</p>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
