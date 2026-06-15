import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Crosshair,
  Radar,
  Waypoints,
} from "lucide-react";
import TopBar from "./src/components/TopBar.jsx";
import droneMakerHomepageImage from "./drone_maker_homepage.png";

const audienceSections = [
  {
    id: "drone-makers",
    path: "/solutions/drone-makers",
    eyebrow: "For Drone Makers",
    title: "Add NVIDIA-Powered Vision To Your Drone Platform",
    text: "Argentav Vision helps drone manufacturers integrate onboard detection, tracking, and scene understanding into aircraft that need reliable performance at the edge.",
    highlights: [
      "Run onboard on NVIDIA hardware for low-latency decisions.",
      "Support payload teams with vision modules ready for integration.",
      "Reduce development time for tracking and classification features.",
    ],
    icon: Radar,
    image: droneMakerHomepageImage,
    imageAlt: "Drone vision system interface for drone makers",
  },
  {
    id: "ground-defense",
    path: "/solutions/ground-defense",
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
    <div className="max-w-5xl">
      {eyebrow ? <p className="font-['Sora'] text-xs uppercase tracking-[0.28em] text-blue-900">{eyebrow}</p> : null}
      <h2 className="mt-3 font-['Sora'] text-3xl font-bold tracking-tight text-black md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-5xl text-lg leading-8 text-blue-900 md:text-xl">{text}</p>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8" aria-hidden="true">
      <div className="flex items-center gap-4 py-4">
        <div className="h-px flex-1 bg-slate-300" />
        <div className="h-[3px] w-24 rounded-full bg-slate-700" />
        <div className="h-px flex-1 bg-slate-300" />
      </div>
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
    <div className="app-shell pb-20 text-black">
      <div className="grid-overlay" aria-hidden="true" />

      <TopBar onHomeSectionClick={scrollSectionToCenter} />

      <main>
        <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="mt-4 max-w-4xl font-['Sora'] text-5xl font-extrabold leading-[0.95] tracking-tight text-black md:text-7xl">
              Detect Drones In The Sky.
              <br />
              Track Targets On The Ground.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-blue-900 md:text-2xl">
              Argentav Vision is a mission-ready software solution built to run on NVIDIA hardware.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px] hover:bg-blue-800"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a
                href="#drone-makers"
                className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-blue-900 transition hover:border-blue-900"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        <section className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="Built For The Teams Bringing Vision Systems Into The Field"
            text="Whether you are building drones, strengthening ground defense systems, or deploying civilian monitoring solutions, Argentav Vision delivers software designed for fast detection, dependable performance, and real-world operations."
          />

          <div className="mt-8 space-y-6">
            {audienceSections.map(({ id, path, eyebrow, title, text, icon: Icon, image, imageAlt }, index) => (
              <motion.section
                key={id}
                id={id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="section-block solution-card rounded-2xl p-6 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-900">
                        <Icon size={20} />
                      </div>
                      <p className="font-['Sora'] text-sm uppercase tracking-[0.24em] text-blue-900 md:text-base">{eyebrow}</p>
                    </div>
                    <h3 className="mt-3 max-w-2xl font-['Sora'] text-3xl font-semibold text-black md:text-4xl">{title}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-9 text-slate-700 md:text-xl">{text}</p>
                    <Link
                      to={path}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px] hover:bg-blue-800"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center overflow-hidden rounded-xl text-center">
                    {image ? (
                      <img src={image} alt={imageAlt} className="w-full rounded-xl border border-slate-300 lg:w-[112%] lg:max-w-none lg:-translate-x-4" />
                    ) : (
                      <div className="flex min-h-[340px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4">
                        <p className="font-['Sora'] text-sm uppercase tracking-[0.16em] text-slate-400 md:text-base">
                          Image Placeholder
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <SectionDivider />
        </div>

        <section id="contact" className="mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="section-block solution-card contact-card rounded-2xl p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-['Sora'] text-xs uppercase tracking-[0.22em] text-blue-900">Contact</p>
                <h3 className="mt-3 font-['Sora'] text-3xl font-bold text-black">Ready For System Evaluation</h3>
                <p className="mt-3 max-w-xl text-lg leading-8 text-blue-900 md:text-xl">
                  Set up your first technical briefing and we will tailor detection profiles to your mission environment.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.08)] md:text-lg">
                <Waypoints size={16} className="mb-2 text-slate-700" />
                Deployable for fixed sites and mobile operation centers.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.08)] md:text-lg">
                <Radar size={16} className="mb-2 text-slate-700" />
                Compatible with sensor fusion and distributed command pipelines.
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-base leading-8 text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.08)] md:text-lg">
                <Crosshair size={16} className="mb-2 text-slate-700" />
                Designed for persistent tracking in high-noise operating zones.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
