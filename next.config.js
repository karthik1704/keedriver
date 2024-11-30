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
        {
          protocol: 'https',
          hostname: 'api.keedriver.com',
          port: '',
          pathname: '/media/**',
        },
        {
          protocol: 'http',
          hostname: '3.110.169.239',
          port: '8000',
          pathname: '/media/**',
        },
      ],
    }
};

module.exports = nextConfig;
