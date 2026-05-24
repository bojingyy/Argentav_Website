import { motion } from "framer-motion";
import {
  ArrowRight,
  Crosshair,
  Radar,
  ShieldCheck,
  Timer,
  Waypoints,
} from "lucide-react";

const capabilities = [
  {
    title: "Airspace Drone Detection",
    text: "Multi-sensor AI fusion identifies hostile drones in low-visibility and high-clutter skies.",
    icon: Radar,
  },
  {
    title: "Ground Target Discovery",
    text: "Computer vision models classify vehicles and ground activity in real time for command teams.",
    icon: Crosshair,
  },
  {
    title: "Decision-Ready Alerts",
    text: "Prioritized event scoring reduces operator load and routes actionable alerts in seconds.",
    icon: Timer,
  },
];

const workflow = [
  {
    step: "01",
    title: "Capture",
    text: "Ingest EO/IR, radar, and telemetry feeds from mobile or fixed nodes.",
  },
  {
    step: "02",
    title: "Classify",
    text: "Run edge AI pipelines to detect, classify, and track air and ground signatures.",
  },
  {
    step: "03",
    title: "Coordinate",
    text: "Push synchronized intelligence to operators and command systems.",
  },
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="font-['Sora'] text-xs uppercase tracking-[0.28em] text-[#9ad0ff]">{eyebrow}</p>
      <h2 className="mt-3 font-['Sora'] text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#d1def7]">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell pb-20 text-white">
      <div className="grid-overlay" aria-hidden="true" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <div className="font-['Sora'] text-lg font-semibold tracking-[0.2em] text-[#d8e9ff]">ARGENTAV VISION</div>
        <nav className="hidden gap-8 text-sm text-[#b4c7ea] md:flex">
          <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
          <a href="#workflow" className="transition hover:text-white">Workflow</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="font-['Sora'] text-xs uppercase tracking-[0.3em] text-[#9ad0ff]">AI Vision Defense Platform</p>
            <h1 className="mt-4 max-w-4xl font-['Sora'] text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl">
              Detect Drones In The Sky.
              <br />
              Track Targets On The Ground.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d6e4fb]">
              Argentav delivers mission-ready AI vision to identify airborne threats and ground movements faster,
              with higher confidence, across contested environments.
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
                href="#capabilities"
                className="inline-flex items-center rounded-xl border border-[#6680ab] px-5 py-3 font-semibold text-[#d8e9ff] transition hover:border-[#95b8ea]"
              >
                Explore Capabilities
              </a>
            </div>
          </motion.div>
        </section>

        <section id="capabilities" className="mx-auto mt-8 w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="One Platform, Multi-Domain Awareness"
            text="This baseline layout highlights your product value with a structure that can expand into detailed pages, demos, and technical specs."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {capabilities.map(({ title, text, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="section-block rounded-xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3b5788] bg-[#0f1d39] text-[#9ad0ff]">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-['Sora'] text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c4d5f2]">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="workflow" className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Operational Workflow"
            title="From Sensor Input To Command Action"
            text="A simple three-step flow for communicating your core AI vision pipeline on day one."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.09, duration: 0.4 }}
                className="section-block rounded-xl p-5"
              >
                <p className="font-['Sora'] text-xs tracking-[0.2em] text-[#9ad0ff]">STEP {item.step}</p>
                <h3 className="mt-3 font-['Sora'] text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c4d5f2]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
          <div className="section-block rounded-2xl p-7 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-['Sora'] text-xs uppercase tracking-[0.22em] text-[#9ad0ff]">Contact</p>
                <h3 className="mt-3 font-['Sora'] text-3xl font-bold text-white">Ready For System Evaluation</h3>
                <p className="mt-3 max-w-xl text-[#c8d8f3]">
                  Set up your first technical briefing and we will tailor detection profiles to your mission environment.
                </p>
              </div>
              <a
                href="mailto:hello@argentav.ai"
                className="inline-flex items-center gap-2 self-start rounded-xl bg-white px-5 py-3 font-semibold text-[#071124] transition hover:brightness-95"
              >
                Start Conversation
                <ShieldCheck size={18} />
              </a>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-sm text-[#bdd0ef]">
                <Waypoints size={16} className="mb-2 text-[#8fd6ff]" />
                Deployable for fixed sites and mobile operation centers.
              </div>
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-sm text-[#bdd0ef]">
                <Radar size={16} className="mb-2 text-[#8fd6ff]" />
                Compatible with sensor fusion and distributed command pipelines.
              </div>
              <div className="rounded-xl border border-[#2a3d63] bg-[#0d1830] p-4 text-sm text-[#bdd0ef]">
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
