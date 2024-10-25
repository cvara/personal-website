import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center gap-4 grow shrink">
      <h1 className="text-6xl sm:text-8xl font-bold mb-0 bg-gradient-to-tr from-purple to-teal bg-clip-text text-transparent">
        404
      </h1>
      <div className="text-4xl font-extralight">Not Found</div>
      <div className="text-lg font-extralight text-gray-dark text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
