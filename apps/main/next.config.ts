import type { NextConfig } from "next";
import path from "node:path";
import { config as loadEnv } from "dotenv";

loadEnv({ path: path.resolve(__dirname, "../../.env") });

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],

  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
