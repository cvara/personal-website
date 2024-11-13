import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Button from "../components/button";

import GithubIcon from "../svg/github_2.svg";
import LinkedinIcon from "../svg/linkedin_2.svg";

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col justify-center grow shrink">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-tr from-purple to-teal rounded-full p-[3px] mb-8 w-[146px] max-sm:w-[124px] flex items-center justify-center">
          <StaticImage
            src="../images/profile_pic.jpg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="profile pic"
            className="rounded-full overflow-clip"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-subtitleSm md:text-subtitle mb-2 md:mb-2">
            Hi there, I &apos;m{" "}
          </div>
          <div className="text-titleSm md:text-title mb-3">Christoforos</div>
          <div className="text-subtitleXs sm:text-subtitleSm md:text-subtitle mb-10 flex gap-1.5 sm:gap-2 flex-wrap justify-center">
            Web Engineer
            <span className="text-purple dark:text-white">&middot;</span>
            Innovator
            <span className="text-purple dark:text-white">&middot;</span>
            Tutor
          </div>
          <div className="flex gap-4 mb-6 max-sm:flex-col">
            <a href="mailto:c.varakliotis@gmail.com">
              <Button className="w-40">Contact Me</Button>
            </a>

            <Link to="/cv">
              <Button className="w-40">View CV</Button>
            </Link>
          </div>
          <div className="flex gap-4 ">
            <a
              href="https://github.com/cvara"
              target="_blank"
              rel="noreferrer"
              aria-label="Github Profile"
              className="hover:scale-105"
            >
              <GithubIcon height={26} width={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/christoforosvarakliotis/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:scale-105"
            >
              <LinkedinIcon height={26} width={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" index />;

export default IndexPage;
