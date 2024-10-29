import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import useDarkMode from "../hooks/useDarkMode";
import BackIcon from "../svg/back.svg";
import DarkIcon from "../svg/theme-dark.svg";
import LightIcon from "../svg/theme-light.svg";

const Header = ({ siteTitle }) => {
  const [theme, toggleTheme] = useDarkMode();
  const location = useLocation();

  const isNotRoot = location.pathname !== "/";

  return (
    <header className="flex justify-between items-center h-12 px-4 m-auto w-full print:hidden">
      <div>
        {isNotRoot && (
          <Link
            to="/"
            className="text-sm inline-flex items-center gap-1 no-underline opacity-80 hover:opacity-100 pr-2 dark:opacity-90"
          >
            <BackIcon
              width={12}
              height="auto"
              className="text-purple fill-purple"
            />{" "}
            back
          </Link>
        )}
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <LightIcon width={18} className="fill-white/20 hover:fill-white/80" />
        ) : (
          <DarkIcon width={18} className="fill-navy/20 hover:fill-navy/80" />
        )}
      </button>
    </header>
  );
};

export default Header;
