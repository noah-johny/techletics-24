/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
      {
        hostname: "dnbca6q7do6n.cloudfront.net",
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
