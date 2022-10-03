import { Controller, Get } from "@nestjs/common";
import { AppService } from "../app.service";
import { AppModule } from "../app.module";

@Controller()
export class ModelController {
  constructor(private appModule: AppModule) {}

  @Get()
  async getModel(){
    return this.appModule
  }
}