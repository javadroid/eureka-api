import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import QuestionsDTO from './questionsdto.dto';
import { QuestionService } from './questions.service';

@Controller('question')
export class QuestionController {constructor(private questionsService: QuestionService) {}
@Post()
async create(@Body() createQuestion: QuestionsDTO) {
  return this.questionsService.create(createQuestion);
}

@Get()
findAll() {
  return this.questionsService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.questionsService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
    return this.questionsService.findbyAny(id, value);
  // } else {
  //   throw new NotFoundException("fleid '" + id + "' not found");
  // }
}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: QuestionsDTO) {
  return this.questionsService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.questionsService.delete(_Id);
}}
