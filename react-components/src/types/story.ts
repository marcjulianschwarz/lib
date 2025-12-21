import { type ComponentType } from "react";

export interface Story {
  id: string;
  title: string;
  description?: string;
  component: ComponentType;
  fullPage?: boolean;
  componentSource?: string;
}
