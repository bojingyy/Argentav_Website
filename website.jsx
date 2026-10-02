import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Broadcast, Crosshair, Drone, Factory, ShareNetwork, Truck } from "@phosphor-icons/react";
import SiteLayout from "./src/components/SiteLayout.jsx";
import { ease, primaryButton, reveal, secondaryButton } from "./src/components/ui.jsx";
import droneMakerHomepageImage from "./src/assets/drone_maker_homepage.jpg";
import groundDefenseHomepageImage from "./src/assets/ground_defense_homepage.jpg";
import civilianUseHomepageImage from "./src/assets/civilian_use_homepage.jpg";

const audienceSections = [
  {
    id: "drone-makers",
    path: "/solutions/drone-makers",
    label: "For drone makers",
    title: "Add Argentav vision to your drone platform",
    text: "Argentav helps drone manufacturers integrate onboard detection, tracking, and scene understanding into aircraft that need reliable performance at the edge.",
    highlights: [
      "Run onboard on NVIDIA hardware for low-latency decisions.",
      "Support payload teams with vision modules ready for integration.",
      "Reduce development time for tracking and classification features.",
    ],
    icon: Drone,
    image: droneMakerHomepageImage,
    imageAlt: "Fixed-wing aircraft tracking three drones over a mountain valley, each marked as detected",
  },
  {
    id: "ground-defense",
    path: "/solutions/ground-defense",
    label: "For ground defense builders",
    title: "AI vision for ground defense systems",
    text: "Argentav gives system builders a software layer for persistent detection, sensor fusion workflows, and fast alerting across fixed or mobile ground defense deployments.",
    highlights: [
      "Detect and classify aerial and ground threats in real time.",
      "Feed actionable outputs into defense control and monitoring systems.",
      "Scale across distributed nodes with a consistent software stack.",
    ],
    icon: Broadcast,
    image: groundDefenseHomepageImage,
    imageAlt: "Fortified ground site at dusk with rooftop sensors tracking four approaching drones",
  },
  {
    id: "civilian-use",
    path: "/solutions/civilian-use",
    label: "For civilian use",
    title: "AI vision for commercial and public safety operations",
    text: "Argentav also supports civilian teams that need dependable monitoring for infrastructure, site security, inspection, and emergency response scenarios.",
    highlights: [
      "Monitor sensitive facilities and critical infrastructure more efficiently.",
      "Improve situational awareness for inspection and response teams.",
      "Use one software platform across evolving operational environments.",
    ],
    icon: Factory,
    image: civilianUseHomepageImage,
    imageAlt: "Security camera connected to an edge computer running Argentav, overlooking a power plant",
  },
];

const capabilities = [
  { icon: Truck, text: "Deployable for fixed sites and mobile operation centers." },
  { icon: ShareNetwork, text: "Compatible with sensor fusion and distributed command pipelines." },
  { icon: Crosshair, text: "Designed for persistent tracking in high-noise operating zones." },
];

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function AudienceLabel({ icon: Icon, children }) {
  return (
    <p className="flex items-center gap-2 text-sm font-medium text-signal">
      <Icon size={18} weight="duotone" aria-hidden="true" />
      {children}
    </p>
  );
}

function DetailsLink({ to, title }) {
  return (
    <Link
      to={to}
      aria-label={`View details: ${title}`}
      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-signal"
    >
      View details
      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
    </Link>
  );
}

function AudienceImage({ to, src, alt, className = "" }) {
  return (
    <Link to={to} tabIndex={-1} aria-hidden="true" className={`group/img block overflow-hidden bg-ink-raised ${className}`}>
      <img
        src={src}
        alt={alt}
        width="1536"
        height="1024"
        loading="lazy"
        className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
      />
    </Link>
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

  const handleAnchorClick = (sectionId) => (event) => {
    event.preventDefault();
    scrollSectionToCenter(sectionId);
  };

  const [featured, ...rest] = audienceSections;

  return (
    <SiteLayout onHomeSectionClick={scrollSectionToCenter}>
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 md:px-6 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        <motion.div variants={heroStagger} initial="hidden" animate="show" className="lg:col-span-6">
          <motion.h1
            variants={heroItem}
            className="text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl"
          >
            Protect what matters.
          </motion.h1>
          <motion.p variants={heroItem} className="mt-6 max-w-[28ch] text-xl leading-snug text-fg-muted md:text-2xl">
            Affordable AI vision software for drone detection and object tracking.
          </motion.p>
          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" onClick={handleAnchorClick("contact")} className={primaryButton}>
              Contact
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#drone-makers" onClick={handleAnchorClick("drone-makers")} className={secondaryButton}>
              Explore solutions
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease }}
          className="overflow-hidden bg-ink-raised lg:col-span-6"
        >
          <img
            src={droneMakerHomepageImage}
            alt="Three drones in flight, each framed by a detection box"
            width="1536"
            height="1024"
            fetchPriority="high"
            className="aspect-[4/3] w-full object-cover object-[78%_center] lg:aspect-auto lg:h-[min(72dvh,640px)]"
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-24 md:px-6 md:py-32 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
            Built for the teams bringing vision systems into the field
          </h2>
          <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-fg-muted">
            Whether you are building drones, strengthening ground defense systems, or deploying civilian monitoring solutions, Argentav delivers software designed for fast detection, dependable performance, and real-world operations.
          </p>
        </motion.div>

        <motion.article
          {...reveal}
          id={featured.id}
          className="mt-16 grid items-center gap-8 md:mt-20 lg:grid-cols-12 lg:gap-12"
        >
          <AudienceImage to={featured.path} src={featured.image} alt={featured.imageAlt} className="lg:col-span-7" />
          <div className="lg:col-span-5">
            <AudienceLabel icon={featured.icon}>{featured.label}</AudienceLabel>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{featured.title}</h3>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-fg-muted">{featured.text}</p>
            <DetailsLink to={featured.path} title={featured.title} />
          </div>
        </motion.article>

        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-2 md:gap-10 lg:gap-12">
          {rest.map(({ id, path, label, title, text, icon, image, imageAlt }, index) => (
            <motion.article
              key={id}
              id={id}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.1 }}
              className={index === 1 ? "md:mt-24" : undefined}
            >
              <AudienceImage to={path} src={image} alt={imageAlt} />
              <div className="mt-6">
                <AudienceLabel icon={icon}>{label}</AudienceLabel>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-fg-muted md:text-lg">{text}</p>
                <DetailsLink to={path} title={title} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TODO: add a real contact method (email address or form) once available. */}
      <section id="contact" className="bg-ink-raised">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 md:px-6 md:py-28 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <motion.div {...reveal} className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tighter md:text-5xl">Ready for system evaluation</h2>
            <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-fg-muted">
              Set up your first technical briefing and we will tailor detection profiles to your mission environment.
            </p>
          </motion.div>
          <motion.ul {...reveal} className="grid gap-8 lg:col-span-5 lg:col-start-8 lg:self-end">
            {capabilities.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-4">
                <Icon size={24} weight="duotone" aria-hidden="true" className="mt-0.5 shrink-0 text-signal" />
                <span className="text-base leading-relaxed text-fg md:text-lg">{text}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </SiteLayout>
  );
}
