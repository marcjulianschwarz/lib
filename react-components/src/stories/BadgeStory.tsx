import Badge from "@/components/Badge/Badge";

export default function BadgeStory() {
  return (
    <div className="flex flex-col gap-4">
      <Badge text="This is a red badge" color="red" />
      <Badge text="This is a blue badge" color="blue" />
      <Badge text="This is a green badge" color="green" />
      <Badge text="#c2c2c2" hexColor="#c2c2c2" />
      <Badge text="#99ff99" hexColor="#99ff99" />
      <p>Show Hover</p>
      <Badge text="#99ff99" hexColor="#99ff99" showHoverBorder={true} />
      <Badge text="This is a blue badge" showHoverBorder={true} color="blue" />
    </div>
  );
}
