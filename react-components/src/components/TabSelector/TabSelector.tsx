export interface Tab {
  id: string;
  label: string;
  color?: string;
}

interface TabSelectorProps {
  tabs: Tab[];
  selectedTabId: string | null;
  onTabSelect: (tabId: string) => void;
}

export default function TabSelector({
  tabs,
  selectedTabId,
  onTabSelect,
}: TabSelectorProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex flex-wrap gap-1">
        {tabs.map((tab) => {
          const isSelected = selectedTabId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabSelect(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isSelected
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              style={
                isSelected && tab.color
                  ? { borderBottomColor: tab.color }
                  : undefined
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
