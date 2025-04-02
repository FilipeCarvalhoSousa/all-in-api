import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWordService {
    getHelloWord(): string {
        return 'Hello Word!';
    }
}
