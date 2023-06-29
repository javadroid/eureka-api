import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { Students, StudentsSchema } from './students.schema';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';
import { LocalStrategy } from 'src/auth/strategy/local.strategy';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService,JwtStrategy,LocalStrategy,AuthService,JwtService],
  imports:[
    MongooseModule.forFeature([{ name: Students.name, schema: StudentsSchema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_CONSTANT_STUDENTS'),
        };
      },
      inject: [ConfigService],
  }),
    PassportModule,
  ]
})
export class StudentsModule {}
