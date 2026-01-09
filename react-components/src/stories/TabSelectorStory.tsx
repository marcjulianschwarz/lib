import { useState } from "react";
import TabSelector, { type Tab } from "@/components/TabSelector/TabSelector";

export default function TabSelectorStory() {
  const [selectedTab1, setSelectedTab1] = useState("home");
  const [selectedTab2, setSelectedTab2] = useState("profile");
  const [selectedTab3, setSelectedTab3] = useState("overview");

  const basicTabs: Tab[] = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "settings", label: "Settings" },
    { id: "notifications", label: "Notifications" },
  ];

  const coloredTabs: Tab[] = [
    { id: "overview", label: "Overview", color: "#10b981" },
    { id: "analytics", label: "Analytics", color: "#8b5cf6" },
    { id: "reports", label: "Reports", color: "#f59e0b" },
    { id: "team", label: "Team", color: "#ec4899" },
  ];

  const manyTabs: Tab[] = [
    { id: "tab1", label: "Dashboard" },
    { id: "tab2", label: "Projects" },
    { id: "tab3", label: "Tasks" },
    { id: "tab4", label: "Calendar" },
    { id: "tab5", label: "Messages" },
    { id: "tab6", label: "Files" },
    { id: "tab7", label: "Contacts" },
    { id: "tab8", label: "Reports" },
  ];

  const [selectedTab4, setSelectedTab4] = useState("tab1");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-3">
          Basic tab selector
        </h3>
        <TabSelector
          tabs={basicTabs}
          selectedTabId={selectedTab1}
          onTabSelect={setSelectedTab1}
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Selected tab: <span className="font-medium">{selectedTab1}</span>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-3">
          Tabs with custom colors
        </h3>
        <TabSelector
          tabs={coloredTabs}
          selectedTabId={selectedTab2}
          onTabSelect={setSelectedTab2}
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Selected tab: <span className="font-medium">{selectedTab2}</span>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-3">
          Many tabs (wrapping)
        </h3>
        <TabSelector
          tabs={manyTabs}
          selectedTabId={selectedTab4}
          onTabSelect={setSelectedTab4}
        />
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Selected tab: <span className="font-medium">{selectedTab4}</span>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-3">
          With content below
        </h3>
        <TabSelector
          tabs={coloredTabs}
          selectedTabId={selectedTab3}
          onTabSelect={setSelectedTab3}
        />
        <div className="mt-4 p-6 border border-gray-200 rounded-lg">
          {selectedTab3 === "overview" && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Overview</h4>
              <p className="text-gray-600">
                This is the overview content. View your key metrics and insights
                here.
              </p>
            </div>
          )}
          {selectedTab3 === "analytics" && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Analytics</h4>
              <p className="text-gray-600">
                Deep dive into your data with advanced analytics and charts.
              </p>
            </div>
          )}
          {selectedTab3 === "reports" && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Reports</h4>
              <p className="text-gray-600">
                Generate and download detailed reports for your records.
              </p>
            </div>
          )}
          {selectedTab3 === "team" && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Team</h4>
              <p className="text-gray-600">
                Manage your team members and their permissions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
