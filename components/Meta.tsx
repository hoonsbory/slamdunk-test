import Head from 'next/head';
import React from 'react';
interface ogType {
  title: string;
  og_title: string;
  description: string;
  url: string;
}
const Meta = ({ title, og_title, description, url }: ogType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${process.env.PATH}/images/metaImg.jpg`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={og_title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={og_title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${process.env.PATH}/images/mainImg.jpg`}
      />
      <meta name="twitter:site" content={url} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Meta;
