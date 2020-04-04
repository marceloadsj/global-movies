import { useEffect } from "react";

export default function useWindowResize(handler) {
  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [handler]);
}
