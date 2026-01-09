import { useEffect } from "react";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";

export interface ModalActionButton {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

interface ModalProps {
  onClose: () => void;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  onMainAction?: () => void;
  enableEscapeKey?: boolean;
  enableEnterKey?: boolean;
  actionButtons?: ModalActionButton[];
  otherButton?: ModalActionButton;
}

export default function Modal({
  onClose,
  title,
  children,
  onMainAction,
  enableEscapeKey = true,
  enableEnterKey = true,
  actionButtons,
  otherButton,
}: ModalProps) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && enableEscapeKey) {
        onClose();
      } else if (event.key === "Enter" && enableEnterKey && onMainAction) {
        event.preventDefault();
        onMainAction();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onMainAction, enableEscapeKey, enableEnterKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/30 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="bg-white h-full w-full md:h-auto md:max-h-[90vh] md:rounded-2xl shadow-2xl md:max-w-5xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        style={{ maxHeight: "100dvh" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-200 shrink-0">
          <h2
            id="modal-title"
            className="text-xl font-semibold text-slate-900 flex-1 pr-4"
          >
            {title}
          </h2>
          <CloseButton onClick={onClose} />
        </div>

        <div
          className="p-6 overflow-auto flex-1 overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {children}
        </div>

        {actionButtons && actionButtons.length > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-slate-200 shrink-0">
            <div>
              {otherButton && (
                <Button
                  onClick={otherButton.onClick}
                  className={otherButton.className || ""}
                >
                  {otherButton.label}
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              {actionButtons.map((button, index) => {
                let variantClass = "";
                if (button.variant === "primary") {
                  variantClass = "bg-blue-600 text-white hover:bg-blue-700";
                } else if (button.variant === "danger") {
                  variantClass = "bg-red-600 text-white hover:bg-red-700";
                } else if (button.variant === "secondary") {
                  variantClass =
                    "bg-slate-200 text-slate-700 hover:bg-slate-300";
                }

                return (
                  <Button
                    key={index}
                    onClick={button.onClick}
                    className={`${variantClass} ${button.className || ""}`}
                  >
                    {button.label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
