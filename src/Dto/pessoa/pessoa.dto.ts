import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EnderecoDto } from './endereco.dto';
import sexo from './../../Helpers/enums/sexo.enum';
import estadoCivil from 'src/Helpers/enums/estado-civil.enum';
import situacao from 'src/Helpers/enums/situacao.enum';
import { ApiProperty } from '@nestjs/swagger';

export class PessoaDto {
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @ApiProperty()
  @IsDate()
  readonly data_nascimento: Date;

  @ApiProperty()
  @IsNumber()
  @IsEnum(situacao)
  readonly situacao: number;

  @ApiProperty()
  @IsString()
  readonly cpf: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsNumber()
  @IsEnum(estadoCivil)
  estado_civil: number;

  @ApiProperty()
  @IsNumber()
  @IsEnum(sexo)
  sexo: number;

  @ApiProperty()
  endereco: EnderecoDto;
}
