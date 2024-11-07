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

import EmailIcon from "../svg/email.svg";

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
      <div className="background-gradient fixed inset-0 z-[-1] bg-gradient-to-tr from-purple-light to-teal-light dark:hidden" />

      <main className="min-h-svh flex flex-col" id="layout">
        <Header />
        <div className="flex flex-col grow shrink basis-1/2 h-0 p-2 md:p-4">
          {children}
        </div>
        <footer className="grow-0 shrink-0 flex-col flex items-center print:hidden">
          <div className="inline-flex items-center gap-2 text-purple font-medium opacity-100 text-[13px] px-2 py-3">
            <div className="bg-gradient-to-tr from-purple to-purple bg-clip-text text-transparent">
              © {new Date().getFullYear()}{" "}
            </div>
            &middot;{" "}
            <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent">
              Christoforos Varakliotis
            </span>
            &middot;{" "}
            <a
              href="mailto:c.varakliotis@gmail.com"
              title="Email"
              className="hover:scale-105"
            >
              <EmailIcon width={18} height={18} />
            </a>
          </div>
          <div className="text-center h-[5px] bg-gradient-to-r from-purple to-teal w-full" />
        </footer>
      </main>
    </>
  );
};

export default Layout;
