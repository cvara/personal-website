import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ResumeExperience from "../components/resumeExperience";

const positions = [
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Frontiers",
    companyUrl: "https://www.frontiersin.org/",
    start: "Oct 2022",
    end: "Jan 2024",
    technologies:
      "JavaScript (ES2015+, Typescript, React, Next.js, Webpack, Node.js), HTML5, CSS3, et al",
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
      "JavaScript (ES2015+, Typescript, React, Redux, Webpack, Node.js), HTML5, CSS3, et al",
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
      "JavaScript (ES2015+, Typescript, React, Redux, RxDB, Socket.io, Webpack, Node.js), HTML5, CSS3, GraphQL, Docker, et al",
    description: `I worked as the lead front-end engineer of the late Atypon Thessaloniki branch towards the production of a new AI-powered product called Scitrus.`,
  },
  {
    title: "Senior Front-end Engineer",
    occupation: "Full Time",
    company: "Noowit Editions",
    start: "Jan 2015",
    end: "Dec 2016",
    technologies:
      "JavaScript (Backbone, Marionette, Webpack, Gulp, Node.js), HTML5, CSS3/LESS, et al",
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
      "JavaScript (Backbone, Marionette, Leaflet, Webpack, Gulp), HTML5, CSS3/LESS, et al",
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
      "JavaScript (Backbone, Marionette, Require.js, Grunt, Node.js), HTML5, CSS3/LESS, et al",
    description: `Science POD is a web application that facilitates the collaborative process of translating scientific articles into accessible prose. I designed and implemented its front-end and UI/UX. Notable parts of the application are its web-based editing tool with its diff checker, its job flow control tool and its order placement interface.`,
  },
  {
    title: "Full-stack Engineer",
    occupation: "Co-Founder",
    company: "Noodio",
    start: "Aug 2011",
    end: "Dec 2016",
    technologies:
      "JavaScript (Backbone, Marionette, Require.js, Grunt, Node.js), HTML5, CSS3/LESS, Java, Groovy, Grails, MySQL, MongoDB, et al",
    description: `Noodio was an award-winning four-member web startup offering targeted promotion for musicians on a local level. I authored the first version of its back-end and was responsible for re-designing, building, testing and optimizing its front-end and UX later on. The community based filtering algorithm at the core of Noodio was also part of my diploma thesis at the University of Thessaly. Noodio reached the end of its life in December 2018.`,
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

const Resume = () => (
  <Layout>
    <div className="flex flex-col gap-4">
      {positions.map((position, idx) => (
        <ResumeExperience key={idx} experience={position} />
      ))}
    </div>
  </Layout>
);

export const Head = () => <Seo title="Resume" />;

export default Resume;
