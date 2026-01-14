import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerModuleGlobal } from "./lib/logger/logger.module";

@Module({
  imports: [LoggerModuleGlobal],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
