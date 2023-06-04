import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Answers, AnswersDocument } from './answers.schema';

import { InjectModel } from '@nestjs/mongoose';
import  AnswersDTO  from './answersdto.dto';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answers.name) private answersModel: Model<AnswersDocument>) {}

  async create(createdNew: AnswersDTO): Promise<Answers> {
    try {
      const creatNew = await new this.answersModel(createdNew);

      return await creatNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Answers[]> {
    try {
      return this.answersModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Answers> {
    try {
      return this.answersModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyAny(id: string, value: string): Promise<Answers[]> {

    const result = await this.answersModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: AnswersDTO): Promise<Answers> {
    try {
      return this.answersModel.findByIdAndUpdate({ _id }, updateNew).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async delete(_id: string): Promise<Answers> {
    try {
      return this.answersModel.findByIdAndDelete({ _id }).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}


