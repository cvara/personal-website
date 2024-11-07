import { useState, useEffect } from "react";

// Define Tailwind breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Create media query strings for each breakpoint
const queries = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  "2xl": `(min-width: ${breakpoints["2xl"]}px)`,
};

const useTailwindBreakpoint = () => {
  const getBreakpoint = () => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia(queries["2xl"]).matches) return "2xl";
    if (window.matchMedia(queries.xl).matches) return "xl";
    if (window.matchMedia(queries.lg).matches) return "lg";
    if (window.matchMedia(queries.md).matches) return "md";
    if (window.matchMedia(queries.sm).matches) return "sm";
    return "below-sm";
  };

  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateBreakpoint = () => setBreakpoint(getBreakpoint);

    const mediaQueryLists = Object.keys(queries).map(key =>
      window.matchMedia(queries[key]),
    );

    mediaQueryLists.forEach(mql =>
      mql.addEventListener("change", updateBreakpoint),
    );

    return () =>
      mediaQueryLists.forEach(mql =>
        mql.removeEventListener("change", updateBreakpoint),
      );
  }, []); // Empty dependency array, as `queries` is stable

  return breakpoint;
};

export default useTailwindBreakpoint;
