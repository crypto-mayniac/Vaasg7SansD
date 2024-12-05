import type { NextConfig } from "next";

const nextConfig = {
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
};
module.exports = nextConfig;