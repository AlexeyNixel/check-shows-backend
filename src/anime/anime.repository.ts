import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Anime, AnimeDocument } from "./schemas/anime.schemas";
import { Model, FilterQuery } from "mongoose";

@Injectable()
export class AnimeRepository {
  constructor(
    @InjectModel(Anime.name) private animeModel: Model<AnimeDocument>) {
  }

  async findOne(animeFilterQuery: FilterQuery<Anime>): Promise<Anime> {
    return this.animeModel.findOne(animeFilterQuery);
  }

  async find(animeFilterQuery: FilterQuery<Anime>): Promise<Anime[]> {
    return this.animeModel.find(animeFilterQuery);
  }

  async create(anime: Anime): Promise<Anime> {
    const newAnime = new this.animeModel(anime);
    return newAnime.save();
  }

  async findOneAndUpdate(
    animeFilterQuery: FilterQuery<Anime>,
    anime: Partial<Anime>): Promise<Anime> {
    return this.animeModel.findOneAndUpdate(animeFilterQuery, anime);
  }

}