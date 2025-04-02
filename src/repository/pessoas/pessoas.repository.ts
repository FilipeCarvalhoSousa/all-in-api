import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pessoas } from 'src/interface/pessoas/pessoas.interface';

@Injectable()
export class PessoasRepository {
    constructor(@InjectModel('Pessoas') private readonly pessoasModel: Model<Pessoas>) {}

    async findAllPeople(): Promise<Pessoas[]> {
        return await this.pessoasModel.find();
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
