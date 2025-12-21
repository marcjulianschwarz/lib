import Button from "@/components/Button/Button";
import { stories } from "@/data/stories";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => s.id === id);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (story?.componentSource) {
      await navigator.clipboard.writeText(story.componentSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!story) {
    return (
      <div className="w-8/12 m-auto mt-20">
        <h1 className="text-4xl mb-10!">Story Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const StoryComponent = story.component;

  if (story.fullPage) {
    return <StoryComponent />;
  }

  return (
    <div className="w-8/12 m-auto mt-20">
      <Link to="/" className="text-blue-600 hover:underline mb-6 block">
        ← Back to Stories
      </Link>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl">{story.title}</h1>
        {story.componentSource && (
          <Button onClick={handleCopy} className="flex items-center gap-2">
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy Code
              </>
            )}
          </Button>
        )}
      </div>
      {story.description && (
        <p className="text-gray-600 mb-10">{story.description}</p>
      )}
      <div className="border-t pt-10">
        <StoryComponent />
      </div>
    </div>
  );
}
