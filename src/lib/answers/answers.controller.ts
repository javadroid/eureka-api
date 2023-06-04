import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import  AnswersDTO  from './answersdto.dto';
import { AnswersService } from './answers.service';
@Controller('answers')
export class AnswersController {
  constructor(private answersService: AnswersService) {}
  @Post()
  async create(@Body() createAnswers: AnswersDTO) {
    return this.answersService.create(createAnswers);
  }

  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.answersService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    
      return this.answersService.findbyAny(id, value);
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: AnswersDTO) {
    return this.answersService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.answersService.delete(_Id);
  }
}


