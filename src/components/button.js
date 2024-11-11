import * as React from "react";
import clsx from "clsx";

import * as styles from "./button.module.css";

const Button = ({ children, className }) => (
  <button
    className={clsx(
      "p-[2px] bg-gradient-to-tr from-purple to-teal rounded-3xl relative group",
      "hover:to-purple",
      className,
    )}
  >
    <div className="bg-white rounded-3xl py-2 px-4 dark:bg-navy-dark transition-colors">
      <span className="bg-gradient-to-tr from-purple to-teal bg-clip-text text-transparent group-hover:text-purple">
        {children}
      </span>
    </div>
  </button>
);

export default Button;
