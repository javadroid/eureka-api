import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { NewsCategories, NewsCategoriesDocument } from './news-categories.schema';
import NewsCategoriesDTO from './news-categoriesdto.dto';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class NewsCategoryService {
  constructor(@InjectModel(NewsCategories.name) private newsCategoriesModel: Model<NewsCategoriesDocument>) {}

  async create(createNewsCategories: NewsCategoriesDTO): Promise<NewsCategories> {
    try {
      const creatednew = await new this.newsCategoriesModel(createNewsCategories);

      return await creatednew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<NewsCategories[]> {
    try {
      return this.newsCategoriesModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<NewsCategories> {
    
       const result = await   this.newsCategoriesModel.findById(id).exec();
      if (result) {
        return result;
      } else {
        throw new NotFoundException();
      }
  }

  async findbyAny(id: string, value: string): Promise<NewsCategories[]> {

    const result = await this.newsCategoriesModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: NewsCategoriesDTO): Promise<NewsCategories> {
   
        const result = await   this.newsCategoriesModel.findByIdAndUpdate({ _id }, updateNew,{ new: true }).exec();
      if (result) {
        return result;
      } else {
        throw new NotFoundException();
      }
  }

  async delete(_id: string): Promise<NewsCategories> {

    const result = await   this.newsCategoriesModel.findByIdAndDelete({ _id }).exec();
      if (result) {
        return result;
      } else {
        throw new NotFoundException();
      }
  }
}
