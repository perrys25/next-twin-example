import withTwin from "./config/withTwin.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
};

export default withTwin(nextConfig);
