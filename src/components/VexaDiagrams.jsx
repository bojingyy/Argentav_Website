import { ArrowDown, ArrowRight, Bell, ChartBar, Cube, Monitor, Siren, Stack, VideoCamera, WebhooksLogo } from "@phosphor-icons/react";

function Node({ icon: Icon, title, sub, items, highlight = false, className = "" }) {
  return (
    <div
      className={`border p-5 ${highlight ? "border-signal/60 bg-signal/[0.06]" : "border-ink-line bg-ink"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <Icon size={20} weight="duotone" aria-hidden="true" className={highlight ? "text-signal" : "text-fg-muted"} />
        <p className="font-semibold tracking-tight">{title}</p>
      </div>
      {sub ? <p className="mt-1.5 text-sm text-fg-muted">{sub}</p> : null}
      {items ? (
        <ul className="mt-4 grid gap-1.5 border-t border-ink-line pt-4 text-sm text-fg-muted">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function VerticalLink({ label, dashed = false }) {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <span className={`h-6 border-l ${dashed ? "border-dashed" : ""} border-fg-muted/50`} />
      {label ? <span className="my-1.5 font-mono text-xs text-fg-muted">{label}</span> : null}
      <span className={`h-4 border-l ${dashed ? "border-dashed" : ""} border-fg-muted/50`} />
      <ArrowDown size={14} className="-mt-1 text-fg-muted" />
    </div>
  );
}

function HorizontalLink({ label, sub }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3" aria-hidden="true">
      <span className="font-mono text-xs text-fg-muted">{label}</span>
      <div className="flex w-full items-center">
        <span className="h-px flex-1 bg-fg-muted/50" />
        <ArrowRight size={14} className="-ml-1 text-fg-muted" />
      </div>
      {sub ? <span className="font-mono text-xs text-fg-muted/70">{sub}</span> : null}
    </div>
  );
}

const camera = { icon: VideoCamera, title: "Your camera", sub: "H.265 video" };
const vexa = {
  icon: Cube,
  title: "Vexa",
  sub: "AI vision appliance",
  items: ["Drone detection", "Bounding box overlay", "Stream passthrough", "Ethernet / WiFi", "Web UI configuration"],
  highlight: true,
};
const monitor = { icon: Monitor, title: "Monitor / recorder", sub: "Annotated video, uninterrupted" };
const events = { icon: WebhooksLogo, title: "Detection events", sub: "MQTT, Webhook, push, SMS" };

export function SignalFlow() {
  return (
    <figure aria-label="Camera video flows into Vexa, which passes annotated video to your monitor or recorder and sends detection events over the network.">
      {/* Desktop: left to right with the event branch below Vexa */}
      <div className="hidden grid-cols-[1fr_9rem_1.25fr_9rem_1fr] items-center lg:grid">
        <Node {...camera} />
        <HorizontalLink label="video in" />
        <Node {...vexa} />
        <HorizontalLink label="annotated stream" sub="wired or wireless" />
        <Node {...monitor} />
        <div className="col-start-3 flex flex-col items-stretch">
          <VerticalLink label="over the network" dashed />
          <Node {...events} />
        </div>
      </div>

      {/* Mobile and tablet: top to bottom, splitting after Vexa */}
      <div className="lg:hidden">
        <Node {...camera} />
        <VerticalLink label="video in" />
        <Node {...vexa} />
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <VerticalLink label="annotated stream" />
            <Node {...monitor} />
          </div>
          <div>
            <VerticalLink label="network" dashed />
            <Node {...events} />
          </div>
        </div>
      </div>
    </figure>
  );
}

export function HubFlow() {
  return (
    <figure aria-label="Multiple Vexa units send detection events over WiFi or the network to the Vexa Plus hub, which drives relay outputs, push notifications, and a live dashboard.">
      <div className="grid grid-cols-3 gap-3">
        {["Vexa", "Vexa", "Vexa"].map((title, index) => (
          <div key={index} className="flex items-center justify-center gap-2 border border-ink-line bg-ink px-3 py-3">
            <Cube size={16} weight="duotone" aria-hidden="true" className="text-fg-muted" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-fg-muted">One or more units across the site</p>
      <VerticalLink label="WiFi / network" dashed />
      <Node icon={Stack} title="Vexa Plus" sub="Aggregation and alert hub" highlight />
      <VerticalLink />
      <div className="grid gap-3 sm:grid-cols-3">
        <Node icon={Siren} title="Relay" sub="Your siren or strobe" />
        <Node icon={Bell} title="Push" sub="Operator alerts" />
        <Node icon={ChartBar} title="Dashboard" sub="Live, site-wide" />
      </div>
    </figure>
  );
}
