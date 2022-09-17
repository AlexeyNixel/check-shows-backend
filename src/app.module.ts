import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// @ts-ignore
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/checkshows')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
