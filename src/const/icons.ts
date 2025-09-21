import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiTypescript,
  SiPython,
  SiDjango,
  SiPhp,
  SiVite,
  SiPostgresql,
  SiSqlite,
  SiSanity,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const IconTypes = {
  SUPERSET: "superset",
  LANGUAGE: "language",
  FRAMEWORK: "framework",
  DATABASE: "database",
  BUILDTOOL: "build tool",
  CMS: "Content Management System",
} as const;

export type IconTypes = (typeof IconTypes)[keyof typeof IconTypes];

export type Icons = {
  name: string;
  icon: IconType;
  type?: IconTypes;
  level?: number;
  experience?: number;
};

export const icons: Icons[] = [
  {
    name: "React",
    icon: SiReact,
    type: IconTypes.FRAMEWORK,
  },
  {
    name: "React Native",
    icon: SiReact,
    type: IconTypes.FRAMEWORK,
  },
  {
    name: "Next JS",
    icon: SiNextdotjs,
    type: IconTypes.FRAMEWORK,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    type: IconTypes.FRAMEWORK,
  },
  {
    name: "Django",
    icon: SiDjango,
    type: IconTypes.FRAMEWORK,
  },
  {
    name: "HTML",
    icon: SiHtml5,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    type: IconTypes.SUPERSET,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "Java",
    icon: FaJava,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "Python",
    icon: SiPython,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "PHP",
    icon: SiPhp,
    type: IconTypes.LANGUAGE,
  },
  {
    name: "Vite",
    icon: SiVite,
    type: IconTypes.BUILDTOOL,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    type: IconTypes.DATABASE,
  },
  {
    name: "SQLlite",
    icon: SiSqlite,
    type: IconTypes.DATABASE,
  },
  {
    name: "Sanity",
    icon: SiSanity,
    type: IconTypes.CMS,
  },
];
