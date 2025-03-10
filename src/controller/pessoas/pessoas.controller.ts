
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Pessoas } from 'src/interface/pessoas/pessoas.interface';
import { PessoasService } from 'src/service/pessoas/pessoas.service';

@Controller('pessoas')
export class PessoasController {
    constructor(private readonly pessoasService: PessoasService) { }

    @Get()
    @ApiOperation({ summary: 'Listar todas as pessoas cadastradas' })
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async buscarTodosVeiculos(): Promise<Pessoas[]> {
        return await this.pessoasService.findAllPeople();
    }
}
