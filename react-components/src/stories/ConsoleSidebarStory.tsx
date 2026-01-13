import {
  ConsoleSidebar,
  ConsoleSidebarSection,
  ConsoleSidebarItem,
  ConsoleSidebarFooter,
} from "@/components/ConsoleSidebar";
import {
  LayoutDashboard,
  FlaskConical,
  FolderOpen,
  Sparkles,
  Activity,
  DollarSign,
  ScrollText,
  Layers,
  Terminal,
  Key,
  Gauge,
  Settings,
  BookOpen,
  Building2,
} from "lucide-react";

export default function ConsoleSidebarStory() {
  return (
    <div className="flex min-h-screen">
      <ConsoleSidebar
        header={
          <div className="text-lg font-semibold text-stone-800">
            Claude Console
          </div>
        }
        footer={
          <>
            <ConsoleSidebarItem
              icon={<BookOpen className="w-4 h-4" />}
              name="Documentation"
              link="/docs"
            />
            <ConsoleSidebarFooter
              icon={<Building2 className="w-5 h-5" />}
              title="Marc Julian Sch..."
              subtitle="Marc's Individual Org"
            />
          </>
        }
      >
        <ConsoleSidebarSection title="Build">
          <ConsoleSidebarItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            name="Dashboard"
            link="/"
          />
          <ConsoleSidebarItem
            icon={<FlaskConical className="w-4 h-4" />}
            name="Workbench"
            link="/workbench"
          />
          <ConsoleSidebarItem
            icon={<FolderOpen className="w-4 h-4" />}
            name="Files"
            link="/files"
          />
          <ConsoleSidebarItem
            icon={<Sparkles className="w-4 h-4" />}
            name="Skills"
            link="/skills"
          />
        </ConsoleSidebarSection>

        <ConsoleSidebarSection title="Analytics">
          <ConsoleSidebarItem
            icon={<Activity className="w-4 h-4" />}
            name="Usage"
            link="/usage"
          />
          <ConsoleSidebarItem
            icon={<DollarSign className="w-4 h-4" />}
            name="Cost"
            link="/cost"
          />
          <ConsoleSidebarItem
            icon={<ScrollText className="w-4 h-4" />}
            name="Logs"
            link="/logs"
          />
          <ConsoleSidebarItem
            icon={<Layers className="w-4 h-4" />}
            name="Batches"
            link="/batches"
          />
          <ConsoleSidebarItem
            icon={<Terminal className="w-4 h-4" />}
            name="Claude Code"
            link="/claude-code"
          />
        </ConsoleSidebarSection>

        <ConsoleSidebarSection title="Manage">
          <ConsoleSidebarItem
            icon={<Key className="w-4 h-4" />}
            name="API keys"
            link="/api-keys"
          />
          <ConsoleSidebarItem
            icon={<Gauge className="w-4 h-4" />}
            name="Limits"
            link="/limits"
          />
          <ConsoleSidebarItem
            icon={<Settings className="w-4 h-4" />}
            name="Settings"
            link="/settings"
          />
        </ConsoleSidebarSection>
      </ConsoleSidebar>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-stone-800">Main Content</h1>
        <p className="text-stone-600 mt-2">
          This is the main content area next to the sidebar.
        </p>
      </div>
    </div>
  );
}
