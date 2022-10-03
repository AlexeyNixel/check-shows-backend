import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";
import { Category } from "src/category/schemas/category.schema";
import { Author } from "../../author/schemas/author.schema";
import { Gener } from "../../gener/schemas/gener.schema";

export type AnimeDocument = Anime & Document

@Schema()
export class Anime {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  imageUrl: string;

  @Prop()
  rating: number;

  @Prop()
  country: string;

  @Prop()
  releaseDate: string;

  @Prop()
  age: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category" })
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Author" })
  author: Author;

  @Prop([{type: mongoose.Schema.Types.ObjectId, ref:Gener.name}])
  geners: Gener[]
}

export const AnimeSchema = SchemaFactory.createForClass(Anime);