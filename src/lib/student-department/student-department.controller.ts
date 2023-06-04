import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentDepartmentService } from './student-department.service';
import StudentDepartmentDTO from './student-departmentdto.dto';

@Controller('student-department')
export class StudentDepartmentController {
  constructor(private studentDepartmentService: StudentDepartmentService) {}
  @Post()
  async create(@Body() createStudentDepartment: StudentDepartmentDTO) {
    return this.studentDepartmentService.create(createStudentDepartment);
  }

  @Get()
  findAll() {
    return this.studentDepartmentService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.studentDepartmentService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    
      return this.studentDepartmentService.findbyAny(id, value);
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: StudentDepartmentDTO) {
    return this.studentDepartmentService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.studentDepartmentService.delete(_Id);
  }
}
