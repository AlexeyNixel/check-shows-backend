import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { type } from "os";

import { Anime } from "../../anime/schemas/anime.schemas";
export type CategoryDocument = Category & Document

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  desc: string

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Anime"})
  animes: Anime
}

export const CategorySchema = SchemaFactory.createForClass(Category)