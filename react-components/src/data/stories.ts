import BadgeStory from "@/stories/BadgeStory";
import ButtonStory from "@/stories/ButtonStory";
import CodeBlockStory from "@/stories/CodeBlockStory";
import ExpanderStory from "@/stories/ExpanderStory";
import ExternalUrlStory from "@/stories/ExternalUrlStory";
import InlineCodeStory from "@/stories/InlineCodeStory";
import InputStory from "@/stories/InputStory";
import LoginViewStory from "@/stories/LoginViewStory";
import ModalStory from "@/stories/ModalStory";
import RegisterViewStory from "@/stories/RegisterViewStory";
import SearchBarStory from "@/stories/SearchBarStory";
import SidebarStory from "@/stories/SidebarStory";
import TabSelectorStory from "@/stories/TabSelectorStory";
import TableStory from "@/stories/TableStory";
import TitledListStory from "@/stories/TitledListStory";
import UploadAreaStory from "@/stories/UploadAreaStory";

import { type Story } from "@/types/story";

import badgeSource from "@/components/Badge/Badge.tsx?raw";
import buttonSource from "@/components/Button/Button.tsx?raw";
import codeBlockSource from "@/components/CodeBlock/CodeBlock.tsx?raw";
import expanderSource from "@/components/Expander/Expander.tsx?raw";
import externalUrlSource from "@/components/ExternalUrl/ExternalUrl.tsx?raw";
import inlineCodeSource from "@/components/InlineCode/InlineCode.tsx?raw";
import inputSource from "@/components/Input/Input.tsx?raw";
import loginViewSource from "@/views/LoginView.tsx?raw";
import modalSource from "@/components/Modal/Modal.tsx?raw";
import registerViewSource from "@/views/RegisterView.tsx?raw";
import searchBarSource from "@/components/SearchBar/SearchBar.tsx?raw";
import sidebarSource from "@/components/Sidebar/Sidebar.tsx?raw";
import tabSelectorSource from "@/components/TabSelector/TabSelector.tsx?raw";
import tableSource from "@/components/Table/Table.tsx?raw";
import titledListSource from "@/components/TitledList/TitledList.tsx?raw";
import uploadAreaSource from "@/components/UploadArea/UploadArea.tsx?raw";
import labeledTextSectionSource from "@/components/LabeledTextSection/LabeledTextSection.tsx?raw";
import LabeledTextSectionStory from "@/stories/LabeledTextSectionStory";
import YouTubeEmbedStory from "@/stories/YouTubeEmbedStory";
import youtubeEmbedSource from "@/components/YouTubeEmbed/YouTubeEmbed?raw";
import TagBadgeStory from "@/stories/TagBadgeStory";
import tagBadgeSource from "@/components/TagBadge/TagBadge.tsx?raw";
import SettingsSectionStory from "@/stories/SettingsSectionStory";
import settingsSectionSource from "@/components/SettingsSection/SettingsSection.tsx?raw";

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
    id: "code-block",
    title: "Code Block",
    description:
      "Multi-line code display component with optional language label",
    component: CodeBlockStory,
    componentSource: codeBlockSource,
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
    id: "inline-code",
    title: "Inline Code",
    description: "Keyboard shortcut or inline code display component",
    component: InlineCodeStory,
    componentSource: inlineCodeSource,
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
    description:
      "Full-featured modal dialog with backdrop, keyboard controls (Escape to close, Enter for main action), and scroll-lock management",
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
    id: "tab-selector",
    title: "Tab Selector",
    description: "Tab navigation component with optional custom colors",
    component: TabSelectorStory,
    componentSource: tabSelectorSource,
  },
  {
    id: "table",
    title: "Table",
    description: "Data table component with sorting and filtering",
    component: TableStory,
    componentSource: tableSource,
  },
  {
    id: "titled-list",
    title: "Titled List",
    description:
      "Generic list component with title, subtitle, action buttons, and empty state",
    component: TitledListStory,
    componentSource: titledListSource,
  },
  {
    id: "upload-area",
    title: "Upload Area",
    description: "Drag and drop file upload component",
    component: UploadAreaStory,
    componentSource: uploadAreaSource,
  },
  {
    id: "labeled-text-section",
    title: "Labeled Text Section",
    description: "",
    component: LabeledTextSectionStory,
    componentSource: labeledTextSectionSource,
  },
  {
    id: "youtube-embed",
    title: "YouTube Embed",
    description: "Shows an embedded YouTube player based on videoId",
    component: YouTubeEmbedStory,
    componentSource: youtubeEmbedSource,
  },
  {
    id: "tag-badge",
    title: "Tag Badge",
    description: "",
    component: TagBadgeStory,
    componentSource: tagBadgeSource,
  },
  {
    id: "settings-section",
    title: "Settings Section",
    description:
      "Container component for settings with optional description and variants",
    component: SettingsSectionStory,
    componentSource: settingsSectionSource,
  },
];
