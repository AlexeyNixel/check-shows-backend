import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Anime, AnimeSchema } from "./schemas/anime.schemas";
import { AnimeService } from "./anime.service";
import { AnimeRepository } from "./anime.repository";
import { AnimeController } from "./anime.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Anime.name, schema: AnimeSchema }])],
  providers:[AnimeService, AnimeRepository],
  controllers:[AnimeController]
})

export class AnimeModule {
}