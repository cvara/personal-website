/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="min-h-svh">
        <div className="absolute top-0 left-0 right-0 text-center h-[6px] bg-gradient-to-r from-purple to-teal" />
        <main>{children}</main>
        <footer className="absolute bottom-0 left-0 right-0 text-center px-2 py-4 ">
          <div className="bg-gradient-to-r from-purple to-teal inline-block text-transparent bg-clip-text font-bold text-[12px]">
            © {new Date().getFullYear()} &middot; Christoforos Varakliotis
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
