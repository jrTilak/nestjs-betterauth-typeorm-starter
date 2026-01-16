import "dotenv/config";

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
});
