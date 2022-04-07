/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/palette-maker/' : '',
};
