import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@workspace/ui"],

    allowedDevOrigins: [
        "192.168.1.9",
    ],
};

export default nextConfig;