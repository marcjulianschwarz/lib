import { stories } from "@/data/stories";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="w-8/12 m-auto mt-20">
      <h1 className="text-4xl mb-10!">Stories</h1>
      <div className="flex flex-col gap-6">
        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            className="border border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:shadow-md transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2">{story.title}</h2>
            {story.description && (
              <p className="text-gray-600">{story.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
