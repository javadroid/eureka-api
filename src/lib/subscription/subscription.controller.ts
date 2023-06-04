import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import SubscriptionDTO from './subscriptiondto.dto';

@Controller('subscription')
export class SubscriptionController {constructor(private subscriptionService: SubscriptionService) {}
@Post()
async create(@Body() createSubscription: SubscriptionDTO) {
  return this.subscriptionService.create(createSubscription);
}

@Get()
findAll() {
  return this.subscriptionService.findAll();
}

@Get(':id')
async findbyId(@Param('id') id: string) {
  return this.subscriptionService.findbyId(id);
}

@Get(':id/:value')
async findbyAny(@Param('id') id: string, @Param('value') value: string) {
  // if (id === 'evidence' || id === 'reportDetail' || id === 'reporterId') {
    return this.subscriptionService.findbyAny(id, value);
  // } else {
  //   throw new NotFoundException("fleid '" + id + "' not found");
  // }
}

@Patch(':_id')
async update(@Param('_id') _Id: string, @Body() updated: SubscriptionDTO) {
  return this.subscriptionService.update(_Id, updated);
}

@Delete(':_id')
async delete(@Param('_id') _Id: string) {
  return this.subscriptionService.delete(_Id);
}}
