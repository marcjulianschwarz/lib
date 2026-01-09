export default function CodeBlock(props: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  language?: string;
}) {
  const bgClass = props.bgColor || "bg-slate-100";

  return (
    <div className="w-full">
      {props.language && (
        <div className="px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium rounded-t-lg border border-gray-300 border-b-0">
          {props.language}
        </div>
      )}
      <pre
        className={`p-4 ${bgClass} text-slate-800 rounded-lg ${props.language ? "rounded-t-none" : ""} overflow-x-auto border border-gray-300 ${props.className || ""}`}
      >
        <code>{props.children}</code>
      </pre>
    </div>
  );
}
