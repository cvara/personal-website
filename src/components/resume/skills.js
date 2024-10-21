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
        "bg-gray opacity-25": level < idx,
      },
    )}
  />
);

const Skills = ({ skills, className }) => {
  const coreSkills = skills.filter(skill => typeof skill.level === "number");

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] gap-4 mb-8">
        {coreSkills.map(skill => (
          <React.Fragment key={skill.title}>
            <div className="font-bold text-right text-sm">{skill.title}</div>
            <div className="flex gap-[1px] items-center min-w-0">
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