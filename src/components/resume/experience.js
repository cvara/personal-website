import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./experience.module.css";
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

const Experience = ({ experience, className }) => (
  <div className={clsx(className, "[&:not(:last-child)]:pb-8")}>
    <div className="text-xs text-gray-dark">
      {experience.start} - {experience.end}
    </div>

    <div className="flex gap-2 items-center mb-2">
      <div className="text-lg font-bold">{experience.title}</div>
      &middot;
      <div className="text-md">
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-tr from-purple to-teal text-transparent bg-clip-text font-bold border-b-2 border-purple hover:text-purple"
          >
            {experience.company}
          </a>
        ) : (
          <div className="bg-gradient-to-tr from-purple to-teal text-transparent bg-clip-text font-bold">
            {experience.company}
          </div>
        )}
      </div>
      {experience.occupation && (
        <>
          &middot;
          <div className="text-sm text-gray-dark">{experience.occupation}</div>
        </>
      )}
    </div>

    <div
      dangerouslySetInnerHTML={{ __html: experience.description }}
      className={styles.description}
    />
  </div>
);

Experience.propTypes = propTypes;

export default Experience;
