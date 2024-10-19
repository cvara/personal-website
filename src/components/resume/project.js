import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./project.module.css";
import clsx from "clsx";

const propTypes = {
  project: {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  },
  className: PropTypes.string,
};

const Project = ({ project, className }) => <div></div>;

Project.proptypes = propTypes;

export default Project;
