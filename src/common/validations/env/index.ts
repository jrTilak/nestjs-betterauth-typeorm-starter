import { logger } from "@/lib/logger";
import { ENV_SCHEMA, type EnvSchemaItem } from "./env.schema";

export function validateEnv(): void {
  const errors: string[] = [];

  for (const schema of ENV_SCHEMA) {
    const {
      name,
      required = true,
      default: defaultValue,
      enum: allowedValues,
    } = schema as EnvSchemaItem;

    let value = process.env[name];

    if (value === undefined) {
      if (defaultValue !== undefined) {
        value = defaultValue;
      } else if (required) {
        errors.push(`${name} is required`);
        continue;
      } else {
        continue;
      }
    }

    if (allowedValues && !allowedValues.includes(value)) {
      errors.push(`${name} must be one of: ${allowedValues.join(", ")}`);
      continue;
    }

    process.env[name] = value; // always string
  }

  if (errors.length > 0) {
    logger.error("Environment validation failed");
    errors.forEach((e) => {
      logger.error(e);
    });
    process.exit(1);
  }
}
