import { useEffect } from "react";
import CloseButton from "../CloseButton/CloseButton";

interface ModalProps {
  onClose: () => void;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default function Modal({ onClose, title, children }: ModalProps) {
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
      </div>
    </div>
  );
}
