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
      "basis-1/4 h-2 first-of-type:rounded-l last-of-type:rounded-r",
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
      <div className="flex flex-col gap-4 mb-8">
        {coreSkills.map(skill => (
          <div key={skill.title}>
            <div className="font-bold mb-1">{skill.title}</div>
            <div className="flex gap-[2px]">
              {new Array(10).fill(null).map((v, idx) => (
                <SkillGauge idx={idx + 1} level={skill.level} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="text-lg font-bold mb-2">
          Web Development (Front-End Focus)
        </div>
        <ul className="marker:text-purple list-disc ml-5">
          <li>
            <strong>Languages:</strong> Javascript, Typescript, HTML5, CSS3,
            Java Servlets/JSP, Groovy/Grails
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> React, Next.js, Redux,
            RxJS, Backbone, Marionette, Express
          </li>
          <li>
            <strong>CSS Preprocessors & Tools:</strong> Less, Sass, Webpack,
            Gulp, Grunt
          </li>
          <li>
            <strong>Technologies:</strong> Node.js, REST, GraphQL, Socket.io,
            Web Workers, Service Workers, Progressive Web Apps (PWAs)
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="text-lg font-bold mb-2">Testing & Automation</div>
        <ul className="marker:text-purple list-disc ml-5">
          <li>
            Jest, Cypress, React Testing Library, Karma, Mocha, Chai, Sinon,
            Istanbul
          </li>
        </ul>

        <div className="mb-4">
          <div className="text-lg font-bold mb-2">Databases</div>
          <ul className="marker:text-purple list-disc ml-5">
            <li>MySQL, PostgreSQL, MongoDB, Couchbase</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-lg font-bold mb-2">General Programming</div>
          <ul className="marker:text-purple list-disc ml-5">
            <li>
              <strong>Languages:</strong>C, Java, Groovy, Perl, PHP, VBA, MIPS
              Assembly, VHDL
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-lg font-bold mb-2">DevOps & Version Control</div>
          <ul className="marker:text-purple list-disc ml-5">
            <li>
              <strong>Tools:</strong> Git, Docker
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = propTypes;

export default Skills;
