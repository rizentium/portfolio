/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/44585278",
      },
      {
        protocol: "https",
        hostname: "cekoto.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "notulen.rizentium.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
