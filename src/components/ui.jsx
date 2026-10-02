import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ImageSquare } from "@phosphor-icons/react";

export const ease = [0.16, 1, 0.3, 1];

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease },
};

export const primaryButton =
  "inline-flex items-center gap-2 whitespace-nowrap bg-fg px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white active:scale-[0.98]";
export const secondaryButton =
  "inline-flex items-center whitespace-nowrap border border-ink-line px-5 py-3 text-sm font-semibold text-fg transition hover:border-fg-muted active:scale-[0.98]";

export const container = "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8";

// Visible slot for an image that has not been supplied yet. Replace with <img> when the asset exists.
export function ImagePlaceholder({ label, size, className = "" }) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex flex-col items-center justify-center gap-3 border border-dashed border-ink-line bg-ink-raised p-6 text-center ${className}`}
    >
      <ImageSquare size={28} weight="duotone" aria-hidden="true" className="text-fg-muted" />
      <p className="max-w-[32ch] text-sm font-medium text-fg-muted">{label}</p>
      {size ? <p className="font-mono text-xs text-fg-muted/70">{size}</p> : null}
    </div>
  );
}

export function SplitHero({ eyebrow, title, text, actions, visual }) {
  return (
    <section className={`${container} grid items-center gap-10 py-12 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-8 lg:py-16`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="lg:col-span-6"
      >
        {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{eyebrow}</p> : null}
        <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tighter md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-fg-muted md:text-xl">{text}</p>
        {actions ? <div className="mt-10 flex flex-wrap gap-3">{actions}</div> : null}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease }}
        className="lg:col-span-6"
      >
        {visual}
      </motion.div>
    </section>
  );
}

export function ContactBand({ title = "Ready for system evaluation" }) {
  return (
    <section className="bg-ink-raised">
      <motion.div
        {...reveal}
        className={`${container} flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24`}
      >
        <div>
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-fg-muted">
            Set up your first technical briefing and we will tailor detection profiles to your mission environment.
          </p>
        </div>
        <Link to="/#contact" className={primaryButton}>
          Contact
          <ArrowRight size={16} weight="bold" />
        </Link>
      </motion.div>
    </section>
  );
}
