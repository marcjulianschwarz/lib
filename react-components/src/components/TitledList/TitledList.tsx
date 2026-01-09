import { Plus } from "lucide-react";

interface TitledListProps<T = unknown> {
  items: T[];
  title?: string;
  singularTitle?: string;
  onItemClick?: (item: T) => void;
  onActionClick?: (item: T) => void;
  actionIcon?: React.ComponentType<{ className?: string }>;
  actionLabel?: string;
  maxHeight?: string;
  getTitle: (item: T) => string;
  getSubtitle?: (item: T) => string;
  getId: (item: T) => string | number;
  emptyState?: React.ReactNode;
}

export default function TitledList<T>({
  items = [],
  title = "Items",
  singularTitle = "Item",
  onItemClick,
  onActionClick,
  actionIcon: ActionIcon = Plus,
  actionLabel = "Add item",
  maxHeight = "700px",
  getTitle,
  getSubtitle,
  getId,
  emptyState,
}: TitledListProps<T>) {
  const count = items.length;
  const displayTitle = `${count} ${count !== 1 ? title : singularTitle} gefunden`;

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">{displayTitle}</h2>
      </div>
      {items.length === 0 && emptyState ? (
        emptyState
      ) : (
        <ul
          className="divide-y divide-gray-200 overflow-y-auto"
          style={{ maxHeight }}
        >
          {items.map((item, index) => (
            <li
              key={getId(item) || `item-${index}`}
              className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
              onClick={() => onItemClick?.(item)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {getTitle(item)}
                  </p>
                  {getSubtitle && (
                    <p className="text-sm text-gray-500">{getSubtitle(item)}</p>
                  )}
                </div>
                {onActionClick && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onActionClick(item);
                    }}
                    className="ml-2 p-1 hover:bg-blue-100 hover:cursor-pointer rounded transition-colors shrink-0"
                    aria-label={actionLabel}
                  >
                    <ActionIcon className="h-5 w-5 text-blue-600" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
