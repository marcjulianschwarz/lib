import Expander from "@/components/Expander/Expander";

export default function ExpanderStory() {
  return (
    <div className="flex flex-col gap-4">
      <Expander title="Expand this text">
        <p>This is some hidden text that appears when you expand.</p>
      </Expander>
      <Expander title="Another expander">
        <p>This is another expandable section with different content.</p>
      </Expander>
    </div>
  );
}
