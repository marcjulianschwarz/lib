import Badge from "@/components/Badge/Badge";

export default function BadgeStory() {
  return (
    <div className="flex flex-col gap-4">
      <Badge text="This is a red badge" color="red" />
      <Badge text="This is a blue badge" color="blue" />
      <Badge text="This is a green badge" color="green" />
    </div>
  );
}
