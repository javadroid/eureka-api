import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as bodyParser from 'express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: true,
    credentials: true,
    methods: ['GET', 'HEAD', 'PATCH', 'POST','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  helmet({
    contentSecurityPolicy: false, // Disable Content-Security-Policy header
    referrerPolicy: false, // Disable Referrer-Policy header
    // Add more options as needed to disable or modify other headers
  }),
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
bootstrap();
