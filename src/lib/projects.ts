import project1 from "@/assets/Ultra.png";
import project2 from "@/assets/WearItForward.png";
import project3 from "@/assets/NonTrivial.png";
import project4 from "@/assets/ArtCriq.png";
import project5 from "@/assets/NYAS.png";
import project6 from "@/assets/MITE.png";
import project7 from "@/assets/m3.png";
import swarmGridCover from "@/assets/swarmgrid.png";
import democracyCover from "@/assets/democracy.png";
import physicsCover from "@/assets/physicsvisualizer.png";
import skyvacCover from "@/assets/skyvac.png";
import bobaDropsCover from "@/assets/bobadrops.png";

export const projectFilters = [
  "everything",
  "work",
  "research",
  "projects",
  "competitions",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: Exclude<ProjectFilter, "everything">;
  image?: string;
  year: string;
  desc: string;
  details: string[];
  highlights: string[];
  projectUrl?: string;
  projectUrlLabel?: string;
  repoUrl?: string;
  pdfUrl?: string;
  pdfEmbedUrl?: string;
  pdfLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "bpa-nlc-competitor",
    title: "BPA National Leadership Conference",
    category: "Business + Technology Competition",
    type: "competitions",
    year: "2025",
    desc: "Placed 1st/200+ internationally in Financial Portfolio Management and 12th internationally in Java Programming (3rd in Texas).",
    details: [
      "Qualified through regional and state rounds to compete at BPA Nationals.",
      "Built finance and technical preparation workflows spanning quantitative portfolio strategy and Java problem solving.",
      "Delivered top placements across both business and programming tracks in a high-volume international field.",
    ],
    highlights: [
      "1st/200+ Financial Portfolio",
      "12th international Java",
      "3rd in Texas",
    ],
  },
  {
    slug: "texas-deca-icdc-alternate",
    title: "Texas DECA ICDC Alternate",
    category: "Business Case Competition",
    type: "competitions",
    year: "2025",
    desc: "Placed 2nd in Texas at state level (ICDC Alternate) and qualified for state competition across four consecutive years.",
    details: [
      "Prepared across case studies, roleplays, and presentation drills over multiple competitive seasons.",
      "Competed through one of the most competitive Texas district pipelines before advancing to state.",
      "Applied real-time business analysis, marketing strategy, and communication under strict timed judging formats.",
    ],
    highlights: [
      "2nd in Texas",
      "ICDC Alternate",
      "4x consecutive state qualification",
    ],
  },
  {
    slug: "m3-mathworks-math-modeling-challenge-finalist",
    title: "M3 Math Modeling Challenge",
    category: "Mathematical Modeling",
    type: "competitions",
    image: project7,
    year: "2026",
    pdfUrl:
      "https://drive.google.com/file/d/195PQxtRjGUz3v0cjUgY_JTgCxxmqjzNU/view?usp=sharing",
    pdfEmbedUrl:
      "https://drive.google.com/file/d/195PQxtRjGUz3v0cjUgY_JTgCxxmqjzNU/preview",
    pdfLabel: "Open the M3 paper",
    desc: "Placed 6th nationally as a finalist (Team #19018) and won $5,000 in the M3 Challenge by building a multi-stage model on the long-term financial impact of online sports betting.",
    details: [
      "Completed a full 14-hour national modeling sprint: assumptions, calibration, sensitivity analysis, and policy framing.",
      "Modeled disposable income with natural cubic splines on 2024 BLS expenditure data and adjusted spending shares using Engel's Law.",
      "Built a three-step betting-risk pipeline (participation logistic model, handle estimation, and 10,000-run Monte Carlo outcomes).",
      "Estimated that 76-80% of bettors lose annually, with high-frequency young male profiles showing the highest disposable-income exposure.",
      "Quantified opportunity cost: $750 annual losses can compound to about $59,293 foregone retirement wealth over 30 years at 6% real return.",
      "Extended to national scale: $13.7B in 2024 losses projects to about $1.08T in 30-year foregone wealth.",
      "Proposed the Future Cost Disclosure Act to surface real-time long-term cost of wagers at point of bet.",
    ],
    highlights: [
      "6th place finalist (national)",
      "$5,000 award",
      "Team #19018",
    ],
  },
  {
    slug: "ut-austin-mite-energy-ai-hackathon",
    title: "UT Austin MITE Hackathon",
    category: "ML Research",
    type: "competitions",
    image: project6,
    year: "2025",
    pdfUrl:
      "https://drive.google.com/file/d/1pvcXzBaSlmd4Acp0DrDHdnuGE-KPx5Cy/view?usp=sharing",
    pdfEmbedUrl:
      "https://drive.google.com/file/d/1pvcXzBaSlmd4Acp0DrDHdnuGE-KPx5Cy/preview",
    pdfLabel: "Open UT MITE report",
    desc: "Selected for UT Austin MITE (<20% acceptance), led the team as ML researcher, and won 1st out of 14 teams for code quality while forecasting cumulative oil production for test wells.",
    details: [
      "Built an end-to-end workflow to predict cumulative oil output across 10 test wells for drilling prioritization.",
      "Applied MICE data imputation over 12 parameters to preserve feature relationships and strengthen model reliability.",
      "Ranked key predictors (Por, Perm, AI) using correlation, mutual information, and distribution analysis plots.",
      "Benchmarked linear regression and optimized a decision tree (about 12 nodes) for improved fit on production targets.",
      "Presented findings and recommendations, including stronger cross-validation and hyperparameter tuning for better generalization.",
    ],
    highlights: [
      "UT Austin MITE (<20% acceptance)",
      "1st/14 teams for code quality",
      "MICE imputation on 12 features",
    ],
  },
  {
    slug: "ultra-yc-w24-ai-college-guidance",
    title: "Ultra (YC W24)",
    category: "EdTech Startup",
    type: "work",
    image: project1,
    year: "2025",
    projectUrl: "https://useultra.ai",
    projectUrlLabel: "Visit useultra.ai",
    desc: "Co-built frontend and AI systems for an accessible college-guidance product serving 10K+ students, while partnering 1:1 with the CEO.",
    details: [
      "Built product-facing frontend experiences for students and counselors.",
      "Collaborated directly with the founder on product direction and shipping cadence.",
      "Focused on clarity, speed, and accessibility across the experience.",
    ],
    highlights: [
      "10K+ students reached",
      "Founder collaboration",
      "Accessible UX",
    ],
  },
  {
    slug: "wear-it-forward-nonprofit",
    title: "WearItForward Nonprofit",
    category: "Volunteering + Scaling",
    type: "projects",
    image: project2,
    year: "2025",
    desc: "Co-founded a humanitarian initiative that donated $160K+ in clothing, led a 20+ person team, and delivered 70+ media assets.",
    details: [
      "Helped coordinate operations across a 20+ person volunteer team.",
      "Created media assets and web presentation for the initiative.",
      "Supported logistics that moved donated materials into impact.",
    ],
    highlights: ["$160K+ donated", "20+ person team", "70+ media assets"],
  },
  {
    slug: "quantum-ml-crop-disease-detection",
    title: "Novel Crop Disease Detection",
    category: "Quantum ML Research",
    type: "research",
    image: project3,
    year: "2025",
    pdfUrl:
      "https://drive.google.com/file/d/1bHH_m0PdiFvqgaIhn92Jp3HI0pPqJQqr/view?usp=drive_link",
    pdfEmbedUrl:
      "https://drive.google.com/file/d/1bHH_m0PdiFvqgaIhn92Jp3HI0pPqJQqr/preview",
    pdfLabel: "Open Non-Trivial paper",
    desc: "Built a Quantum ML pipeline trained on 10K+ crop images, improving disease-detection accuracy by 20% over a classical CNN baseline.",
    details: [
      "Designed the pipeline for a research comparison against a classical baseline.",
      "Worked with a large crop-image dataset and evaluated model performance.",
      "Focused on measurable accuracy gains and reproducible experimentation.",
    ],
    highlights: ["10K+ images", "20% accuracy gain", "Research pipeline"],
  },
  {
    slug: "utd-nlp-art-critique-framework",
    title: "UTD NLP Framework",
    category: "NLP Research",
    type: "research",
    image: project4,
    year: "2025",
    pdfUrl:
      "https://drive.google.com/file/d/1mFQ8GaAps3dFjdiS_7WCfCzNIy0SmNoi/view?usp=sharing",
    pdfEmbedUrl:
      "https://drive.google.com/file/d/1mFQ8GaAps3dFjdiS_7WCfCzNIy0SmNoi/preview",
    pdfLabel: "Open ArtCriq paper",
    desc: "Developed a first-author NLP framework with 840+ examples to evaluate AI-generated art critiques and quantify bias patterns.",
    details: [
      "Built the framework to study quality and bias in generated critique text.",
      "Prepared a labeled set of examples for analysis and evaluation.",
      "Translated research goals into a concrete, testable workflow.",
    ],
    highlights: ["840+ examples", "Bias analysis", "First-author framework"],
  },
  {
    slug: "nyas-nanochar-research",
    title: "NYAS NanoChar Filter",
    category: "Environmental Research",
    type: "research",
    image: project5,
    year: "2025",
    pdfUrl:
      "https://drive.google.com/file/d/108xVpXa6Sf-4tQ3Ku4TRztQYpqVBX-yh/view?usp=sharing",
    pdfEmbedUrl:
      "https://drive.google.com/file/d/108xVpXa6Sf-4tQ3Ku4TRztQYpqVBX-yh/preview",
    pdfLabel: "Open NYAS paper",
    desc: "Led a six-person team, produced 30+ design concepts, and built the project website for a biodegradable air filter showing 63% lower cell damage.",
    details: [
      "Led design and web presentation for the initiative.",
      "Coordinated a small team through concept development and delivery.",
      "Presented the research through a clear public-facing website.",
    ],
    highlights: [
      "6-person team",
      "30+ design concepts",
      "63% lower cell damage",
    ],
  },
  {
    slug: "swarm-grid-coordination-simulator",
    title: "SWARM//GRID",
    category: "Multi-Agent Simulation",
    type: "projects",
    image: swarmGridCover,
    year: "2026",
    projectUrl: "https://swarm-grid.vercel.app",
    projectUrlLabel: "Run the simulator",
    repoUrl: "https://github.com/toyeshhm/swarm-grid",
    desc: "Deterministic browser strategy game and headless research sandbox for autonomous fleet coordination under incomplete information and degrading comms.",
    details: [
      "Built a fixed-step 20 Hz simulation core with deterministic seeding, so any match replays identically from its seed.",
      "Implemented a real-time command view, a simulation dashboard, and a headless multi-agent sandbox over one shared engine.",
      "Modeled sensing, communication interference, battery, and movement as normalized values across abstract fictional fleets.",
    ],
    highlights: [
      "Deterministic replay",
      "AI vs. AI + player modes",
      "Headless research sandbox",
    ],
  },
  {
    slug: "democracy-camera-agent",
    title: "Democracy",
    category: "Computer Vision + Agents",
    type: "projects",
    image: democracyCover,
    year: "2026",
    projectUrl: "https://democracy-dashboard-beta.vercel.app",
    projectUrlLabel: "Open the console",
    repoUrl: "https://github.com/toyeshhm/Democracy",
    desc: "Turns an ordinary security camera into an agent that recognizes an incident and completes the follow-up work itself — filing tickets, updating sheets, and posting to Slack.",
    details: [
      "Built the perception layer that converts live video into structured, reviewable events rather than raw footage.",
      "Wired those events into real software actions through an automation layer with traceable, human-reviewable steps.",
      "Shipped a console for connecting cameras, managing integrations, and watching the live event and workflow feed.",
    ],
    highlights: [
      "Local object grounding",
      "Traceable events",
      "Human-in-the-loop control",
    ],
  },
  {
    slug: "physics-visualizer",
    title: "Physics Visualizer",
    category: "Interactive Education",
    type: "projects",
    image: physicsCover,
    year: "2024",
    projectUrl: "https://physicsvisualizer-kappa.vercel.app",
    projectUrlLabel: "Open the simulators",
    repoUrl: "https://github.com/toyeshhm/PhysicsVisualizer",
    desc: "Nine interactive physics simulators — Atwood's machine, circular motion, SHM, collisions, projectiles, buoyancy, fluids, rotation, and inclined planes — with live parameter control.",
    details: [
      "Wrote each simulator against a shared canvas animation loop so parameter changes update the system in real time.",
      "Designed a hub interface with light and dark themes routing into nine independent simulation pages.",
      "Structured the codebase so additional physics systems drop in without touching the existing simulators.",
    ],
    highlights: [
      "9 simulators",
      "Real-time parameter control",
      "Vanilla JS, no framework",
    ],
  },
  {
    slug: "findfree-deal-discovery",
    title: "FindFree",
    category: "Mobile + LLM Pipeline",
    type: "projects",
    year: "2026",
    repoUrl: "https://github.com/toyeshhm/FindFree",
    desc: "React Native app that finds free stuff and local deals near you, generated by an LLM engine across 11 categories and backed by scraper fallbacks.",
    details: [
      "Built an LLM discovery engine (Groq LLaMA 3.3 70B / Gemini) that searches, verifies, and categorizes deals into readable posts with claim instructions.",
      "Added a scraping fallback layer over Reddit, the Flipp deals API, and seven US retailer flyers to keep the feed populated.",
      "Shipped map view, saved items, user posting, a community board, and in-app messaging on Supabase.",
    ],
    highlights: [
      "11 deal categories",
      "LLM + scraper hybrid",
      "Map-based discovery",
    ],
  },
  {
    slug: "breathe-for-change-skyvac",
    title: "SkyVac",
    category: "Environmental Engineering",
    type: "projects",
    image: skyvacCover,
    year: "2025",
    projectUrl: "https://skyvac.vercel.app",
    projectUrlLabel: "View the SkyVac site",
    repoUrl: "https://github.com/toyeshhm/BreatheforChange-SkyVac",
    desc: "Public-facing site for SkyVac, the atmospheric capture arm of the BreatheForChange initiative, covering the technology, impact goals, and development roadmap.",
    details: [
      "Designed and built the full site presenting the technology breakthrough, target beneficiaries, and global impact goals.",
      "Structured the narrative from problem through roadmap so a non-technical reader can follow the engineering case.",
      "Companion to the NanoChar filter research presented at the New York Academy of Sciences.",
    ],
    highlights: [
      "Full site design + build",
      "Impact + roadmap narrative",
      "BreatheForChange initiative",
    ],
  },
  {
    slug: "winter-boba-drops-hackathon",
    title: "Winter Break To-Do",
    category: "Hackathon Build",
    type: "projects",
    image: bobaDropsCover,
    year: "2024",
    projectUrl: "https://boba-drops-omega.vercel.app",
    projectUrlLabel: "Try the app",
    repoUrl: "https://github.com/toyeshhm/Boba-Drops-Website",
    desc: "Entry for the December 2024 Boba Drops Hackathon — a winter-themed task app built on vanilla JS with a hand-written animation layer.",
    details: [
      "Wrote the snowfall, frosted-glass, and sparkle-on-complete effects directly in CSS with no animation library.",
      "Built the full interaction layer in vanilla JavaScript against a Vite build, no framework dependencies.",
      "Delivered inside the hackathon window as a self-contained, responsive single-page app.",
    ],
    highlights: [
      "Dec 2024 hackathon",
      "Zero dependencies",
      "Hand-written CSS animation",
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getProjectsByFilter = (filter: ProjectFilter) =>
  filter === "everything"
    ? projects
    : projects.filter((project) => project.type === filter);
