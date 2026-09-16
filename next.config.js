/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'standalone' produces a minimal self-contained build - ideal for Docker later
  output: "standalone",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:4000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
