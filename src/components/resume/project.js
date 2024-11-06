import * as React from "react";
import PropTypes from "prop-types";

import GithubIcon from "../../svg/github_2.svg";
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
      <div className="text-base font-medium mb-1 flex gap-2 items-center">
        {project.title}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
          className="hover:scale-105"
        >
          <GithubIcon height={16} width={16} />
        </a>
      </div>
      <div className="text-sm font-light">{project.description}</div>
    </div>
  );
};

Project.propTypes = propTypes;

export default Project;
