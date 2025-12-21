import BadgeStory from "@/stories/BadgeStory";
import ButtonStory from "@/stories/ButtonStory";
import ExpanderStory from "@/stories/ExpanderStory";
import ExternalUrlStory from "@/stories/ExternalUrlStory";
import InputStory from "@/stories/InputStory";
import LoginViewStory from "@/stories/LoginViewStory";
import ModalStory from "@/stories/ModalStory";
import RegisterViewStory from "@/stories/RegisterViewStory";
import SearchBarStory from "@/stories/SearchBarStory";
import SidebarStory from "@/stories/SidebarStory";
import TableStory from "@/stories/TableStory";
import UploadAreaStory from "@/stories/UploadAreaStory";
import { type Story } from "@/types/story";

export const stories: Story[] = [
  {
    id: "badge",
    title: "Badge",
    description: "Colored badge component for labels and tags",
    component: BadgeStory,
  },
  {
    id: "button",
    title: "Button",
    description: "Interactive button component",
    component: ButtonStory,
  },
  {
    id: "expander",
    title: "Expander",
    description: "Expandable/collapsible content section",
    component: ExpanderStory,
  },
  {
    id: "external-url",
    title: "External URL",
    description: "Component for displaying external URLs with optional titles",
    component: ExternalUrlStory,
  },
  {
    id: "input",
    title: "Input",
    description: "Text input field component",
    component: InputStory,
  },
  {
    id: "login-view",
    title: "Login View",
    description: "Complete login form view",
    component: LoginViewStory,
  },
  {
    id: "modal",
    title: "Modal",
    description: "Modal dialog component with custom content",
    component: ModalStory,
  },
  {
    id: "register-view",
    title: "Register View",
    description: "Complete registration form view",
    component: RegisterViewStory,
  },
  {
    id: "search-bar",
    title: "Search Bar",
    description: "Search input component with icon",
    component: SearchBarStory,
  },
  {
    id: "sidebar",
    title: "Sidebar",
    description: "Navigation sidebar component",
    component: SidebarStory,
    fullPage: true,
  },
  {
    id: "table",
    title: "Table",
    description: "Data table component with sorting and filtering",
    component: TableStory,
  },
  {
    id: "upload-area",
    title: "Upload Area",
    description: "Drag and drop file upload component",
    component: UploadAreaStory,
  },
];
