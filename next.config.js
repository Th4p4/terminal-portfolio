/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: true,
        basePath: false,
      },
    ];
  },
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: true,
  },
};

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
}
};

module.exports = nextConfig;