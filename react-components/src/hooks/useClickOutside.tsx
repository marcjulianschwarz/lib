import { useRef, useEffect } from "react";

export function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  callback: () => void,
  enabled: boolean = true,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [callback, enabled]);

  return ref;
}
