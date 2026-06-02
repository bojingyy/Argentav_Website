import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImage from "./logo_v2.png";
import {
  ArrowRight,
  Crosshair,
  Radar,
  Waypoints,
} from "lucide-react";

const audienceSections = [
  {
    id: "drone-makers",
    path: "/solutions/drone-makers",
    panelGradient: "linear-gradient(160deg, rgba(12, 28, 54, 0.94), rgba(6, 12, 24, 0.9))",
    eyebrow: "For Drone Makers",
    title: "Add Nvidia-Powered Vision To Your Drone Platform",
    text: "Argentav Vision helps drone manufacturers integrate onboard detection, tracking, and scene understanding into aircraft that need reliable performance at the edge.",
    highlights: [
      "Run onboard on Nvidia hardware for low-latency decisions.",
      "Support payload teams with vision modules ready for integration.",
      "Reduce development time for tracking and classification features.",
    ],
    icon: Radar,
  },
  {
    id: "ground-defense",
    path: "/solutions/ground-defense",
    panelGradient: "linear-gradient(160deg, rgba(26, 20, 44, 0.94), rgba(10, 10, 24, 0.9))",
    eyebrow: "For Ground Defense Builders",
    title: "Strengthen Military Ground Defense Systems",
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
    panelGradient: "linear-gradient(160deg, rgba(14, 34, 32, 0.94), rgba(6, 14, 18, 0.9))",
    eyebrow: "For Civilian Use",
    title: "Deploy Vision Software For Commercial And Public Safety Operations",
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
      {eyebrow ? <p className="font-['Sora'] text-xs uppercase tracking-[0.28em] text-[#9ad0ff]">{eyebrow}</p> : null}
      <h2 className="mt-3 font-['Sora'] text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#d1def7] md:text-xl">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell pb-20 text-white">
      <div className="grid-overlay" aria-hidden="true" />

      <header className="fixed left-1/2 top-5 z-40 w-[calc(100%-1.25rem)] max-w-7xl -translate-x-1/2 rounded-2xl border border-[#2a3d63] bg-[#081427]/90 px-4 py-3 shadow-[0_10px_30px_rgba(2,8,18,0.45)] backdrop-blur-md md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Argentav Vision logo" className="h-20 w-20 object-contain md:h-20 md:w-20" />
            <div className="font-['Sora'] text-sm font-semibold tracking-[0.2em] text-[#d8e9ff] md:text-lg">ARGENTAV VISION</div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs text-[#b4c7ea] md:text-sm">
            <a href="#drone-makers" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Drone Makers</a>
            <a href="#ground-defense" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Ground Defense</a>
            <a href="#civilian-use" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Civilian Use</a>
            <a href="#contact" className="rounded-lg border border-[#34507e] bg-[#0b1b35] px-3 py-2 transition hover:border-[#95b8ea] hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-36 md:pt-36">
        <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="mt-4 max-w-4xl font-['Sora'] text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl">
              Detect Drones In The Sky.
              <br />
              Track Targets On The Ground.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#d6e4fb] md:text-2xl">
              Argentav Vision is a mission-ready software solution built to run on Nvidia hardware.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#78f0c2] px-5 py-3 font-semibold text-[#04111f] transition hover:translate-y-[-1px] hover:brightness-105"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a
                href="#drone-makers"
                className="inline-flex items-center rounded-xl border border-[#6680ab] px-5 py-3 font-semibold text-[#d8e9ff] transition hover:border-[#95b8ea]"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </section>

        <div className="mx-auto mt-2 w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
          <div className="relative flex items-center justify-center py-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#78f0c2] to-transparent" />
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-[#9ad0ff] bg-[#08111f] shadow-[0_0_18px_rgba(120,240,194,0.45)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#78f0c2]" />
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
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#3b5788] bg-[#0f1d39] text-[#9ad0ff]">
                      <Icon size={20} />
                    </div>
                    <p className="mt-5 font-['Sora'] text-xs uppercase tracking-[0.24em] text-[#9ad0ff]">{eyebrow}</p>
                    <h3 className="mt-3 max-w-2xl font-['Sora'] text-3xl font-semibold text-white md:text-4xl">{title}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-9 text-[#c8d8f3] md:text-xl">{text}</p>
                    <Link
                      to={path}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#6680ab] px-5 py-3 font-semibold text-[#d8e9ff] transition hover:border-[#95b8ea]"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="rounded-xl border border-dashed border-[#3f5f90] bg-[#0d1830]/70 p-5">
                    <div className="flex min-h-[280px] items-center justify-center rounded-lg border border-[#203250] bg-[#0a1327]/60 px-4 text-center">
                      <p className="font-['Sora'] text-sm uppercase tracking-[0.16em] text-[#8fd6ff] md:text-base">
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
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#78f0c2] to-transparent" />
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full border border-[#9ad0ff] bg-[#08111f] shadow-[0_0_18px_rgba(120,240,194,0.45)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#78f0c2]" />
            </div>
          </div>
        </div>

        <section id="contact" className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="section-block rounded-2xl p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-['Sora'] text-xs uppercase tracking-[0.22em] text-[#9ad0ff]">Contact</p>
                <h3 className="mt-3 font-['Sora'] text-3xl font-bold text-white">Ready For System Evaluation</h3>
                <p className="mt-3 max-w-xl text-lg leading-8 text-[#c8d8f3] md:text-xl">
                  Set up your first technical briefing and we will tailor detection profiles to your mission environment.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-base leading-8 text-[#bdd0ef] md:text-lg">
                <Waypoints size={16} className="mb-2 text-[#8fd6ff]" />
                Deployable for fixed sites and mobile operation centers.
              </div>
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-base leading-8 text-[#bdd0ef] md:text-lg">
                <Radar size={16} className="mb-2 text-[#8fd6ff]" />
                Compatible with sensor fusion and distributed command pipelines.
              </div>
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-base leading-8 text-[#bdd0ef] md:text-lg">
                <Crosshair size={16} className="mb-2 text-[#8fd6ff]" />
                Designed for persistent tracking in high-noise operating zones.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
