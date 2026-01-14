import packageJson from "../../package.json";

export const APP_CONFIG = {
  name: packageJson.name,
  version: packageJson.version.split("@")[0],
  mode: packageJson.version.split("@").pop() as "alpha" | "beta" | "stable",
};
