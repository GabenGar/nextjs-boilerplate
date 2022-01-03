import Head from "next/head";

import type{ GetServerSideProps } from "next";

interface ITemplatePageProps {}

function TemplatePage() {
  return (<>
    <Head>
      <title>Template title</title>
      <meta name="description" content="Template description" />
    </Head>
    <h1>Template heading</h1>
  </>);
}

// export const getServerSideProps:GetServerSideProps = async (context) => {
//   return {
//     props: {}
//   }
// }

// export default TemplatePage;