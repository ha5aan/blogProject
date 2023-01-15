/** @type {import('next').NextConfig} */

// import MDBConnect from './lib/mongodb';
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
  ) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config

  },
  // mongoDB: new MDBConnect()
}

module.exports = nextConfig
