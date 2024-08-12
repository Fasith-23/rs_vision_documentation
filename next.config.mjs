/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: process.env.NODE_ENV === "production" ? "rs_vision_documentation": undefined,
    reactStrictMode: true,
    images: { unoptimized: true }
};
export default nextConfig;
