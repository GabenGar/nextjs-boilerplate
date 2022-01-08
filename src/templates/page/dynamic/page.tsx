import Head from "next/head";
import { Page } from "#components/pages";

interface ITemplatePageProps {}

function TemplatePage() {
  return (
    <Page heading="Template heading">
      <Head>
        <title>Template title</title>
        <meta name="description" content="Template description" />
      </Head>
    </Page>
  );
}

// export const getServerSideProps:GetServerSideProps = async (context) => {
//   return {
//     props: {}
//   }
// }

// export default TemplatePage;
