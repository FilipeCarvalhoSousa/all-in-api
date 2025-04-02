import { Pessoas } from 'src/interface/pessoas/pessoas.interface';
import { PessoasRepository } from './../../repository/pessoas/pessoas.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PessoasService {
    constructor(private readonly pessoasRepository: PessoasRepository) {}

    async findAllPeople(): Promise<Pessoas[]> {
        return await this.pessoasRepository.findAllPeople();
    }

    async findAll() {
        return 'findAll';
    }

    async findOne() {
        return 'findOne';
    }

    async update() {
        return 'update';
    }

    async remove() {
        return 'remove';
    }
}
