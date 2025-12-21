import ExternalUrl from "@/components/ExternalUrl/ExternalUrl";

export default function ExternalUrlStory() {
  return (
    <>
      <p>Show URL</p>
      <ExternalUrl url="https://marc-julian.com" />
      <p>Show Title</p>
      <ExternalUrl url="https://marc-julian.com" title="Marc Julians Blog" />
    </>
  );
}
