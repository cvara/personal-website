import * as React from "react";
import clsx from "clsx";

import * as styles from "./button.module.css";

const Button = ({ children, className }) => (
  <button className={clsx(styles.button, className)}>
    <span>{children}</span>
  </button>
);

export default Button;
