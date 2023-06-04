import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import UsersDTO from './usersdto.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}
  @Post()
  async create(@Body() createUsers: UsersDTO) {
    return this.usersService.create(createUsers);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return this.usersService.findbyId(id);
  }

  @Get(':id/:value')
  async findbyAny(@Param('id') id: string, @Param('value') value: string) {
    
      return this.usersService.findbyAny(id, value);
    // } else {
    //   throw new NotFoundException("fleid '" + id + "' not found");
    // }
  }

  @Patch(':_id')
  async update(@Param('_id') _Id: string, @Body() updated: UsersDTO) {
    return this.usersService.update(_Id, updated);
  }

  @Delete(':_id')
  async delete(@Param('_id') _Id: string) {
    return this.usersService.delete(_Id);
  }

}
