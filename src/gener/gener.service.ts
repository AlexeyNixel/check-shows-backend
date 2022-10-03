import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Anime } from "../anime/schemas/anime.schemas";
import { FilterQuery, Model } from "mongoose";
import { Gener, GenerDocument } from "./schemas/gener.schema";

@Injectable()
export class GenerService {
  constructor(@InjectModel(Gener.name) private generModel: Model<GenerDocument>) {
  }

  async getOne(id: string):Promise<Gener> {
    return this.generModel.findById(id)
  }

  async getAll(): Promise<Gener[]> {
    return this.generModel.find()
  }

  async createGener(gener: Gener): Promise<Gener> {
    console.log(gener);
    return this.generModel.create(gener)
  }

  async updateGener(id:string, gener: Gener): Promise<Gener> {
    return this.generModel.findByIdAndUpdate(id, gener)
  }
}