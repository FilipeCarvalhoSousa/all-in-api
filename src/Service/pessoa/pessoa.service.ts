import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { PessoaRepository } from 'src/Repository/pessoa/pessoa.repository';
import { Pessoa } from 'src/Interface/pessoa/pessoa.interface';

@Injectable()
export class PessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}

  async buscarTodos() {
    return await this.pessoaRepository.buscarTodos();
  }

  async buscarPorId(id: string) {
    const pessoa = await this.pessoaRepository.buscarPorId(id);
    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    return await this.pessoaRepository.buscarPorId(id);
  }

  async criarPessoa(pessoa: any): Promise<Pessoa>{
    pessoa.id = uuid();
    return await this.pessoaRepository.criarPessoa(pessoa);
  }

  async atualizarPessoa(id: string, pessoa: any): Promise<Pessoa> {
    const pessoaAtualizada = await this.pessoaRepository.atualizarPessoa(id, pessoa);
    if (!pessoaAtualizada) {
      throw new NotFoundException('Pessoa não encontrada');
    }
    return pessoaAtualizada;
  }
}
