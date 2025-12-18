export default function CloseButton(props: { onClick?: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
    >
      <svg
        className="w-5 h-5 text-slate-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
