import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
   reactStrictMode: true,
  swcMinify: true,
  compress: true,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", 
})(nextConfig);