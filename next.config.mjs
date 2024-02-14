/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
        pathname: "**",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;
