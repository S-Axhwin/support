/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/database"],
  reactStrictMode: true,
};

export default nextConfig;
