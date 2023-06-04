import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose'
import { Resources, ResourcesDocument } from './resources.schema';
import ResourcesDTO from './resourcesdto.dto';
@Injectable()
export class ResourceService { constructor(@InjectModel(Resources.name) private usersModel: Model<ResourcesDocument>) {}

async create(createResources: ResourcesDTO): Promise<Resources> {
  try {
    const createdNew = await new this.usersModel(createResources);

    return await createdNew.save();
  } catch (error) {
    throw new NotAcceptableException(error.message);
  }
}

async findAll(): Promise<Resources[]> {
  try {
    return this.usersModel.find().exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyId(id: any): Promise<Resources> {
  try {
    return this.usersModel.findById(id).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyAny(id: string, value: string): Promise<Resources[]> {

  const result = await this.usersModel.find({ [id]: value }).exec();
  if (!result) {
    throw new NotFoundException(value+' not found in fleid ' +id);
  }
  return result;
}

async update(_id: string, updateNew: ResourcesDTO): Promise<Resources> {
  try {
    return this.usersModel.findByIdAndUpdate({ _id }, updateNew).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async delete(_id: string): Promise<Resources> {
  try {
    return this.usersModel.findByIdAndDelete({ _id }).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}}
