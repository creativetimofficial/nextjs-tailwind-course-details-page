/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/nextjs-tailwind-course-details-page/",
  basePath: "/nextjs-tailwind-course-details-page",
};

module.exports = nextConfig;
