import { Document, Schema } from 'mongoose';

export const PessoasSchema = new Schema({
    nome: { type: String, required: true },
    dataNascimento: { type: Date },
    cpf: { type: String },
    email: { type: String },
    telefone: { type: String },
    endereco: { type: String },
});
