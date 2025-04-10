import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pessoa } from './../../Interface/pessoa/pessoa.interface';
import { PessoaService } from './../../Service/pessoa/pessoa.service';
import { PessoaDto } from 'src/Dto/pessoa/pessoa.dto';

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

  @Post()
  @ApiOperation({ summary: 'Inclusão de uma nova pessoa' })
  @ApiResponse({ status: 201, description: 'Inclusão realizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @ApiResponse({
    status: 422,
    description: 'Os dados informados estão inválidos',
  })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async criarPessoa(@Body(new ValidationPipe()) novaPessoa: PessoaDto): Promise<Pessoa> {
    return await this.pessoaService.criarPessoa(novaPessoa);
  }

  @Put(':pessoaId')
  @ApiOperation({ summary: 'Atualização de uma pessoa' })
  @ApiResponse({ status: 201, description: 'Atualização realizada com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @ApiResponse({
    status: 422,
    description: 'Os dados informados estão inválidos',
  })
  @ApiParam({
    name: 'pessoaId',
    type: 'string',
    description: 'Pesquisa por ID (uuid)',
    example: 'cf3cb24f-a26d-4948-ac3b-d13115c95c64',
  })
  async atualizarPessoa(
    @Param('pessoaId', new ParseUUIDPipe()) pessoaId: string,
    @Body(new ValidationPipe()) pessoaAtualizada: PessoaDto,
  ): Promise<Pessoa> {
    return await this.pessoaService.atualizarPessoa(pessoaId, pessoaAtualizada);
  }
}
