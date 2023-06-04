import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose'
import { Questions, QuestionsDocument } from './questions.schema';
import QuestionsDTO from './questionsdto.dto';
@Injectable()
export class QuestionService {
  constructor(@InjectModel(Questions.name) private questionsModel: Model<QuestionsDocument>) {}

  async create(createQuestions: QuestionsDTO): Promise<Questions> {
    try {
      const createdNew = await new this.questionsModel(createQuestions);

      return await createdNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Questions[]> {
    try {
      return this.questionsModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Questions> {
   
     const result = await  this.questionsModel.findById(id).exec();
     
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<Questions[]> {

    const result = await this.questionsModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: QuestionsDTO): Promise<Questions> {
    
    const result = await this.questionsModel.findByIdAndUpdate({ _id }, updateNew).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async delete(_id: string): Promise<Questions> {
   
     const result = await   this.questionsModel.findByIdAndDelete({ _id }).exec();
     
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }
}
