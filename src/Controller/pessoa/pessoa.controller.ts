import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pessoa } from './../../Interface/pessoa/pessoa.interface';
import { PessoaService } from './../../Service/pessoa/pessoa.service';

@ApiTags('Pessoa')
@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  @ApiOperation({ summary: 'Buscar todas as pessoas' })
  async buscarTodos() {
    return await this.pessoaService.buscarTodos();
  }

  @Get(':pessoaId')
  @ApiOperation({ summary: 'Buscar pessoa por ID' })
  @ApiParam({
    name: 'pessoaId',
    type: 'string',
    description: 'Pesquisa por ID (uuid)',
    example: 'cf3cb24f-a26d-4948-ac3b-d13115c95c64',
  })
  @ApiResponse({ status: 200, description: 'Busca uma pessoa pelo Id' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada para o ID informado',
  })
  async buscarPorId(
    @Param('pessoaId', new ParseUUIDPipe()) pessoaId: string,
  ): Promise<Pessoa | null> {
    return await this.pessoaService.buscarPorId(pessoaId);
  }
}
