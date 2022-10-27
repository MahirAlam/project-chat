/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  swcMinify: true,
  // webpack: (config) => {
  //   config.snapshot = {
  //     ...(config.snapshot ?? {}),
  //     // Add all node_modules but @next module to managedPaths
  //     // Allows for hot refresh of changes to @next module
  //     managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@next)/],
  //   };
  //   return config;
  // },
}

module.exports = nextConfig
