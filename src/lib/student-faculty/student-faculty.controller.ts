import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentFacultyService } from './student-faculty.service';
import StudentFacultyDTO from './student-facultydto.dto';

@Controller('student-faculty')
export class StudentFacultyController {constructor(private studentFacultyService: StudentFacultyService) {}
@Post()
async create(@Body() createStudentFaculty: StudentFacultyDTO) {
  return this.studentFacultyService.create(createStudentFaculty);
}

@Get()
findAll() {
  return this.studentFacultyService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.studentFacultyService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
    return this.studentFacultyService.findbyAny(id, value);
  // } else {
  //   throw new NotFoundException("fleid '" + id + "' not found");
  // }
}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: StudentFacultyDTO) {
  return this.studentFacultyService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.studentFacultyService.delete(_Id);
}}
