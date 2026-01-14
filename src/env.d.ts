import type { EnvSchemaItem } from "./common/validations/env/env.schema";

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvSchemaItem {}
  }
}
