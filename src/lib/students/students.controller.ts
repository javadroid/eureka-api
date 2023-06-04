import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import StudentsDTO from './studentsdto.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

  constructor(private studentsService: StudentsService) {}
  @Post()
  async create(@Body() createStudents: StudentsDTO) {
    return this.studentsService.create(createStudents);
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
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
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
