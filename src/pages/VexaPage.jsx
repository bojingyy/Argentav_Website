import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bell, EnvelopeSimple, Siren, VideoCamera, WebhooksLogo } from "@phosphor-icons/react";
import SiteLayout from "../components/SiteLayout.jsx";
import { HubFlow, SignalFlow } from "../components/VexaDiagrams.jsx";
import { ContactBand, ImagePlaceholder, SplitHero, container, primaryButton, reveal, secondaryButton } from "../components/ui.jsx";
import { scenarios, vexaAlerts, vexaInOut, vexaPlusFeatures, vexaRequirements } from "../content/vexa.js";

const alertIcons = { push: Bell, mqtt: WebhooksLogo, relay: Siren, email: EnvelopeSimple, onvif: VideoCamera };

export default function VexaPage() {
  const [leadRequirement, ...otherRequirements] = vexaRequirements;

  return (
    <SiteLayout>
      <SplitHero
        eyebrow="Vexa"
        title="Drone detection for the cameras you already have."
        text="Vexa installs inline between your camera and your video system. No reprogramming, no software stack, no downstream changes."
        actions={
          <>
            <Link to="/#contact" className={primaryButton}>
              Contact
              <ArrowRight size={16} weight="bold" />
            </Link>
            <a href="#how-it-works" className={secondaryButton}>
              How it works
            </a>
          </>
        }
        visual={<ImagePlaceholder label="Vexa unit product photo" size="1600 x 1200" className="aspect-[4/3] w-full" />}
      />

      <section id="how-it-works" className={`${container} scroll-mt-20 py-24 md:py-32`}>
        <motion.div {...reveal} className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">How it works</h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-fg-muted">
            The annotated stream, with red bounding boxes on drone targets, passes through to your recorder or monitor. Detection events are sent separately over the network.
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-14 md:mt-16">
          <SignalFlow />
        </motion.div>

        <motion.div {...reveal} className="mt-16 grid gap-10 border-t border-ink-line pt-12 md:grid-cols-2 md:gap-12">
          {[
            { title: "What goes in", items: vexaInOut.in },
            { title: "What comes out", items: vexaInOut.out },
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <ul className="mt-5 grid gap-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-fg-muted md:text-lg">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>

      <section className={`${container} pb-24 md:pb-32`}>
        <motion.div {...reveal} className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">What Vexa needs</h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-fg-muted">
            Zero integration friction is the point. Vexa runs on standard camera output and standard facility power.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <motion.div {...reveal} className="flex flex-col justify-between gap-10 bg-signal/[0.08] p-8 md:col-span-2 md:p-10">
            <p className="text-sm font-medium text-signal">{leadRequirement.label}</p>
            <div>
              <p className="text-5xl font-semibold tracking-tighter md:text-7xl">{leadRequirement.value}</p>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-fg-muted">{leadRequirement.text}</p>
            </div>
          </motion.div>
          {otherRequirements.map(({ label, value, text }, index) => (
            <motion.div
              key={label}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.06 }}
              className="flex flex-col justify-between gap-8 bg-ink-raised p-8"
            >
              <p className="text-sm font-medium text-fg-muted">{label}</p>
              <div>
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">{value}</p>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line">
        <div className={`${container} grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-8`}>
          <motion.div {...reveal} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">Alerts through the systems you already run</h2>
              <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-fg-muted">
                Vexa outputs detection events over the network. The event data is the product, not a proprietary speaker unit, and delivery is configurable to match what you have.
              </p>
            </div>
          </motion.div>
          <ul className="divide-y divide-ink-line lg:col-span-6 lg:col-start-7">
            {vexaAlerts.map(({ id, method, bestFor }) => {
              const Icon = alertIcons[id];
              return (
                <motion.li key={id} {...reveal} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                  <Icon size={26} weight="duotone" aria-hidden="true" className="mt-0.5 shrink-0 text-signal" />
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">{method}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-fg-muted">{bestFor}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="vexa-plus" className="scroll-mt-20 bg-ink-raised">
        <div className={`${container} grid gap-14 py-24 md:py-32 lg:grid-cols-12 lg:items-center lg:gap-8`}>
          <motion.div {...reveal} className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Vexa Plus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tighter md:text-5xl">One hub for every Vexa on site</h2>
            <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-fg-muted">
              Vexa Plus adds a control room hub that receives detection events from your Vexa units and triggers the alarm infrastructure you already have, instead of competing with it.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {vexaPlusFeatures.map(({ title, text }) => (
                <div key={title}>
                  <dt className="font-semibold tracking-tight">{title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-fg-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7">
            <HubFlow />
          </motion.div>
        </div>
      </section>

      <section className={`${container} py-24 md:py-32`}>
        <motion.h2 {...reveal} className="text-3xl font-semibold tracking-tighter md:text-5xl">
          Vexa in the field
        </motion.h2>
        <ul className="mt-12 border-t border-ink-line">
          {scenarios.map(({ id, path, navLabel, summary, image }) => (
            <motion.li key={id} {...reveal} className="border-b border-ink-line">
              <Link
                to={path}
                className="group grid items-center gap-5 py-6 sm:grid-cols-[9rem_1fr_auto] sm:gap-8 md:py-8"
              >
                <div className="hidden overflow-hidden sm:block">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    width="1536"
                    height="1024"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-signal md:text-3xl">{navLabel}</h3>
                  <p className="mt-1.5 text-base text-fg-muted">{summary}</p>
                </div>
                <ArrowRight
                  size={22}
                  aria-hidden="true"
                  className="hidden text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-signal sm:block"
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      <ContactBand />
    </SiteLayout>
  );
}
