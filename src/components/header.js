import * as React from "react";
import { Link } from "gatsby";
import useDarkMode from "../hooks/useDarkMode";

const Header = ({ siteTitle }) => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <header className="">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌞" : "🌜"}
      </button>
    </header>
  );
};

export default Header;
