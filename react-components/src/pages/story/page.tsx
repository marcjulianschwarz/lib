import { stories } from "@/data/stories";
import { Link, useParams } from "react-router";

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => s.id === id);

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
      <h1 className="text-4xl mb-4!">{story.title}</h1>
      {story.description && (
        <p className="text-gray-600 mb-10">{story.description}</p>
      )}
      <div className="border-t pt-10">
        <StoryComponent />
      </div>
    </div>
  );
}
