import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AnimeService } from "./anime.service";
import { Anime, AnimeSchema } from "./schemas/anime.schemas";
import { Gener } from "../gener/schemas/gener.schema";

@Controller("anime")
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {
  }

  @Get(":id")
  async getAnimeById(
    @Param("id") id: string,
    @Query("include") include: string
  ): Promise<Anime> {
    return await this.animeService.getAnimeById(id, include);
  }

  @Get()
  async getAnime(
    @Query("include") include: string
  ): Promise<Anime[]> {
    return this.animeService.getAnime(include);
  }

  @Get("category/:id")
  async getAnimeByCategory(
    @Param("id") id: string,
    @Query("include") include: string
  ): Promise<Anime[]> {
    return this.animeService.getAnimeByCategory(include, id);
  }

  @Post()
  async createAnime(@Body() anime: Anime): Promise<Anime> {
    return this.animeService.createAnime(anime);
  }

  @Put(":id")
  async updateAnime(
    @Param("id") id: string,
    @Body() anime: Anime
  ): Promise<Anime> {
    return this.animeService.updateAnime(id, anime);
  }

  @Put("geners/:id")
  async updateAnimeGener(
    @Param("id") id: string,
    @Body() gener: Gener
  ): Promise<Anime> {
    return this.animeService.addGenerById(id, gener);
  }
}