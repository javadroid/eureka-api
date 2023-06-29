import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards,Request,Headers, NotAcceptableException} from '@nestjs/common';
import StudentsDTO from './studentsdto.dto';
import { StudentsService } from './students.service';

import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from 'src/auth/authGuard/jwtAuthGuard';
import { LocalAuthGuard } from 'src/auth/authGuard/localAuthGuard';
import { AuthService } from 'src/auth/auth.service';

@Controller('students')
export class StudentsController {

  constructor(private configService: ConfigService,private studentsService: StudentsService,private studentAuthService:AuthService) {}


  @Post('login')
  async login(@Body() student: StudentsDTO) {

    return this.studentAuthService.login(student.matricNo, student.password);

  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req,@Headers('authorization') authorizationHeader: string) {

    const bearerToken = authorizationHeader.split(' ')[1];
    const check=  await this.studentsService.getToken(
        req.user.id,
        bearerToken
      )
      if(check){
        return req.user;
      }else{
         throw new NotAcceptableException("User Logged in with another device")
      }
    // return req.user;
  }


  @Post()
  async create(@Body() createStudents: StudentsDTO) {
  const result =await  this.studentsService.create(createStudents);
      return result
  }

  @Get()
  findAll() {
   
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.studentsService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    
      return this.studentsService.findbyAny(id, value);
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: StudentsDTO) {
    return this.studentsService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.studentsService.delete(_Id);
  }

}
