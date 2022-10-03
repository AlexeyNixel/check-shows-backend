import { Anime, AnimeDocument } from "./schemas/anime.schemas";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Gener } from "../gener/schemas/gener.schema";

@Injectable()
export class AnimeService {
  constructor(@InjectModel(Anime.name) private animeModel: Model<AnimeDocument>) {
  }

  async getAnimeById(animeId: string, include: string): Promise<Anime> {
    return this.animeModel.findById(animeId).populate(include);
  }

  async getAnime(include: string): Promise<Anime[]> {
    return this.animeModel.find().populate(include);
  }

  async getAnimeByCategory(include: string, categoryId: string): Promise<Anime[]> {
    return this.animeModel.find({ category: categoryId }).populate(include);
  }

  async createAnime(newAnime: Anime): Promise<Anime> {
    return this.animeModel.create(newAnime);
  }

  async updateAnime(id: string, anime: Anime): Promise<Anime> {
    return this.animeModel.findOneAndUpdate({ id }, anime);
  }

  async addGenerById(id: string, geners: Gener) {
    return this.animeModel.findByIdAndUpdate(id, geners);
  }
}