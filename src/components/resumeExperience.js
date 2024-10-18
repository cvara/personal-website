import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./resumeExperience.module.css";
import clsx from "clsx";

const propTypes = {
  experience: {
    title: PropTypes.string,
    occupation: PropTypes.string,
    company: PropTypes.string,
    companyUrl: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    technologies: PropTypes.string,
    description: PropTypes.string,
  },
  className: PropTypes.string,
};

const ResumeExperience = ({ experience, className }) => (
  <div className={clsx(styles.experience, className)}>
    <div className="flex gap-2 items-center">
      <div>{experience.title}</div>
      <div>{experience.occupation}</div>
      <div>
        {experience.companyUrl ? (
          <a href={experience.companyUrl} target="_blank" rel="noreferrer">
            {experience.company}
          </a>
        ) : (
          <>{experience.company}</>
        )}
      </div>
      <div>{experience.title}</div>
    </div>
    <div dangerouslySetInnerHTML={{ __html: experience.description }} />
  </div>
);

ResumeExperience.propTypes = propTypes;

export default ResumeExperience;
