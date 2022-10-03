import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from './app.service';
import { AnimeSchema } from "./anime/schemas/anime.schemas";
import { CategorySchema } from "./category/schemas/category.schema";
import { GenerSchema } from "./gener/schemas/gener.schema";
import { AuthorSchema } from "./author/schemas/author.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('model/:name')
  async getModel(
    @Param('name')name: string
  ) {

    return this.appService.getModel(name)
  }
}
