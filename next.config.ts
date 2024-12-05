import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Specify static site export
  output: 'export',

  // Custom webpack configuration
  webpack(config: any) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },

  // Optionally disable image optimization for static exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
