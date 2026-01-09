import InlineCode from "@/components/InlineCode/InlineCode";

export default function InlineCodeStory() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        Press <InlineCode>Enter</InlineCode> to submit
      </div>
      <div>
        Use <InlineCode>Ctrl</InlineCode> + <InlineCode>C</InlineCode> to copy
      </div>
      <div>
        <InlineCode>npm install</InlineCode>
      </div>
      <div>
        Press <InlineCode bgColor="bg-blue-200">Esc</InlineCode> with custom
        background color
      </div>
      <div>
        Press <InlineCode bgColor="bg-green-200">Tab</InlineCode> with green
        background
      </div>
      <div>
        Press{" "}
        <InlineCode bgColor="bg-red-200" className="font-bold">
          Delete
        </InlineCode>{" "}
        with custom background and additional styling
      </div>
    </div>
  );
}
