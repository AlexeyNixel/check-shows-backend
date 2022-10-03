import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// @ts-ignore
import { MongooseModule } from "@nestjs/mongoose";
import { AnimeModule } from "./anime/anime.module";
import { CategoryModule } from "./category/category.module";
import { AuthorModule } from "./author/author.module";
import { GenerModule } from "./gener/gener.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://root:example@localhost:27017/", { dbName: "anime", autoIndex: true }),
    AnimeModule,
    CategoryModule,
    AuthorModule,
    GenerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
