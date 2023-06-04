import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentLevelService } from './student-level.service';
import StudentLevelDTO from './student-leveldto.dto';

@Controller('student-level')
export class StudentLevelController {constructor(private studentLevelService: StudentLevelService) {}
@Post()
async create(@Body() createStudentLevel: StudentLevelDTO) {
  return this.studentLevelService.create(createStudentLevel);
}

@Get()
findAll() {
  return this.studentLevelService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.studentLevelService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  
    return this.studentLevelService.findbyAny(id, value);

}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: StudentLevelDTO) {
  return this.studentLevelService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.studentLevelService.delete(_Id);
}}
