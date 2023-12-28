/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openseauserdata.com",
        port: "",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "miladymaker.net",
        port: "",
        pathname: "/milady/**",
      },
      {
        protocol: "https",
        hostname: "www.larvalabs.com",
        port: "",
        pathname: "/cryptopunks/**",
      },
    ],
  },
};

module.exports = nextConfig;
