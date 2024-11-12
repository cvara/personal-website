import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./experience.module.css";
import clsx from "clsx";

const propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string,
    occupation: PropTypes.string,
    company: PropTypes.string,
    companyUrl: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    technologies: PropTypes.string,
    diploma: PropTypes.string,
    description: PropTypes.string,
  }),
  className: PropTypes.string,
};

const highlightDiploma = description => {
  const regex = /Polytechnic Diploma/gi;

  const processedDescription = description.replace(regex, match => {
    return `
      <div class="${clsx(styles.description, "relative inline-block group")}">
        <a role="button" class="cursor-help">
          ${match}
        </a>
        <div class="absolute bottom-full left-0 mb-2 hidden group-hover:inline-block bg-gradient-to-tr from-purple to-teal text-white text-xs rounded py-2 px-2 z-10 w-[50vw] max-w-[360px] shadow shadow-black/60 font-normal leading-4">
          Degree equivalent to Bachelor and Master based on total number of ECTS credits that correspond to five (5) academic years
        </div>
      </div>`;
  });

  return processedDescription;
};

const Experience = ({ experience, className }) => {
  return (
    <div
      className={clsx(
        className,
        "[&:not(:last-child)]:pb-10 print:[&:not(:last-child)]:pb-8 relative pl-4 ml-2 print:pl-0 print:ml-0",
        "flex flex-col",
      )}
    >
      <div className="w-[2px] absolute left-0 top-2 -bottom-2 bg-gradient-to-b from-purple to-teal print:hidden">
        <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-tr from-purple to-teal absolute top-[-7px] left-[-6px] flex items-center justify-center">
          <div className="w-[10px] h-[10px] rounded-full bg-white dark:bg-navy-dark transition-colors" />
        </div>
        <div className="w-[8px] h-[2px] bg-teal absolute bottom-[-2px] left-[-3px]" />
      </div>
      <div className="shrink-1 flex">
        <div className="text-xs bg-gradient-to-tr from-purple to-teal bg-clip-text text-transparent font-semibold mb-2">
          {experience.start} - {experience.end}
        </div>
      </div>

      <div className="flex gap-1 mb-3 flex-col items-start">
        <div className="text-md font-semibold dark:font-bold">
          {experience.title}
        </div>
        <span className="hidden">&middot;</span>
        <div className="flex gap-2 items-center max-md:mb-2 flex-wrap">
          <div className="text-md">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple font-semibold border-b-[2px] border-dashed border-purple/60  hover:text-purple no-underline hover:border-purple print:text-purple"
              >
                {experience.company}
              </a>
            ) : (
              <div className="text-sm text-purple font-semibold print:text-purple">
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
        dangerouslySetInnerHTML={{
          __html: experience.description,
        }}
        className={clsx(styles.description, "font-light text-sm")}
      />

      {experience.technologies && (
        <div className="mt-4 text-xs font-normal leading-5 text-gray-dark">
          <strong className="font-semibold text-navy dark:text-gray-light">
            Tech Stack:{" "}
          </strong>
          <span
            className=""
            dangerouslySetInnerHTML={{
              __html: experience.technologies,
            }}
          />
        </div>
      )}

      {experience.diploma && (
        <div
          className="mt-4 text-xs font-medium dark:font-semibold leading-5"
          dangerouslySetInnerHTML={{
            __html: highlightDiploma(experience.diploma),
          }}
        />
      )}
    </div>
  );
};

Experience.propTypes = propTypes;

export default Experience;
