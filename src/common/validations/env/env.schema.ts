export interface EnvSchemaItem {
  name: string;
  required?: boolean;
  default?: string;
  enum?: readonly string[];
}

export const ENV_SCHEMA = [
  { name: "SERVER_PORT", default: "5000" },
  {
    name: "NODE_ENV",
    enum: ["development", "production"],
    default: "development",
  },
  { name: "ENABLE_SWAGGER", default: "true" },
  { name: "SWAGGER_PATH", default: "/api/docs/" },
  { name: "LOG_LEVEL", default: "info" },
] as const;

export type ParsedEnvType = (typeof ENV_SCHEMA)[number]["name"];
