import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.get('JWT_CONSTANT_STUDENTS'),
    });
  }

  async validate(payload: any) {

    
    return { 
      id: payload.id,
      matricNo: payload.matricNo, 
      email: payload.email,
      isAuthenticated:true,
    };
  }

}
