import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "./logo_v2.png";
import {
  ArrowRight,
  ChevronDown,
  Crosshair,
  Radar,
  Waypoints,
} from "lucide-react";

const audienceSections = [
  {
    id: "drone-makers",
    path: "/solutions/drone-makers",
    panelGradient: "linear-gradient(160deg, rgba(240, 247, 255, 0.98), rgba(228, 241, 255, 0.95))",
    eyebrow: "For Drone Makers",
    title: "Add NVIDIA-Powered Vision To Your Drone Platform",
    text: "Argentav Vision helps drone manufacturers integrate onboard detection, tracking, and scene understanding into aircraft that need reliable performance at the edge.",
    highlights: [
      "Run onboard on NVIDIA hardware for low-latency decisions.",
      "Support payload teams with vision modules ready for integration.",
      "Reduce development time for tracking and classification features.",
    ],
    icon: Radar,
  },
  {
    id: "ground-defense",
    path: "/solutions/ground-defense",
    panelGradient: "linear-gradient(160deg, rgba(245, 240, 255, 0.98), rgba(237, 231, 255, 0.95))",
    eyebrow: "For Ground Defense Builders",
    title: "AI Vision For Ground Defense Systems",
    text: "Argentav Vision gives system builders a software layer for persistent detection, sensor fusion workflows, and fast alerting across fixed or mobile ground defense deployments.",
    highlights: [
      "Detect and classify aerial and ground threats in real time.",
      "Feed actionable outputs into defense control and monitoring systems.",
      "Scale across distributed nodes with a consistent software stack.",
    ],
    icon: Crosshair,
  },
  {
    id: "civilian-use",
    path: "/solutions/civilian-use",
    panelGradient: "linear-gradient(160deg, rgba(240, 253, 248, 0.98), rgba(230, 250, 240, 0.95))",
    eyebrow: "For Civilian Use",
    title: "AI Vision For Commercial and Public Safety Operations",
    text: "Argentav Vision also supports civilian teams that need dependable monitoring for infrastructure, site security, inspection, and emergency response scenarios.",
    highlights: [
      "Monitor sensitive facilities and critical infrastructure more efficiently.",
      "Improve situational awareness for inspection and response teams.",
      "Use one software platform across evolving operational environments.",
    ],
    icon: Waypoints,
  },
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="font-['Sora'] text-xs uppercase tracking-[0.28em] text-teal-600">{eyebrow}</p> : null}
      <h2 className="mt-3 font-['Sora'] text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{text}</p>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  const scrollSectionToCenter = (sectionId, behavior = "smooth") => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionCenter = rect.top + window.scrollY + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const top = Math.max(0, sectionCenter - viewportCenter);

    window.scrollTo({ top, behavior });
  };

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);
    const scrollToHashTarget = () => {
      scrollSectionToCenter(sectionId, "smooth");
    };

    const timer = window.setTimeout(scrollToHashTarget, 60);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="app-shell pb-20 text-slate-900">
      <div className="grid-overlay" aria-hidden="true" />

      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3 overflow-visible">
            <img src={logoImage} alt="Argentav Vision logo" className="h-20 w-20 scale-110 object-contain md:h-20 md:w-20 md:scale-125" />
            <div className="ml-1 font-['Sora'] text-lg font-semibold tracking-[0.06em] text-slate-900 md:ml-2 md:text-2xl">Argentav Vision</div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs text-slate-500 md:text-sm">
            <div className="group relative">
              <button
                type="button"
                className="flex cursor-default items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:border-teal-400 hover:text-slate-900"
              >
                Home
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className="absolute left-0 top-full z-50 pt-2 opacity-0 pointer-events-none transition group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                <div className="min-w-[220px] rounded-xl border border-slate-200 bg-white/95 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.1)] backdrop-blur-md">
                  <a href="#drone-makers" onClick={(event) => { event.preventDefault(); scrollSectionToCenter("drone-makers"); }} className="block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">For Drone Makers</a>
                  <a href="#ground-defense" onClick={(event) => { event.preventDefault(); scrollSectionToCenter("ground-defense"); }} className="mt-1 block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">For Ground Defense Builders</a>
                  <a href="#civilian-use" onClick={(event) => { event.preventDefault(); scrollSectionToCenter("civilian-use"); }} className="mt-1 block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">For Civilian Use</a>
                  <a href="#contact" onClick={(event) => { event.preventDefault(); scrollSectionToCenter("contact"); }} className="mt-1 block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">Contact</a>
                </div>
              </div>
            </div>
            <Link to="/solutions/drone-makers" className="rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:border-teal-400 hover:text-slate-900">Drone Makers</Link>
            <Link to="/solutions/ground-defense" className="rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:border-teal-400 hover:text-slate-900">Ground Defense</Link>
            <Link to="/solutions/civilian-use" className="rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:border-teal-400 hover:text-slate-900">Civilian Use</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="mt-4 max-w-4xl font-['Sora'] text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-900 md:text-7xl">
              Detect Drones In The Sky.
              <br />
              Track Targets On The Ground.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 md:text-2xl">
              Argentav Vision is a mission-ready software solution built to run on NVIDIA hardware.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px] hover:bg-slate-700"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a
                href="#drone-makers"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </section>

        <div className="mx-auto mt-2 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
          <div className="relative flex items-center justify-center py-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-teal-300 bg-white shadow-[0_0_18px_rgba(13,148,136,0.25)]">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            </div>
          </div>
        </div>

        <section className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Built For The Teams Bringing Vision Systems Into The Field"
            text="Whether you are building drones, strengthening ground defense systems, or deploying civilian monitoring solutions, Argentav Vision delivers software designed for fast detection, dependable performance, and real-world operations."
          />

          <div className="mt-8 space-y-6">
            {audienceSections.map(({ id, path, panelGradient, eyebrow, title, text, icon: Icon }, index) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="section-block rounded-2xl p-6 md:p-8"
                style={{ background: panelGradient }}
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-600">
                      <Icon size={20} />
                    </div>
                    <p className="mt-5 font-['Sora'] text-sm uppercase tracking-[0.24em] text-teal-600 md:text-base">{eyebrow}</p>
                    <h3 className="mt-3 max-w-2xl font-['Sora'] text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">{text}</p>
                    <Link
                      to={path}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-700"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-5">
                    <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-slate-200 bg-white/60 px-4 text-center">
                      <p className="font-['Sora'] text-sm uppercase tracking-[0.16em] text-slate-400 md:text-base">
                        Image Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        <div className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
          <div className="relative flex items-center justify-center py-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-teal-300 bg-white shadow-[0_0_18px_rgba(13,148,136,0.25)]">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            </div>
          </div>
        </div>

        <section id="contact" className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="section-block rounded-2xl p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-['Sora'] text-xs uppercase tracking-[0.22em] text-teal-600">Contact</p>
                <h3 className="mt-3 font-['Sora'] text-3xl font-bold text-slate-900">Ready For System Evaluation</h3>
                <p className="mt-3 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                  Set up your first technical briefing and we will tailor detection profiles to your mission environment.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-600 md:text-lg">
                <Waypoints size={16} className="mb-2 text-teal-500" />
                Deployable for fixed sites and mobile operation centers.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-600 md:text-lg">
                <Radar size={16} className="mb-2 text-teal-500" />
                Compatible with sensor fusion and distributed command pipelines.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-600 md:text-lg">
                <Crosshair size={16} className="mb-2 text-teal-500" />
                Designed for persistent tracking in high-noise operating zones.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
