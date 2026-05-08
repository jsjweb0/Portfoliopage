import type { ComponentType, ReactNode } from "react";

export type AboutWindowType =
  | "about"
  | "profile"
  | "readme"
  | "skills"
  | "projects"
  | "contact"
  | "funfact";

export interface AboutWindowItem {
  id: number;
  title: string;
  icon?: string;
  type: AboutWindowType;
  minimized: boolean;
  zIndex: number;
  showMaximize?: boolean;
  showRestore?: boolean;
  showHelp?: boolean;
  className?: string;
}

export interface WindowContentProps {
  onUpdateCheck?: () => void;
}

export type WindowContentComponent = ComponentType<WindowContentProps>;

export interface Tab98Item {
  id: string;
  label: ReactNode;
  content: ReactNode;
}
