import { Schema } from "mongoose";

export const PessoaSchema = new Schema({
    id: { type: String, required: true },
    nome: { type: String, required: true },
    data_nascimento: { type: Date},
    situacao: { type: String },
    cpf: { type: String },
    email: { type: String },
    telefone: { type: String },
    estado_civil: { type: String },
    sexo: { type: String },
    endereco: {
        logradouro: { type: String },
        numero: { type: Number },
        bairro: { type: String },
        cidade: { type: String },
        estado: { type: String },
        cep: { type: String },
    },
});
// Compare this snippet from src/Service/pessoa/pessoa.service.ts:
// import { Injectable } from "@nestjs/common";