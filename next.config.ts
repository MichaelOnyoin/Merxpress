import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io/api/v1/image/assets',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
