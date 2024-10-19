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
  <div
    className={clsx(
      className,
      "group [&:not(:last-child)]:pb-10 relative pl-4 ml-2 print:pl-0",
    )}
  >
    <div className="w-[2px] absolute left-0 top-2 -bottom-2 bg-gradient-to-b from-purple to-purple print:hidden">
      <div className="w-[12px] h-[12px] rounded-full bg-gradient-to-t from-purple to-purple absolute top-[-6px] left-[-5px]" />
      <div className="w-[8px] h-[2px] bg-purple absolute bottom-[-2px] left-[-3px]" />
    </div>
    <div className="text-xs bg-gradient-to-tr from-purple to-purple bg-clip-text text-transparent font-bold mb-2">
      {experience.start} - {experience.end}
    </div>

    <div className="flex gap-2 items-center mb-2 max-md:flex-col max-md:items-start max-md:gap-1">
      <div className="text-lg font-bold">{experience.title}</div>
      <span className="max-md:hidden">&middot;</span>
      <div className="flex gap-2 items-center max-md:mb-2">
        <div className="text-md">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-tr from-purple to-teal text-transparent bg-clip-text font-bold border-b-2 border-purple hover:text-purple print:text-purple"
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
            <div className="text-sm text-gray-dark">
              {experience.occupation}
            </div>
          </>
        )}
      </div>
    </div>

    <div
      dangerouslySetInnerHTML={{ __html: experience.description }}
      className={clsx(styles.description)}
    />

    {experience.technologies && (
      <div className="mt-4 text-sm text-gray-dark">
        {experience.technologies}
      </div>
    )}
  </div>
);

Experience.propTypes = propTypes;

export default Experience;
