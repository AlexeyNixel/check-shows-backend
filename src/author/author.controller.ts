import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { Author } from "./schemas/author.schema";

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {
  }

  @Get(":id")
  async getOne(
    @Param("id") id: string
  ): Promise<Author> {
    return this.authorService.findOne({ id });
  }

  @Get()
  async getAll(): Promise<Author[]> {
    return this.authorService.find();
  }

  @Post()
  async createAuthor(
    @Body() author: Author
  ): Promise<Author> {
    return this.authorService.create(author);
  }

  @Put(":id")
  async updateAuthor(
    @Param("id") id: string,
    @Body() author: Author
  ): Promise<Author> {
    return this.authorService.update({ id }, author);
  }
}