import { useState, useCallback } from "react";
import defaultConfig from "tailwindcss/defaultConfig";

import useWindowResize from "./useWindowResize";

const screens = Object.entries(defaultConfig.theme.screens).reduce(
  (breakpoints, [key, value]) => {
    const parsedValue = Number(value.replace("px", ""));

    breakpoints[key] = parsedValue;

    return breakpoints;
  },
  { xs: 0 }
);

function getBreakpoints() {
  const width = window.innerWidth;

  return Object.entries(screens).reduce(
    (breakpoints, [key, value]) => {
      breakpoints[key] = width >= value;

      return breakpoints;
    },
    { width }
  );
}

export default function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState(() => getBreakpoints());

  const resizeHandler = useCallback(() => {
    setBreakpoints(getBreakpoints());
  }, []);

  useWindowResize(resizeHandler);

  return breakpoints;
}
