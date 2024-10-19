import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./project.module.css";
import GithubIcon from "../../svg/github.svg";
import clsx from "clsx";

const propTypes = {
  project: {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  },
  className: PropTypes.string,
};

const Project = ({ project, className }) => {
  return (
    <div className="mb-6 last-of-type:mb-0">
      <div className="text-lg font-bold mb-1 flex gap-2 items-center">
        {project.title}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
        >
          <GithubIcon height="auto" width={20} />
        </a>
      </div>
      <div>{project.description}</div>
    </div>
  );
};

Project.propTypes = propTypes;

export default Project;
