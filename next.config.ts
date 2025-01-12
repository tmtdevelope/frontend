import type { NextConfig } from "next";
// import withBundleAnalyzer from "@next/bundle-analyzer";

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
  compress: true,
};

export default nextConfig;

// إذا أردت تفعيل Bundle Analyzer مستقبلاً استخدم الكود التالي
// export default withBundleAnalyzer({
//   enabled: process.env.NODE_ENV === "development" && process.env.ANALYZE === "true",
// })(nextConfig);
