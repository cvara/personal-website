import * as React from "react";

import * as styles from "./button.module.css";

const Button = ({ children }) => (
  <button className={styles.button}>
    <span>{children}</span>
  </button>
);

export default Button;
