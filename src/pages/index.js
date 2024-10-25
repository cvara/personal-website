import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Button from "../components/button";

import GithubIcon from "../svg/github.svg";
import LinkedinIcon from "../svg/linkedin.svg";

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col justify-center grow shrink">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-tr from-purple to-teal rounded-full p-[3px] mb-8 w-[146px] max-sm:w-[124px]">
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
        <div className="flex flex-col items-center">
          <div className="text-subtitleSm md:text-subtitle mb-2 md:mb-2 text-navy">
            Hi there, I am{" "}
          </div>
          <div className="text-titleSm md:text-title mb-3 text-navy">
            Christoforos
          </div>
          <div className="text-subtitleSm md:text-subtitle text-navy mb-10">
            Web Engineer, Innovator, Tutor
          </div>
          <div className="flex gap-4 mb-6 max-sm:flex-col">
            <a href="mailto:c.varakliotis@gmail.com">
              <Button className="w-40">Say hello</Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1-ytAhgZsPYOdKfWjVBpM5ylwfdotjDkw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Link to="/cv">
                <Button className="w-40">View CV</Button>
              </Link>
            </a>
          </div>
          <div className="flex gap-4 ">
            <a href="https://github.com/cvara" target="_blank" rel="noreferrer">
              <GithubIcon width={32} height="auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/christoforosvarakliotis/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon width={32} height="auto" />
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
