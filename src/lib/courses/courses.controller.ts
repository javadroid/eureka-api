import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import CoursesDTO from './coursesdto.dto';
import { CourseService } from './courses.service';

@Controller('course')
export class CourseController {constructor(private coursesService: CourseService) {}
@Post()
async create(@Body() createCourses: CoursesDTO) {
  return this.coursesService.create(createCourses);
}

@Get()
findAll() {
  return this.coursesService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.coursesService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
    return this.coursesService.findbyAny(id, value);
  // } else {
  //   throw new NotFoundException("fleid '" + id + "' not found");
  // }
}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: CoursesDTO) {
  return this.coursesService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.coursesService.delete(_Id);
}}
