import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Cube,
  DeviceMobile,
  Lightning,
  Monitor,
  Plug,
  Siren,
  SlidersHorizontal,
  Stack,
  VideoCamera,
  WebhooksLogo,
} from "@phosphor-icons/react";
import SiteLayout from "./SiteLayout.jsx";
import { ContactBand, ImagePlaceholder, SplitHero, container, primaryButton, reveal, secondaryButton } from "./ui.jsx";

const fitIcons = {
  cpu: Cpu,
  cube: Cube,
  lightning: Lightning,
  webhook: WebhooksLogo,
  camera: VideoCamera,
  siren: Siren,
  stack: Stack,
  plug: Plug,
  monitor: Monitor,
  phone: DeviceMobile,
  sliders: SlidersHorizontal,
};

// The featured case fills a 2x2 block; the rest flow around it. The last cell stretches
// so the grid never ends with an empty slot at either breakpoint.
function tailSpan(count, index) {
  if (index !== count - 1 || index === 0) return "";
  const rest = count - 1;
  const md = rest % 2 === 1 ? "md:col-span-2" : "";
  const lgRemainder = Math.max(rest - 2, 0) % 3;
  const lg = lgRemainder === 1 ? "lg:col-span-3" : lgRemainder === 2 ? "lg:col-span-2" : "lg:col-span-1";
  return `${md} ${lg}`;
}

export default function ScenarioPage({ scenario }) {
  const { eyebrow, title, text, image, imageAlt, useCasesTitle, useCases, fitTitle, fitImage, fit } = scenario;
  const [featured, ...rest] = useCases;

  return (
    <SiteLayout>
      <SplitHero
        eyebrow={eyebrow}
        title={title}
        text={text}
        actions={
          <>
            <Link to="/#contact" className={primaryButton}>
              Contact
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link to="/vexa#how-it-works" className={secondaryButton}>
              How Vexa works
            </Link>
          </>
        }
        visual={
          <div className="overflow-hidden bg-ink-raised">
            <img src={image} alt={imageAlt} width="1536" height="1024" fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
          </div>
        }
      />

      <section className={`${container} py-24 md:py-32`}>
        <motion.h2 {...reveal} className="max-w-3xl text-3xl font-semibold tracking-tighter md:text-5xl">
          {useCasesTitle}
        </motion.h2>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <motion.article {...reveal} className="flex flex-col bg-ink-raised md:col-span-2 lg:row-span-2">
            {/* TODO: replace with the real photo */}
            <ImagePlaceholder label={featured.image.label} size={featured.image.size} className="min-h-64 flex-1" />
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-fg-muted md:text-lg">{featured.text}</p>
            </div>
          </motion.article>
          {rest.map(({ title: caseTitle, text: caseText }, index) => (
            <motion.article
              key={caseTitle}
              {...reveal}
              transition={{ ...reveal.transition, delay: (index % 3) * 0.06 }}
              className={`flex flex-col justify-end bg-ink-raised p-8 ${tailSpan(useCases.length, index + 1)}`}
            >
              <h3 className="text-xl font-semibold tracking-tight">{caseTitle}</h3>
              <p className="mt-2.5 max-w-[48ch] text-base leading-relaxed text-fg-muted">{caseText}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-line">
        <div className={`${container} grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-center lg:gap-8`}>
          <motion.div {...reveal} className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">{fitTitle}</h2>
            {/* TODO: replace with the real photo */}
            <ImagePlaceholder label={fitImage.label} size={fitImage.size} className="mt-10 aspect-[4/5] w-full lg:aspect-[4/4]" />
          </motion.div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {fit.map(({ icon, title: fitPointTitle, text: fitText }, index) => {
              const Icon = fitIcons[icon];
              return (
                <motion.div key={fitPointTitle} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                  <Icon size={28} weight="duotone" aria-hidden="true" className="text-signal" />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight md:text-xl">{fitPointTitle}</h3>
                  <p className="mt-2 text-base leading-relaxed text-fg-muted">{fitText}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactBand />
    </SiteLayout>
  );
}
