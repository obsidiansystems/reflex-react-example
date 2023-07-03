const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { dev, isServer } = options;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false
    };
    config.module.rules.push({
      test: /\.(cabal)$/,
      use: [
        {
          loader: `haskell-loader`,
          options: { dev: false, isServer },
        }
      ],
    });

    return config;
  },
}

module.exports = nextConfig
