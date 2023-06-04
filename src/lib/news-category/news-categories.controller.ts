import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import NewsCategoriesDTO from './news-categoriesdto.dto';
import { NewsCategoryService } from './news-categories.service';

@Controller('news-category')
export class NewsCategoryController {
  constructor(private newsCategoryService: NewsCategoryService) {}
  @Post()
  async create(@Body() createNewsCategories: NewsCategoriesDTO) {
    return this.newsCategoryService.create(createNewsCategories);
  }

  @Get()
  findAll() {
    return this.newsCategoryService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.newsCategoryService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    
      return this.newsCategoryService.findbyAny(id, value);
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: NewsCategoriesDTO) {
    return this.newsCategoryService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.newsCategoryService.delete(_Id);
  }
}
