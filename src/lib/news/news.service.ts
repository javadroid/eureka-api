import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { News, NewsDocument } from './news.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import NewsDTO from './newsdto.dto';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private usersModel: Model<NewsDocument>) {}

  async create(createNews: NewsDTO): Promise<News> {
    try {
      const createNew = await new this.usersModel(createNews);

      return await createNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<News[]> {
    try {
      return this.usersModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<News> {
     const result = await this.usersModel.findById(id).exec();
         if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<News[]> {

    const result = await this.usersModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: NewsDTO): Promise<News> {
    
      const result = await this.usersModel.findByIdAndUpdate({ _id }, updateNew).exec();
       if (result) {
         return result;
       } else {
         throw new NotFoundException();
       }
   
  }

  async delete(_id: string): Promise<News> {
    
     const result =  await this.usersModel.findByIdAndDelete({ _id }).exec();
  
      if (result) {
        return result;
      } else {
        throw new NotFoundException();
      }
  }
}
