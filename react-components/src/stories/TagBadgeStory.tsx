import TagBadge from "@/components/TagBadge/TagBadge";

export default function TagBadgeStory() {
  return (
    <div className="flex gap-2">
      <TagBadge text="todo" />
      <TagBadge text="blog" onRemove={() => alert("blog")} />
      <TagBadge text="code" />
    </div>
  );
}
