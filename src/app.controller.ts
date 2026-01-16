import { Controller, Get } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { ApiResponse } from "./common/dto/response/api-response.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    description: "Hello World",
  })
  get(): ApiResponse<string> {
    const res = this.appService.get();
    return new ApiResponse(res);
  }
}
