/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'http',
          hostname: 'devapi.keedriver.com',
          port: '',
          pathname: '/media/**',
        },
      ],
    }
};

module.exports = nextConfig;
