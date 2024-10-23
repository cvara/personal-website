import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ResumeExperience from "../components/resume/experience";
import ResumeProject from "../components/resume/project";
import ResumeTitle from "../components/resume/title";
import Skills from "../components/resume/skills";

import GithubIcon from "../svg/github.svg";
import LinkedinIcon from "../svg/linkedin.svg";
import BackIcon from "../svg/back.svg";

const positions = [
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Frontiers",
    companyUrl: "https://www.frontiersin.org/",
    start: "Oct 2022",
    end: "Jan 2024",
    technologies:
      "JavaScript (ES2015+), Typescript, React, Next.js, Webpack, Node.js, HTML5, CSS3, et al",
    description: `Joined the <strong>Product Innovation & Excellence</strong> team to reimagine Research Topic pages, with a sample available on the <a href="https://www.frontiersin.org/research-topics/13377/coronavirus-disease-covid-19-pathophysiology-epidemiology-clinical-management-and-public-health-response/magazine" target="_blank">Covid-19 Research Topic</a> page.`,
  },
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Workable",
    companyUrl: "https://www.workable.com/",
    start: "Jan 2022",
    end: "Oct 2022",
    technologies:
      "JavaScript (ES2015+), Typescript, React, Redux, Webpack, Node.js, HTML5, CSS3, et al",
    description: `Contributed to the <strong>Applicant Tracking System</strong> team, briefly stepping away from the academic publishing industry.`,
  },
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Atypon",
    companyUrl: "https://www.atypon.com/",
    start: "Jan 2017",
    end: "Jan 2022",
    technologies:
      "JavaScript (ES2015+), Typescript, React, Redux, RxDB, Socket.io, Webpack, Node.js, HTML5, CSS3, GraphQL, Docker, et al",
    description: `Led the front-end development for Atypon’s Thessaloniki branch, focusing on the creation of <strong>Scitrus</strong>, an AI-powered product for personalized scientific content.`,
  },
  {
    title: "Front-end Engineer",
    occupation: "Full Time",
    company: "Noowit Editions",
    start: "Jan 2015",
    end: "Dec 2016",
    technologies:
      "JavaScript, Backbone, Marionette, Webpack, Gulp, Node.js, HTML5, CSS3/LESS, et al",
    description: `Engineered the front-end of Noowit’s <strong>smart publication platform</strong> and developed its layout and theme engines. Built the UI for the publishing tool that enabled content creators to publish digital magazines.`,
  },
  {
    title: "Front-end Engineer",
    occupation: "Contractor",
    company: "IRETETH",
    project: "HOREA",
    companyUrl: "https://ireteth.certh.gr/",
    start: "Feb 2015",
    end: "Nov 2015",
    technologies:
      "JavaScript, Backbone, Marionette, Leaflet, Webpack, Gulp, HTML5, CSS3/LESS, et al",
    description: `Designed and implemented the UI/UX of HOREA, a <strong>Web GIS</strong> in collaboration with the <strong>University of Thessaly</strong>, including its decision-making platform and front-end for GIS functionalities.`,
  },
  {
    title: "Front-end Engineer",
    occupation: "Contractor",
    company: "Science POD",
    companyUrl: "https://sciencepod.net/",
    start: "Oct 2014",
    end: "Aug 2016",
    technologies:
      "JavaScript, Backbone, Marionette, Require.js, Grunt, Node.js, HTML5, CSS3/LESS, et al",
    description: `Designed and built the front-end and UI/UX for Science POD, including its <strong>web-based editing tool</strong>, diff checker, job flow control, and order placement interface.`,
  },
  {
    title: "Front-end Engineer",
    occupation: "Contractor",
    company: "Noowit",
    companyUrl: "https://x.com/noowitmags",
    start: "May 2013",
    end: "Jul 2013",
    technologies: "HTML5, CSS3, JavaScript",
    description: `Developed a <strong>rich WYSIWYG editor</strong> for content authors, allowing them to write and publish articles with advanced editing and media management features. The tool was open-sourced on <a href="https://github.com/cvara/typely" target="_blank">Github</a>.`,
  },
  {
    title: "Full-stack Engineer",
    occupation: "Co-Founder",
    company: "Noodio",
    start: "Aug 2011",
    end: "Dec 2018",
    technologies:
      "JavaScript, Backbone, Marionette, Require.js, Grunt, Node.js, HTML5, CSS3/LESS, Java, Groovy, Grails, MySQL, MongoDB, et al",
    description: `Co-founded Noodio, an <strong>award-winning startup</strong> offering targeted local promotion for musicians. I led the design, development, and optimization of the front-end and UX, and authored the back-end for its initial release. Noodio’s innovative business model and core idea earned the <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">1st prize</a> in the <strong>Innovation & Entrepreneurship</strong> category at the 2015 <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">Ennovation</a> competition. The community-based filtering algorithm at the heart of Noodio was also part of my diploma thesis at the University of Thessaly.`,
  },
  {
    title: "Student",
    company: "University of Thessaly",
    start: "Sep 2004",
    end: "Sep 2010",
    technologies:
      "Polytechnic Diploma in Computer & Communications Engineering (degree: 7.9/10 &middot; Very Good)",
    description: `As part of my diploma thesis, I developed a web application for targeted content promotion using a custom-built <strong>community-based filtering algorithm</strong> for musical content. This project later evolved into <strong>Noodio</strong>, my startup.`,
  },
];

const projects = [
  {
    title: "rxdb-hooks",
    url: "https://github.com/cvara/rxdb-hooks",
    description: "React hooks for integrating with RxDB",
  },
  {
    title: "typely",
    url: "https://github.com/cvara/typely",
    description: "A rich text editor for the browser inspired by medium",
  },
  {
    title: "tesserae",
    url: "https://github.com/cvara/tesserae",
    description: "Animated mosaic backgrounds with HTML5 Canvas",
  },
];

const skills = [
  { title: "Javascript", level: 10 },
  { title: "HTML5 & CSS3", level: 10 },
  { title: "Typescript", level: 9 },
  { title: "React", level: 9 },
  { title: "Next.js", level: 8 },
  { title: "Node.js", level: 7 },
];

const CV = () => (
  <Layout>
    <div className="max-w-[680px] m-auto p-4 pt-2">
      <Link
        to="/"
        className="text-sm inline-flex items-center gap-1  no-underline opacity-80 hover:opacity-100 mb-6 pr-2 print:hidden"
      >
        <BackIcon
          width={12}
          height="auto"
          className="text-purple fill-purple"
        />{" "}
        back
      </Link>
      <div className="flex gap-4 items-center mb-12">
        <div className="bg-gradient-to-tr from-purple to-teal rounded-full p-[3px] w-[112px]">
          <StaticImage
            src="../images/profile_pic.jpg"
            loading="eager"
            layout="fullWidth"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="profile pic"
            className="rounded-full overflow-clip"
          />
        </div>
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold md:font-medium mb-1">
            Christoforos Varakliotis
          </div>
          <div className="text-lg sm:text-xl mb-1 flex gap-2 items-center font-light">
            Web Engineer
            <a
              href="https://github.com/cvara"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GithubIcon width={20} height="auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/christoforosvarakliotis/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LinkedinIcon width={20} height="auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-14 font-light">
        <p className="mb-3 text-lg font-normal">
          Full-stack web engineer with a strong focus on front-end technologies
          and co-founder of a web-based startup, I’ve been professionally
          immersed in the web ecosystem since 2011.
        </p>
        <p className="mb-3">
          My expertise lies in building and testing responsive user interfaces
          while solving algorithmic challenges with a focus on efficiency and
          performance. With a passion for design, I’m deeply involved in
          improving user experiences across the projects I work on.
        </p>
        <p className="mb-3">
          I am always eager to learn and apply software design patterns to write
          clean, idiomatic, and maintainable code. I have a particular passion
          for JavaScript, open web standards, and functional programming.
        </p>
        <p className="mb-3">
          I hold a Polytechnic Diploma in Computer & Communications Engineering
          from the University of Thessaly, earned in 2010.
        </p>
      </div>

      <div className="mb-16">
        <ResumeTitle>The Road So Far</ResumeTitle>
        <div className="flex flex-col">
          {positions.map((position, idx) => (
            <ResumeExperience key={idx} experience={position} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <ResumeTitle>Featured Hobby Projects</ResumeTitle>
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ResumeProject key={idx} project={project} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <ResumeTitle>Featured Tech Skills</ResumeTitle>
        <Skills skills={skills} />
      </div>

      <div className="mb-12">
        <ResumeTitle>Tech Skills Overview</ResumeTitle>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-base font-medium mb-2">Web Development</div>
            <div className="flex flex-col gap-2 text-sm ml-0">
              <div className="font-light">
                <strong className="text-purple/80 font-medium">
                  Languages &middot;
                </strong>{" "}
                Javascript, Typescript, HTML5, CSS3, Java (Servlets/JSP), Groovy
              </div>
              <div className="font-light">
                <strong className="text-purple/80 font-medium">
                  Frameworks & Libraries &middot;
                </strong>{" "}
                React, Redux, Next.js, Express, RxJS, Backbone, Marionette,
                Grails
              </div>
              <div className="font-light">
                <strong className="text-purple/80 font-medium">
                  CSS Preprocessors & Tools &middot;
                </strong>{" "}
                Tailwind, Less, Sass, Webpack, Rollup, Gulp, Grunt
              </div>
              <div className="font-light">
                <strong className="text-purple/80 font-medium">
                  Technologies &middot;
                </strong>{" "}
                Node.js, REST, GraphQL, Socket.io, Web Workers, Service Workers,
                PWA
              </div>
            </div>
          </div>

          <div>
            <div className="text-base font-medium mb-2">
              Testing & Automation
            </div>
            <div className="text-sm ml-0 font-light">
              Jest, React Testing Library, Cypress, Karma, Mocha, Chai, Sinon,
              Istanbul
            </div>
          </div>

          <div>
            <div className="text-base font-medium mb-2">Databases</div>
            <div className="text-sm ml-0 font-light">
              RxDB, PouchDB, MySQL, PostgreSQL, MongoDB, Couchbase
            </div>
          </div>

          <div>
            <div className="text-base font-medium mb-2">
              General Programming
            </div>
            <div className="text-sm ml-0 font-light">
              C, Java, Javascript, Groovy, Perl, PHP, VBA, MIPS Assembly, VHDL
            </div>
          </div>

          <div>
            <div className="text-base font-medium mb-2">
              DevOps & Version Control
            </div>
            <div className="text-sm ml-0 font-light">Git, Docker</div>
          </div>
        </div>
      </div>

      <div>
        <ResumeTitle>Honors & Awards</ResumeTitle>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="font-medium">
              Scholarship from the Greek National Foundation of Scholarships
            </div>
            <div className="text-sm font-light">
              Awarded for ranking 1st among students in the Department of
              Computer & Communications Engineering at the University of
              Thessaly for two consecutive academic years (2004 & 2005).
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-medium">
              1st Prize &middot; Ennovation 2015
            </div>
            <div className="text-sm font-light">
              Noodio received 1st place in the Innovation & Entrepreneurship
              category at the 2015 Ennovation competition, recognizing its
              innovative business model and core idea.
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="CV" />;

export default CV;
