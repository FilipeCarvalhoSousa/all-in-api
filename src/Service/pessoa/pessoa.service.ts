import { Injectable, NotFoundException } from '@nestjs/common';
import { PessoaRepository } from 'src/Repository/pessoa/pessoa.repository';

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
}
