/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  crossOrigin: "anonymous",
  async redirects() {
    return [
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
    ]
  },
  trailingSlash: true,
};

export default nextConfig;
