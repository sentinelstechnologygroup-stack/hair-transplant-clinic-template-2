/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // For a template: allow local images by default
    remotePatterns: []
  }
};

export default nextConfig;
