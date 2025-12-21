import SearchBar from "@/components/SearchBar/SearchBar";
import { stories } from "@/data/stories";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleCopy = async (
    e: React.MouseEvent,
    storyId: string,
    source: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(source);
    setCopiedId(storyId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-8/12 m-auto mt-20">
      <h1 className="text-4xl mb-6!">Stories</h1>
      <SearchBar
        placeholder="Search stories..."
        value={searchQuery}
        onChange={(value) => setSearchQuery(value)}
      />
      <div className="flex flex-col gap-3 mt-6">
        {filteredStories.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            className="border border-gray-300 rounded-lg p-4 hover:border-gray-400 hover:shadow-md transition-all relative"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1">{story.title}</h2>
                {story.description && (
                  <p className="text-gray-600 text-sm">{story.description}</p>
                )}
              </div>
              {story.componentSource && (
                <button
                  onClick={(e) =>
                    handleCopy(e, story.id, story.componentSource!)
                  }
                  className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                  title="Copy component code"
                >
                  {copiedId === story.id ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} className="text-gray-600" />
                  )}
                </button>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
