import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import ResourcesDTO from './resourcesdto.dto';
import { ResourceService } from './resources.service';

@Controller('resource')
export class ResourceController {
  constructor(private resourcesService: ResourceService) {}
  @Post()
  async create(@Body() createResources: ResourcesDTO) {
    return this.resourcesService.create(createResources);
  }

  @Get()
  findAll() {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.resourcesService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
      return this.resourcesService.findbyAny(id, value);
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: ResourcesDTO) {
    return this.resourcesService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.resourcesService.delete(_Id);
  }
}
