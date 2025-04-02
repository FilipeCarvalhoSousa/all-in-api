import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET, DELETE, POST, PUT',
  });

  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  const config = new DocumentBuilder()
    .setTitle('API All In')    
    .setDescription('API All In, onde tem todos os meus projetos')
    .setVersion('1.0')
    .addTag('All-In')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
