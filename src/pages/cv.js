import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ResumeExperience from "../components/resume/experience";
import ResumeProject from "../components/resume/project";
import ResumeTitle from "../components/resume/title";

import GithubIcon from "../svg/github.svg";
import LinkedinIcon from "../svg/linkedin.svg";
import Skills from "../components/resume/skills";

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
    description: `I joined the Product Innovation & Excellence team at Frontiers and worked towards reimagining the Research Topic pages. A sample of my work can be seen via the <a href="https://www.frontiersin.org/research-topics/13377/coronavirus-disease-covid-19-pathophysiology-epidemiology-clinical-management-and-public-health-response/magazine" target="_blank">Covid-19 Research Topic</a> page.`,
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
    description: `Taking a short break from working in the academic publishing industry, I joined the Applicant Tracking System team at Workable.`,
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
    description: `I worked as the lead front-end engineer of the late Atypon Thessaloniki branch towards the production of a new AI-powered product called Scitrus.`,
  },
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Noowit Editions",
    start: "Jan 2015",
    end: "Dec 2016",
    technologies:
      "JavaScript, Backbone, Marionette, Webpack, Gulp, Node.js, HTML5, CSS3/LESS, et al",
    description: `Noowit was a smart publication platform for easily creating and disseminating intelligent, personalized editions with aggregated or original content. I joined the team in 2015, and was responsible for engineering its UI, crafting its layout and theme engines and building the front end of its publishing tool: a web based platform allowing content creators to publish digital magazines with their original content.`,
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
    description: `HOREA (“Hellenic Observatory of Regional Economic Analysis”) is a Web GIS created in collaboration with the Department of Planning and Regional Development of the University of Thessaly. As the front-end engineer of the project I designed and implemented the UI/UX of the application, including the front end of the GIS and its decision making platform.`,
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
    description: `Science POD is a web application that facilitates the collaborative process of translating scientific articles into accessible prose. I designed and implemented its front-end and UI/UX. Notable parts of the application are its web-based editing tool with its diff checker, its job flow control tool and its order placement interface.`,
  },
  {
    title: "Front-end Engineer",
    occupation: "Contractor",
    company: "Noowit",
    start: "May 2013",
    end: "Jul 2013",
    technologies: "HTML5, CSS3, JavaScript",
    description: `As an external contractor at the time, I created a rich WYSIWYG web based text editor allowing content authors to write and publish their articles on <a href="https://x.com/noowitmags" target="_blank">Noowit</a>, providing a multitude of editing and formatting options, as well as the ability to upload and modify media elements such as images, slide-shows, audio tracks and videos. The tool was released in July 2013 and has since been open sourced on <a href="https://github.com/cvara/typely" target="_blank">Github</a>.`,
  },
  {
    title: "Full-stack Engineer",
    occupation: "Co-Founder",
    company: "Noodio",
    start: "Aug 2011",
    end: "Dec 2018",
    technologies:
      "JavaScript, Backbone, Marionette, Require.js, Grunt, Node.js, HTML5, CSS3/LESS, Java, Groovy, Grails, MySQL, MongoDB, et al",
    description: `Noodio was an award-winning four-member web startup offering targeted promotion for musicians on a local level. I authored the first version of its back-end and was responsible for re-designing, building, testing and optimizing its front-end and UX later on. The community based filtering algorithm at the core of Noodio was also part of my diploma thesis at the University of Thessaly. Having proudly won the <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">1st Award</a> in the Innovation & Entrepreneurship category at the 2015 <a href="https://acein.aueb.gr/en/ennovation-competition/" target="_blank">Ennovation</a> competition, Noodio reached the end of its life in December 2018.`,
  },
  {
    title: "Student",
    company: "University of Thessaly",
    start: "Sep 2004",
    end: "Sep 2010",
    technologies:
      "Polytechnic Diploma in Computer & Communications Engineering (degree grade 7.9/10 - Very Good)",
    description: `As part of my diploma thesis, I developed a web based application offering targeted content promotion based on a tailor-made community based filtering algorithm applied on publicly available musical content. The project later evolved into Noodio, a web based startup.`,
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
  { title: "HTML5 & CSS3", level: 9 },
  { title: "Typescript", level: 8 },
  { title: "React", level: 9 },
  { title: "Node.js", level: 7 },
  { title: "MySQL & PostgreSQL", level: 5 },
  { title: "Git", level: 8 },
  { title: "Docker", level: 3 },
];

const CV = () => (
  <Layout>
    <div className="max-w-[680px] m-auto p-4">
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
          <div className="text-3xl font-bold mb-1">
            Christoforos Varakliotis
          </div>
          <div className="text-xl mb-1 flex gap-2 items-center">
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
          {/* <div className="flex gap-2">
            <GithubIcon width={20} height="auto" />
            <LinkedinIcon width={20} height="auto" />
          </div> */}
        </div>
      </div>

      <div className="mb-14 text-lg">
        <p className="mb-3">
          A full stack web engineer showing a particular interest in the
          front-end technologies and a co-founder of a web-based startup, I have
          been professionally involved with the web ecosystem since 2011.
        </p>
        <p className="mb-3">
          My expertise lies in building and testing responsive user interfaces
          and tackling algorithmic problems being mindful of efficiency and
          performance. With a knack for design, I tend to get actively involved
          in the user experience improvement process on the projects I work on.
        </p>
        <p className="mb-3">
          Always eager to learn and apply software design patterns in pursuit of
          clean, idiomatic and maintainable code, I am passionate about all
          things Javascript, open web standards and functional programming.
        </p>
        <p className="mb-3">
          I got my Polytechnic Diploma in Computer & Communications Engineering
          from the University of Thessaly in 2010.
        </p>
      </div>

      <div className="mb-16">
        <ResumeTitle className="text-2xl mb-8">The Road So Far</ResumeTitle>
        <div className="flex flex-col">
          {positions.map((position, idx) => (
            <ResumeExperience key={idx} experience={position} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <ResumeTitle className="text-2xl mb-8">
          Featured Hobby Projects
        </ResumeTitle>
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ResumeProject key={idx} project={project} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <ResumeTitle className="text-2xl mb-8">
          Tech Skills Overview
        </ResumeTitle>
        <Skills skills={skills} />
      </div>

      <div className="mb-12">
        <ResumeTitle className="text-2xl mb-8">Tech Skills</ResumeTitle>
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
        </div>
        <div>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2">Databases</div>
            <ul className="marker:text-purple list-disc ml-5">
              <li>MySQL, PostgreSQL, MongoDB, Couchbase</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2">General Programming</div>
            <ul className="marker:text-purple list-disc ml-5">
              <li>
                <strong>Languages:</strong>C, Java, Groovy, Perl, PHP, VBA, MIPS
                Assembly, VHDL
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2">
              DevOps & Version Control
            </div>
            <ul className="marker:text-purple list-disc ml-5">
              <li>
                <strong>Tools:</strong> Git, Docker
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ResumeTitle className="text-2xl mb-8">Honors & Awards</ResumeTitle>
        <ul className="marker:text-purple ml-4">
          <li className="mb-4 list-disc">
            Award & honor from the Greek National Foundation of Scholarships for
            ranking 1st amongst students of the Dept of Computer and
            Communications Engineering, University of Thessaly, for two
            consecutive years (2004 & 2005) .
          </li>
          <li className="list-disc">
            1st Award for Noodio in the Innovation & Entrepreneurship category
            at the 2015 Ennovation competition.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="CV" />;

export default CV;
