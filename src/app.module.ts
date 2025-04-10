import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaController } from './Controller/pessoa/pessoa.controller';
import { PessoaSchema } from './Model/pessoa/pessoa.model';
import { PessoaRepository } from './Repository/pessoa/pessoa.repository';
import { PessoaService } from './Service/pessoa/pessoa.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://192.168.100.189:27017/all_api_db?authSource=admin'),
    /* MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get(
          process.env.MONGO_URI ??
            'all_api_db://admin:root@192.168.100.189:27017/all_api_db?authSource=admin',
        ),
      }),
    }), */
    MongooseModule.forFeature([{ name: 'Pessoa', schema: PessoaSchema }]),
  ],
  controllers: [PessoaController],
  providers: [PessoaService, PessoaRepository],
})
export class AppModule {}
