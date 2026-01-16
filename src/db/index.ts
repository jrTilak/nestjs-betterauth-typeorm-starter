import { join } from "node:path";

import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  migrationsRun: true,
  type: "postgres",
  synchronize: false,

  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),

  // Pick up all entity definitions and migrations (works for ts-node and compiled dist)
  entities: [join(__dirname, "../**/*.entity.{ts,js}")],
  migrations: [join(__dirname, "./migrations/*.{ts,js}")],
});
