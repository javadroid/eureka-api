import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Answers, AnswersDocument } from './answers.schema';

import { InjectModel } from '@nestjs/mongoose';
import AnswersDTO from './answersdto.dto';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answers.name) private answersModel: Model<AnswersDocument>) { }

  async create(createdNew: AnswersDTO): Promise<Answers> {
    try {
      const creatNew = await new this.answersModel(createdNew);

      return await creatNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Answers[]> {
      return this.answersModel.find().exec();
  }

  async findbyId(id: any): Promise<Answers> {
    const result = await this.answersModel.findById(id).exec();
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<Answers[]> {

    const result = await this.answersModel.find({ [id]: value }).exec();
    if (result) {
      return result;

    } else {
      throw new NotFoundException(value + ' not found in fleid ' + id);
    }

  }

  async update(_id: string, updateNew: AnswersDTO): Promise<Answers> {

    await this.answersModel.findById(_id).exec();

    const result =await this.answersModel.findByIdAndUpdate({ _id }, updateNew,{ new: true }).exec();
    if (result) {
      return result
    } else {
      throw new NotFoundException("AnswersId not found");
    }
  }

  async delete(_id: string): Promise<Answers> {
    const result =await this.answersModel.findByIdAndDelete({ _id }).exec();
    if (result) {
      return result
    } else {
      throw new NotFoundException("AnswersId not found");
    }
  }
}


