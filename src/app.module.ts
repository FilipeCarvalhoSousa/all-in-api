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
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://admin:secret@mongodb:27017/all_in_api?authSource=admin'),
    MongooseModule.forFeature([
      { name: 'Pessoa', schema: PessoaSchema }, 
    ]),
  ],
  controllers: [PessoaController],
  providers: [PessoaService, PessoaRepository],
})
export class AppModule {}
