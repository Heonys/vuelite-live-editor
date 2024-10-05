import { useEffect } from "react";

export function useNestedScrollLock(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let isLocked = false;
    let lastScroll = performance.now();

    function handleScroll() {
      if (!isLocked) {
        isLocked = true;
        node!.style.pointerEvents = "none";
      }
      lastScroll = performance.now();
    }

    function updateLock() {
      if (isLocked && performance.now() - lastScroll > 150) {
        isLocked = false;
        node!.style.pointerEvents = "";
      }
    }

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(updateLock, 60);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [ref]);
}
