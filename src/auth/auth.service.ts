import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { StudentsService } from 'src/students/students.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private studentService: StudentsService,
    private config: ConfigService
  ) { }
  async login(matricNo: string, password: string) {
    const s = await this.studentService.findbyAny(
      'matricNo',
      matricNo
    );
    const student = s[0] as any
    if (!student) {
      throw new NotFoundException('Student not found');
    }
   
    const isMatch = await bcrypt.compare(password, student.password);
    
    if (student && isMatch) {
      const payload = {
        matricNo: student.matricNo,
        id: student._id,
        
      };
      const token = this.jwtService.sign(payload, { secret: this.config.get('JWT_CONSTANT_STUDENTS') })
      await this.studentService.setToken(
        student._id,
        token
      );
      return {
        access_token: token,
        matricNo: student.matricNo,
        id: student._id,
      };
    } else {
      throw new UnauthorizedException('wrong password');
    }
  }
}
