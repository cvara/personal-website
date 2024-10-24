import clsx from "clsx";
import React from "react";

const Title = ({ children, className }) => {
  return (
    <div className={clsx("font-bold text-xl mb-6", className)}>
      <h3 className="inline-block bg-gradient-to-tr from-purple to-teal text-transparent bg-clip-text print:text-purple">
        {children}
      </h3>
    </div>
  );
};

export default Title;
