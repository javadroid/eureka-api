import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingModule } from './testing/testing.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LibModule } from './lib/lib.module';

@Module({
  imports: [TestingModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot(process.env.MONGOOSE_LINK),
    LibModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
