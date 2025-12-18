import { Upload } from "lucide-react";
import { useState, type DragEvent } from "react";
import Input from "../Input/Input";

interface UploadAreaProps {
  onFilesChanged?: (files: File[]) => void;
}

export default function UploadArea({ onFilesChanged }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    setSelectedFiles(files);
    onFilesChanged?.(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setSelectedFiles(files);
    onFilesChanged?.(files);
  };

  return (
    <div className="mb-8">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-12 text-center transition-all
          ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100"
          }
        `}
      >
        <Upload
          size={48}
          color="currentColor"
          strokeWidth={2}
          className="mx-auto mb-4 text-slate-400"
        />
        <p className="text-slate-700 font-medium mb-2">
          Drag and drop files here
        </p>
        <p className="text-slate-500 text-sm mb-4">or</p>
        <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
          <span>Browse Files</span>
          <Input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-900 mb-2">
            {selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""}{" "}
            selected:
          </p>
          <ul className="text-sm text-blue-800 space-y-1">
            {selectedFiles.map((file, index) => (
              <li key={index}>• {file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
