import { Injectable } from '@nestjs/common';
import { AnimeSchema } from "./anime/schemas/anime.schemas";
import { CategorySchema } from "./category/schemas/category.schema";
import { GenerSchema } from "./gener/schemas/gener.schema";
import { AuthorSchema } from "./author/schemas/author.schema";

@Injectable()
export class AppService {
  getModel(model: string) {
    const result = {}
    const models = {
      anime:AnimeSchema,
      category:CategorySchema,
      gener:GenerSchema,
      author: AuthorSchema
    }

    for (let item in models[model].paths) {
      if (models[model].paths[item].instance === 'ObjectID'){
        result[models[model].paths[item].path] = {
          name:models[model].paths[item].path,
          type: 'Relation',
          contentPath: models[model].paths[item].path,
        };
      } else {
        result[models[model].paths[item].path] = {
          name:models[model].paths[item].path,
          type:models[model].paths[item].instance,
        };
      }
    }
    return result
  }
}
