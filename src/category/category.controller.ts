import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "./schemas/category.schema";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Get(":id")
  async getOne(
    @Param("id") id: string
  ): Promise<Category> {
    return this.categoryService.findOne({ id });
  }

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoryService.find();
  }

  @Post()
  async createCategory(
    @Body() newCategory: Category
  ): Promise<Category> {
    return this.categoryService.create(newCategory);
  }

  @Put(":id")
  async updateCategory(
    @Param("id") id: string,
    @Body() updateCategory: Category
  ): Promise<Category> {
    return this.categoryService.findOneAndUpdate(
      { id },
      updateCategory
    );
  }
}