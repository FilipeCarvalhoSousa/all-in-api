import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelloWordService } from './../../Service/hello-word/hello-word.service';

@Controller('hello-word')
@ApiTags('hello-word')
export class HelloWordController {
    constructor(private readonly helloWordService: HelloWordService) { }

    @Get()
    getHelloWord(): string {
        return this.helloWordService.getHelloWord();
    }
}
