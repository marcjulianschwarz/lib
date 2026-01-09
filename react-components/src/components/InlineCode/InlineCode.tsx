export default function InlineCode(props: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) {
  const bgClass = props.bgColor || "bg-slate-200";

  return (
    <kbd className={`px-2 py-0.5 ${bgClass} rounded ${props.className || ""}`}>
      {props.children}
    </kbd>
  );
}
