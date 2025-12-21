import Button from "@/components/Button/Button";

export default function ButtonStory() {
  return (
    <div className="flex flex-col gap-4">
      <Button className="w-fit">Click this</Button>
      <Button className="w-fit" onClick={() => alert("Button clicked!")}>
        Click me
      </Button>
    </div>
  );
}
