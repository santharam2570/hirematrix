import {
  Award,
  Building2,
  Flag,
  GraduationCap,
  Layers,
  MapPinned,
  Rocket,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/data/industries";
import { site } from "@/lib/site";

// Placeholder figures and dates — replace with real, verifiable numbers before publishing.
// Values must start with a whole number (e.g. "500+", "25+") for CountUp to animate them.

const sectorShare: Record<string, number> = {
  "it-software": 32,
  "non-it-corporate": 24,
  "manufacturing-engineering": 20,
  "bpo-customer-experience": 16,
  "construction-infrastructure": 8,
};

export const sectorPlacements = industries
  .map((i) => ({ name: i.name, icon: i.icon, share: sectorShare[i.slug] ?? 0 }))
  .sort((a, b) => b.share - a.share);

export const careerStageSplit = { freshers: 58, experienced: 42 };

export type Achievement = {
  icon: LucideIcon;
  tag: string;
  value: string;
  title: string;
  text: string;
};

export const featuredAchievement: Achievement = {
  icon: Trophy,
  tag: "Milestone",
  value: "500+",
  title: "Careers *launched*",
  text: "Candidates placed into genuine roles across IT, Non-IT, engineering, construction and BPO since we opened our doors.",
};

export const achievements: Achievement[] = [
  {
    icon: Award,
    tag: "Recognition",
    value: "4.8★",
    title: "Average Google rating",
    text: "Rated by candidates and employers for clear communication and honest guidance.",
  },
  {
    icon: Layers,
    tag: "Bulk hiring",
    value: "120",
    title: "Hires in a single drive",
    text: "Our largest coordinated drive filled a fresher batch for a manufacturing plant in under three weeks.",
  },
  {
    icon: GraduationCap,
    tag: "Campus",
    value: "25+",
    title: "College connects",
    text: "Placement tie-ups with colleges across Coimbatore and Tiruchirappalli for fresher hiring.",
  },
  {
    icon: MapPinned,
    tag: "Growth",
    value: `${site.branches.length}`,
    title: "Branches in Tamil Nadu",
    text: "Walk-in offices in Coimbatore and Tiruchirappalli, open Monday to Saturday.",
  },
];

export type RoadmapStatus = "done" | "current" | "next";

export type RoadmapStep = {
  icon: LucideIcon;
  year: string;
  status: RoadmapStatus;
  title: string;
  text: string;
};

export const roadmap: RoadmapStep[] = [
  {
    icon: Flag,
    year: "2023",
    status: "done",
    title: "Founded in Coimbatore",
    text: "HireMatrix opens its first branch in Peelamedu, recruiting for IT and Non-IT roles.",
  },
  {
    icon: Layers,
    year: "2024",
    status: "done",
    title: "Five sectors, one team",
    text: "Expanded into engineering, manufacturing, construction and BPO recruitment.",
  },
  {
    icon: Building2,
    year: "2025",
    status: "done",
    title: "Tiruchirappalli branch opens",
    text: "A second walk-in office in Cantonment brings our support to central Tamil Nadu.",
  },
  {
    icon: Users,
    year: "2026",
    status: "current",
    title: "500+ placements, 50+ partners",
    text: "A growing network of employers who trust us to send only relevant, interested candidates.",
  },
  {
    icon: GraduationCap,
    year: "Next",
    status: "next",
    title: "Campus hiring programme",
    text: "Structured fresher drives with colleges across Tamil Nadu, from aptitude rounds to joining.",
  },
  {
    icon: Rocket,
    year: "Future",
    status: "next",
    title: "More cities, more doors",
    text: "New branches to bring genuine opportunities closer to job seekers across South India.",
  },
];
