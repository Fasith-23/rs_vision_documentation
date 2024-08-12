/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/rs_vision_documentation",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true }
};
  
export default nextConfig;
