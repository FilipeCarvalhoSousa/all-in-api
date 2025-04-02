import { IsString, IsNumber } from 'class-validator';

export class EnderecoDto {
  @IsString()
  logradouro: string;

  @IsNumber()
  numero: number;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  cep: string;
}
