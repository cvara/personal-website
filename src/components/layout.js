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
    <main className="min-h-svh flex flex-col">
      <div className="flex flex-col grow shrink basis-1/2 h-0 p-2 md:p-4">
        {children}
      </div>
      <footer className="grow-0 shrink-0 flex-col flex items-center print:hidden">
        <div className="inline-flex gap-1 text-purple font-medium opacity-100 text-[12px] px-2 py-4">
          <div>© {new Date().getFullYear()} </div>&middot;{" "}
          <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
            Christoforos Varakliotis
          </span>
        </div>
        <div className="text-center h-[4px] bg-gradient-to-r from-purple to-teal w-full" />
      </footer>
    </main>
  );
};

export default Layout;
