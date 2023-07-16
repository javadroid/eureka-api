import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

import { Users, UsersDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UsersDTO from './usersdto.dto';
@Injectable()
export class UsersService {

    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}

  async create(createUsers: UsersDTO): Promise<Users> {
    try {
      const createduserInfo = await new this.usersModel(createUsers);

      return await createduserInfo.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Users[]> {
    try {
      return this.usersModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Users> {
    
       const result = await   this.usersModel.findById(id).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<Users[]> {

    const result = await this.usersModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateOfficeInfo: UsersDTO): Promise<Users> {
    
      const result = await   this.usersModel.findByIdAndUpdate({ _id }, updateOfficeInfo,{ new: true }).exec();
    
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async delete(_id: string): Promise<Users> {
    
     const result = await   this.usersModel.findByIdAndDelete({ _id }).exec();
     
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

}
