import { Injectable, UnauthorizedException } from "@nestjs/common";

import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "../auth.service";
import { Strategy } from "passport-local";




@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super();
    }

    async validate(matricNo: string, password: string): Promise<any>{
        // const student=await this.authService.validateUser(matricNo, password);
        // console.log("student",student)
        // if(!student){
        //     throw new UnauthorizedException("student");
        // }
        // return student;
      
    }
}


