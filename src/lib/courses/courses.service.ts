import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Courses, CoursesDocument } from './courses.schema';
import CoursesDTO from './coursesdto.dto';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class CourseService {
  constructor(@InjectModel(Courses.name) private coursesModel: Model<CoursesDocument>) {}

  async create(createNew: CoursesDTO): Promise<Courses> {
    try {
      const creatNew = await new this.coursesModel(createNew);

      return await creatNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Courses[]> {
    try {
      return this.coursesModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Courses> {
    try {
      return this.coursesModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyAny(id: string, value: string): Promise<Courses[]> {

    const result = await this.coursesModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: CoursesDTO): Promise<Courses> {
    try {
      return this.coursesModel.findByIdAndUpdate({ _id }, updateNew).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async delete(_id: string): Promise<Courses> {
    try {
      return this.coursesModel.findByIdAndDelete({ _id }).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
