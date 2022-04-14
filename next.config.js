/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/geobus',
        permanent: false,
      },
    ];
  },
};
