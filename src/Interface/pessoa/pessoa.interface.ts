import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Pessoa {
    _id: mongoose.Schema.Types.ObjectId;
    id: string;
    nome: string;
    data_nascimento: Date;
    situacao: string;
    cpf: string;
    email: string;
    telefone: string;
    estado_civil: string;
    sexo: string;
    endereco: {
        logradouro: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    };
}