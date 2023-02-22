/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV == 'development';

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: isDev
    ? ''
    : 'https://cdn.jsdelivr.net/gh/thesimplegithub/mycolor-hosting',
  env: {
    PATH: isDev
      ? ''
      : 'https://cdn.jsdelivr.net/gh/thesimplegithub/mycolor-hosting',
    // PATH: isDev ? "" : "/mycolor-nextJS",
    URL: isDev ? '' : 'https://mycolor.kr',
    isDev: isDev ? true : false,
    REACT_APP_SC_DISABLE_SPEEDY: true,
  },
};

module.exports = nextConfig;
