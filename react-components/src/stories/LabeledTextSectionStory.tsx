import LabeledTextSection from "@/components/LabeledTextSection/LabeledTextSection";

export default function LabeledTextSectionStory() {
  return (
    <>
      <LabeledTextSection label="Label" content="This is some text content" />
      <br></br>
      <br></br>
      <LabeledTextSection label="Label 2">
        <h1 className="font-bold">with children instead</h1>
      </LabeledTextSection>
    </>
  );
}
