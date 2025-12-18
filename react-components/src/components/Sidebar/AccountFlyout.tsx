import AccountFlyoutButton from "./AccountFlyoutButton";

interface AccountFlyoutProps {
  showFlyout: boolean;
  onNavigate: () => void;
  isAuthenticated: boolean;
}

export default function AccountFlyout({
  showFlyout,
  onNavigate,
  isAuthenticated,
}: AccountFlyoutProps) {
  return (
    <div
      className={`
        absolute z-100 flex flex-col gap-2
        bg-white shadow-lg border border-gray-300 rounded-2xl
        w-[200px] overflow-hidden origin-bottom-left
        transition-all duration-100 ease-in-out
        ${showFlyout ? "opacity-100 visible scale-100 p-2" : "opacity-0 invisible scale-95 p-0"}
        top-[calc(100%+30px)] left-[calc(-200%-32px)]
        sm:top-auto sm:left-[calc(100%+30px)] sm:bottom-[-15px] sm:origin-left
      `}
      style={{
        height: showFlyout ? "122px" : "0",
      }}
    >
      {isAuthenticated ? (
        <>
          <AccountFlyoutButton
            text="Account"
            onNavigate={onNavigate}
            href="/account"
          />
          <AccountFlyoutButton
            text="Logout"
            onNavigate={onNavigate}
            href="/logout"
          />
        </>
      ) : (
        <>
          <AccountFlyoutButton
            text="Login"
            onNavigate={onNavigate}
            href="/login"
          />
          <AccountFlyoutButton
            text="Sign Up"
            onNavigate={onNavigate}
            href="/register"
          />
        </>
      )}
    </div>
  );
}
