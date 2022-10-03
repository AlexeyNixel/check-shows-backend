import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from "./schemas/category.schema";
import { FilterQuery, Model } from "mongoose";


@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }

  async findOne(queryCategoryParam: FilterQuery<Category>): Promise<Category> {
    return this.categoryModel.findOne(queryCategoryParam)
  }

  async find(): Promise<Category[]> {
    return this.categoryModel.find()
  }

  async create(newCategory: Category): Promise<Category> {
    return this.categoryModel.create(newCategory)
  }

  async findOneAndUpdate(queryCategoryParam: FilterQuery<Category>,
                         update: Category): Promise<Category> {
    return this.categoryModel.findOneAndUpdate(queryCategoryParam, update)
  }
}