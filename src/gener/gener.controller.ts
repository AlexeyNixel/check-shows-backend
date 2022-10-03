import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GenerService } from "./gener.service";
import { Gener } from "./schemas/gener.schema";

@Controller('gener')
export class GenerController {
  constructor(private readonly generService: GenerService) {}

  @Get(':id')
  async getOne(
    @Param('id')id:string
  ): Promise<Gener> {
    return this.generService.getOne(id)
  }

  @Get()
  async getAll():Promise<Gener[]> {
    return this.generService.getAll()
  }

  @Post()
  async createGener(
    @Body()gener: Gener
  ):Promise<Gener>{
    return this.generService.createGener(gener)
  }
}