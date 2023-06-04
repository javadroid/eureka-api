import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import NewsDTO from './newsdto.dto';

@Controller('news')
export class NewsController {constructor(private newsService: NewsService) {}
@Post()
async create(@Body() createNews: NewsDTO) {
  return this.newsService.create(createNews);
}

@Get()
findAll() {
  return this.newsService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.newsService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
    return this.newsService.findbyAny(id, value);
  // } else {
  //   throw new NotFoundException("fleid '" + id + "' not found");
  // }
}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: NewsDTO) {
  return this.newsService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.newsService.delete(_Id);
}}
