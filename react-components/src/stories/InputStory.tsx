import Input from "@/components/Input/Input";

export default function InputStory() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Enter some text" />
      <Input placeholder="Another input field" />
    </div>
  );
}
