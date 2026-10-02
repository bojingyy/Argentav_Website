// Product and scenario copy for Vexa and Vexa Plus.
// Source: Vexa Product Brief (Argentav Inc.). Keep edits in sync with the brief.

import droneMakerImage from "../assets/drone_maker_homepage.jpg";
import groundDefenseImage from "../assets/ground_defense_homepage.jpg";
import civilianUseImage from "../assets/civilian_use_homepage.jpg";

export const vexaInOut = {
  in: ["Raw H.265 video from your camera", "A standard camera connection", "Nothing else required"],
  out: [
    "Annotated video with red bounding boxes on drone targets",
    "An uninterrupted stream. The video never stops.",
    "Detection events over Ethernet or WiFi",
  ],
};

export const vexaRequirements = [
  {
    label: "Camera output",
    value: "H.265",
    text: "H.265 or Orin Nano compatible encoder. If your camera outputs H.265, Vexa works with it.",
  },
  { label: "Power", value: "PoE or 12V DC", text: "Standard facility power." },
  { label: "Configuration", value: "Web UI", text: "Browser-based setup from any device on the same network." },
  { label: "Networking", value: "Ethernet", text: "Wired by default. Optional WiFi module for wireless detection data." },
  { label: "Footprint", value: "Ruggedized", text: "Small form factor, with passive cooling as the design target." },
];

export const vexaAlerts = [
  { id: "push", method: "Push notification", bestFor: "Operators not watching a fixed screen, through the mobile app." },
  { id: "mqtt", method: "MQTT / Webhook", bestFor: "Integrators and smart facility platforms." },
  { id: "relay", method: "Dry contact relay", bestFor: "Triggering existing sirens, strobes, and PA systems." },
  { id: "email", method: "Email / SMS", bestFor: "Simple deployments with no app requirement." },
  { id: "onvif", method: "ONVIF metadata output", bestFor: "Milestone, Genetec, and other major VMS platforms." },
];

export const vexaPlusFeatures = [
  {
    title: "Relay output (dry contact)",
    text: "Triggers any existing siren, strobe, or PA. No proprietary hardware lock-in.",
  },
  { title: "Push notifications", text: "Operator awareness without watching a screen." },
  { title: "Live detection dashboard", text: "A facility-wide view of active threats." },
  { title: "Multi-unit aggregation", text: "One hub for multiple Vexa units across a site." },
];

export const scenarios = [
  {
    id: "drone-makers",
    path: "/solutions/drone-makers",
    navLabel: "Drone Makers",
    eyebrow: "Vexa for drone makers",
    title: "Add Argentav vision to your drone platform",
    text: "Onboard detection, tracking, and scene understanding for aircraft that need reliable performance at the edge.",
    image: droneMakerImage,
    imageAlt: "Fixed-wing aircraft tracking three drones over a mountain valley, each marked as detected",
    summary: "Onboard detection and tracking for aircraft at the edge.",
    useCasesTitle: "What drone teams use it for",
    // The Vexa brief has no drone-maker use cases yet; these come from the existing site copy.
    useCases: [
      {
        title: "Onboard, low-latency decisions",
        text: "Run detection onboard on NVIDIA hardware, so decisions happen on the aircraft instead of on the ground.",
        image: { label: "Vexa vision running onboard a drone", size: "1600 x 1200" },
      },
      { title: "Payload integration", text: "Support payload teams with vision modules ready for integration." },
      { title: "Faster development", text: "Reduce development time for tracking and classification features." },
    ],
    fitTitle: "Why Vexa fits your platform",
    fitImage: { label: "Vexa module integrated with a drone payload", size: "1200 x 1500" },
    fit: [
      { icon: "cpu", title: "Orin Nano compatible", text: "Works with H.265 or Orin Nano compatible encoders." },
      { icon: "cube", title: "Small and ruggedized", text: "A small form factor, with passive cooling as the design target." },
      { icon: "lightning", title: "Simple power", text: "Runs on PoE or 12V DC." },
      { icon: "webhook", title: "Events your software can read", text: "Detection events over MQTT or Webhook for your own stack." },
    ],
  },
  {
    id: "ground-defense",
    path: "/solutions/ground-defense",
    navLabel: "Ground Defense",
    eyebrow: "Vexa for defense and government",
    title: "Drone detection for the perimeter you already guard",
    text: "Protect bases, facilities, and convoys using the cameras already installed. No camera replacement, no integration project.",
    image: groundDefenseImage,
    imageAlt: "Fortified ground site at dusk with rooftop sensors tracking four approaching drones",
    summary: "Base perimeters, ports, convoys, and embassies.",
    useCasesTitle: "Where defense teams deploy Vexa",
    useCases: [
      {
        title: "Base perimeter",
        text: "FOB and CONUS installation protection without replacing existing camera systems.",
        image: { label: "Perimeter camera at a military installation", size: "1600 x 1200" },
      },
      { title: "National Guard facilities", text: "Low-cost retrofit on existing security infrastructure." },
      { title: "Port security", text: "Coastal and waterway perimeter monitoring." },
      { title: "Convoy and mobile operations", text: "Vexa mounted to the vehicle, feeding the existing camera feed." },
      { title: "Embassy and consulate", text: "Discreet deployment with no integration required." },
    ],
    fitTitle: "Why Vexa fits defense sites",
    fitImage: { label: "Vexa unit installed on a perimeter camera mast", size: "1200 x 1500" },
    fit: [
      { icon: "camera", title: "Keep your cameras", text: "Vexa installs inline on the cameras you already have." },
      { icon: "siren", title: "Trigger existing alarms", text: "Dry contact relay output drives your current sirens, strobes, and PA." },
      { icon: "stack", title: "One hub per site", text: "Vexa Plus aggregates multiple Vexa units into a live dashboard." },
      { icon: "plug", title: "Nothing to integrate", text: "No reprogramming and no changes to downstream systems." },
    ],
  },
  {
    id: "civilian-use",
    path: "/solutions/civilian-use",
    navLabel: "Civilian Use",
    eyebrow: "Vexa for civilian sites",
    title: "Affordable drone awareness for critical sites",
    text: "Add drone detection to prisons, airports, infrastructure, and venues on the IP cameras already watching them.",
    image: civilianUseImage,
    imageAlt: "Security camera connected to an edge computer running Argentav, overlooking a power plant",
    summary: "Prisons, airports, infrastructure, venues, and checkpoints.",
    useCasesTitle: "Where civilian teams deploy Vexa",
    useCases: [
      {
        title: "Prisons",
        text: "Detect drones dropping contraband over perimeter walls using existing installed cameras.",
        image: { label: "Prison perimeter wall with security cameras", size: "1600 x 1200" },
      },
      { title: "Airports", text: "Affordable runway and airspace incursion awareness as FAA pressure grows." },
      { title: "Critical infrastructure", text: "Perimeter protection for power plants, water facilities, and data centers." },
      { title: "Stadiums and events", text: "Temporary deployment for VIP or crowd safety." },
      { title: "Oil and gas", text: "Remote facility surveillance on existing IP camera infrastructure." },
      { title: "Border checkpoints", text: "CBP and state agencies monitoring controlled access points." },
    ],
    fitTitle: "Why Vexa fits civilian sites",
    fitImage: { label: "Vexa unit mounted beside a facility security camera", size: "1200 x 1500" },
    fit: [
      { icon: "camera", title: "Works on existing IP cameras", text: "If your camera outputs H.265, Vexa works with it." },
      { icon: "monitor", title: "Plugs into your VMS", text: "ONVIF metadata output for Milestone, Genetec, and other major platforms." },
      { icon: "phone", title: "Alerts away from the screen", text: "Push notifications, email, or SMS for operators on the move." },
      { icon: "sliders", title: "Set up from a browser", text: "Configure through the web UI from any device on the same network." },
    ],
  },
];
