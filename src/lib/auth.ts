import { typeormAdapter } from "@hedystia/better-auth-typeorm";
import { betterAuth } from "better-auth";
import { dataSource } from "../db";

export const auth = betterAuth({
  database: typeormAdapter(dataSource, {
    outputDir: "./src/db",
  }),
  trustedOrigins: [
    process.env.BETTER_AUTH_URL,
    ...(process.env.CORS_ORIGINS?.split(",").map((origin) => origin.trim()) ||
      []),
  ],
  baseURL: process.env.BETTER_AUTH_URL,
  logger: {
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
    disabled: process.env.NODE_ENV === "production",
  },
});
