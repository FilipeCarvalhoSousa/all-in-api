import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// import { ConfigModule } from '@nestjs/config';
import { HelloWordController } from './Controller/hello-word/hello-word.controller';
import { HelloWordService } from './Service/hello-word/hello-word.service';
import { PessoaSchema } from './Model/pessoa/pessoa.model';
import { PessoaService } from './Service/pessoa/pessoa.service';
import { PessoaController } from './Controller/pessoa/pessoa.controller';
import { PessoaRepository } from './Repository/pessoa/pessoa.repository';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI ??
        'mongodb://admin:root@192.168.100.189:27017/mongodb?authSource=admin',
    ),
    MongooseModule.forFeature([{ name: 'Pessoa', schema: PessoaSchema }]),
    // ConfigModule.forRoot({ isGlobal: true }),
    // Conectar ao MongoDB usando a variável de ambiente
  ],
  controllers: [HelloWordController, PessoaController],
  providers: [HelloWordService, PessoaService, PessoaRepository],
})
export class AppModule {}
