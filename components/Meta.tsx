import Head from 'next/head';
import React from 'react';
interface ogType {
  title: string;
  og_title: string;
  description: string;
  query: string;
  img: string;
}
const Meta = ({ title, og_title, description, query, img }: ogType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={`${process.env.URL}/${query}`} />
      <meta property="og:image" content={`${process.env.PATH}/images/${img}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={og_title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={og_title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image:src"
        content={`${process.env.PATH}/images/${img}`}
      />
      <meta name="twitter:site" content={`${process.env.URL}/${query}`} />
      <meta name="description" content={description} />
      <link rel="canonical" href={`${process.env.URL}/${query}`} />
    </Head>
  );
};

export default Meta;
