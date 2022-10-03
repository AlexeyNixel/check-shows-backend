import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Anime } from "../../anime/schemas/anime.schemas";
import * as mongoose from "mongoose";
import { Document } from "mongoose";

export type GenerDocument = Gener & Document


@Schema()
export class Gener {
  @Prop()
  title: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Anime" })
  animes: Anime[];
}

export const GenerSchema = SchemaFactory.createForClass(Gener);