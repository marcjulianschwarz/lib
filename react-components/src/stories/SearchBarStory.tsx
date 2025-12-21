import SearchBar from "@/components/SearchBar/SearchBar";

export default function SearchBarStory() {
  return (
    <div className="flex flex-col gap-4">
      <SearchBar placeholder="Search" />
      <SearchBar placeholder="Search for something..." />
    </div>
  );
}
