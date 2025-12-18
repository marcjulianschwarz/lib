import { Link } from "react-router";

interface AccountFlyoutButtonProps {
  text: string;
  href: string;
  onNavigate: () => void;
}

export default function AccountFlyoutButton({
  text,
  href,
  onNavigate,
}: AccountFlyoutButtonProps) {
  return (
    <Link
      onClick={onNavigate}
      to={href}
      className={`bg-gray-100 rounded-lg px-4 py-3 flex items-center hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition-all`}
    >
      <p className="text-gray-900">{text}</p>
    </Link>
  );
}
