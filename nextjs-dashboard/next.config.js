/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack here to avoid importing it
  
      // Perform customizations to the webpack config
      // Important: return the modified config
      config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader']
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;