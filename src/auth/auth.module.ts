import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { StudentsModule } from 'src/students/students.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[StudentsModule,
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
   ],
   exports:[AuthService],
  providers: [AuthService,LocalStrategy,LocalStrategy, JwtStrategy,JwtService]
})
export class AuthModule {}
