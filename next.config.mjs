/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath:"rs_vision_documentation",
    reactStrictMode: true,
    images: { unoptimized: true }
};
export default nextConfig;
