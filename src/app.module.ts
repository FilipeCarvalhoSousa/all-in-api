import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PessoasService } from './service/pessoas/pessoas.service';
import { PessoasController } from './controller/pessoas/pessoas.controller';
import { PessoasRepository } from './repository/pessoas/pessoas.repository';
import { PessoasSchema } from './model/pessoas/pessoas.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
    }),
    MongooseModule.forFeature([{ name: 'Pessoas', schema: PessoasSchema }]),
  ],
  controllers: [AppController, PessoasController],
  providers: [AppService, PessoasService, PessoasRepository],
})
export class AppModule {}
