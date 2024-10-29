import * as React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

const propTypes = {
  skills: PropTypes.arrayOf({
    title: PropTypes.string,
    level: PropTypes.number,
  }),
  className: PropTypes.string,
};

const SkillGauge = ({ idx, level }) => (
  <div
    className={clsx(
      "basis-1/4 h-[5px] first-of-type:rounded-l last-of-type:rounded-r",
      {
        "bg-gradient-to-tr from-purple to-purple": level >= idx,
        "bg-gray dark:bg-purple-light opacity-25 dark:opacity-10": level < idx,
      },
    )}
  />
);

const Skills = ({ skills, className }) => {
  const coreSkills = skills.filter(skill => typeof skill.level === "number");

  return (
    <div className="flex justify-left">
      <div className="grid grow grid-cols-[auto_minmax(0,_1fr)] max-w-[460px] gap-4 mb-8">
        {coreSkills.map(skill => (
          <React.Fragment key={skill.title}>
            <div className="font-medium text-right text-sm">{skill.title}</div>
            <div className="flex gap-[1px] items-center min-w-0 max-w-[400px]">
              {new Array(10).fill(null).map((v, idx) => (
                <SkillGauge idx={idx + 1} level={skill.level} key={idx} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = propTypes;

export default Skills;
