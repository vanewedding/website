import { useEffect } from "react";
import { lockBodyScroll, unlockBodyScroll } from "../utils/lockBodyScroll";

export default function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      unlockBodyScroll();
    };
  }, [isLocked]);
}
