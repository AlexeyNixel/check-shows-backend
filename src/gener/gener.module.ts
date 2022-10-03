import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Gener, GenerSchema } from "./schemas/gener.schema";
import { GenerService } from "./gener.service";
import { GenerController } from "./gener.controller";

@Module({
  imports:[MongooseModule.forFeature([{
    name:Gener.name, schema:GenerSchema
  }])
  ],
  providers:[GenerService],
  controllers:[GenerController]
})

export class GenerModule {}