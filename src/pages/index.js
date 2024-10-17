import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Button from "../components/button";

const IndexPage = () => (
  <Layout>
    <div className="flex flex-col justify-center h-svh">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-tr from-purple to-teal rounded-full p-0.5 mb-10">
          <StaticImage
            src="../images/profile_pic.webp"
            loading="eager"
            width={146}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="profile pic"
            className="rounded-full overflow-clip"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-subtitle mb-1 text-navy">Hi there, I am </div>
          <div className="text-title mb-3 text-navy">Christoforos</div>
          <div className="text-subtitle text-navy mb-10">
            Web Engineer, Innovator, Tutor
          </div>
          <div className="flex gap-2">
            <a href="mailto:c.varakliotis@gmail.com">
              <Button className="w-40">Say hello</Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1-ytAhgZsPYOdKfWjVBpM5ylwfdotjDkw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="w-40">View CV</Button>
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
export const Head = () => <Seo title="Home" />;

export default IndexPage;
