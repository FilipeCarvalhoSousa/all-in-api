import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PessoaDto } from 'src/Dto/pessoa/pessoa.dto';
import { Pessoa } from 'src/Interface/pessoa/pessoa.interface';

@Injectable()
export class PessoaRepository {
  constructor(@InjectModel('Pessoa') private readonly pessoaModel: Model<Pessoa>) {}

  async buscarTodos(): Promise<Pessoa[]> {
    return await this.pessoaModel.find({}, { _id: false, __v: false }).sort({ date: -1 });
  }

  async buscarPorId(id: string): Promise<Pessoa | null> {
    return await this.pessoaModel.findOne({ id: id }, { _id: false, __v: false }).limit(1);
  }

  async criarPessoa(pessoa: PessoaDto): Promise<Pessoa> {
    const pessoaCriada = new this.pessoaModel(pessoa);
    return await pessoaCriada.save();
  }

  async atualizarPessoa(id: string, pessoa: PessoaDto): Promise<Pessoa | null> {
    return await this.pessoaModel.findOneAndUpdate({ id: id }, pessoa, { new: true });
  }
}
