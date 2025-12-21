import UploadArea from "@/components/UploadArea/UploadArea";

export default function UploadAreaStory() {
  return (
    <UploadArea
      onFilesChanged={(files) => {
        console.log("Files uploaded:", files);
      }}
    />
  );
}
