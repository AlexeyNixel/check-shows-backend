import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Author, AuthorDocument } from "./schemas/author.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {
  }

  async findOne(queryAuthorParam: FilterQuery<Author>): Promise<Author> {
    return this.authorModel.findOne(queryAuthorParam);
  }

  async find(): Promise<Author[]> {
    return this.authorModel.find();
  }

  async create(author: Author): Promise<Author> {
    return this.authorModel.create(author);
  }

  async update(queryAuthorParam: FilterQuery<Author>, author: Author): Promise<Author> {
    return this.authorModel.findOneAndUpdate(queryAuthorParam, author);
  }
}