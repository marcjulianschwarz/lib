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

import badgeSource from "@/components/Badge/Badge.tsx?raw";
import buttonSource from "@/components/Button/Button.tsx?raw";
import expanderSource from "@/components/Expander/Expander.tsx?raw";
import externalUrlSource from "@/components/ExternalUrl/ExternalUrl.tsx?raw";
import inputSource from "@/components/Input/Input.tsx?raw";
import loginViewSource from "@/views/LoginView.tsx?raw";
import modalSource from "@/components/Modal/Modal.tsx?raw";
import registerViewSource from "@/views/RegisterView.tsx?raw";
import searchBarSource from "@/components/SearchBar/SearchBar.tsx?raw";
import sidebarSource from "@/components/Sidebar/Sidebar.tsx?raw";
import tableSource from "@/components/Table/Table.tsx?raw";
import uploadAreaSource from "@/components/UploadArea/UploadArea.tsx?raw";

export const stories: Story[] = [
  {
    id: "badge",
    title: "Badge",
    description: "Colored badge component for labels and tags",
    component: BadgeStory,
    componentSource: badgeSource,
  },
  {
    id: "button",
    title: "Button",
    description: "Interactive button component",
    component: ButtonStory,
    componentSource: buttonSource,
  },
  {
    id: "expander",
    title: "Expander",
    description: "Expandable/collapsible content section",
    component: ExpanderStory,
    componentSource: expanderSource,
  },
  {
    id: "external-url",
    title: "External URL",
    description: "Component for displaying external URLs with optional titles",
    component: ExternalUrlStory,
    componentSource: externalUrlSource,
  },
  {
    id: "input",
    title: "Input",
    description: "Text input field component",
    component: InputStory,
    componentSource: inputSource,
  },
  {
    id: "login-view",
    title: "Login View",
    description: "Complete login form view",
    component: LoginViewStory,
    componentSource: loginViewSource,
  },
  {
    id: "modal",
    title: "Modal",
    description: "Modal dialog component with custom content",
    component: ModalStory,
    componentSource: modalSource,
  },
  {
    id: "register-view",
    title: "Register View",
    description: "Complete registration form view",
    component: RegisterViewStory,
    componentSource: registerViewSource,
  },
  {
    id: "search-bar",
    title: "Search Bar",
    description: "Search input component with icon",
    component: SearchBarStory,
    componentSource: searchBarSource,
  },
  {
    id: "sidebar",
    title: "Sidebar",
    description: "Navigation sidebar component",
    component: SidebarStory,
    componentSource: sidebarSource,
    fullPage: true,
  },
  {
    id: "table",
    title: "Table",
    description: "Data table component with sorting and filtering",
    component: TableStory,
    componentSource: tableSource,
  },
  {
    id: "upload-area",
    title: "Upload Area",
    description: "Drag and drop file upload component",
    component: UploadAreaStory,
    componentSource: uploadAreaSource,
  },
];
