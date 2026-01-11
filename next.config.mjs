/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
    };
    return config;
  },
};

export default nextConfig;