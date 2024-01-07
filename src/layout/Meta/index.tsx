import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../../utils/appConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:theme-color" content="#1C1C1C" />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://imgur.com/mYaln8j.png"
        />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="130" />
        <meta name="twitter:card" content="WAX Template" />
        {/* <meta name="twitter:url" content="https://castlesnft.io" /> */}
        <meta name="twitter:title" content="WAX Template" />
        <meta name="twitter:description" content="WAX Template" />
        <meta
          name="twitter:image"
          content="/image/logos/nba_draft_white_logo.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
