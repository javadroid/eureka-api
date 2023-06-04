import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

import { Students, StudentsDocument } from './students.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import StudentsDTO from './studentsdto.dto';
@Injectable()
export class StudentsService {

    constructor(@InjectModel(Students.name) private studentsModel: Model<StudentsDocument>) {}

  async create(createStudents: StudentsDTO): Promise<Students> {
    try {
      const createdstudentInfo = await new this.studentsModel(createStudents);

      return await createdstudentInfo.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Students[]> {
    try {
      return this.studentsModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Students> {
    
       const result = await   this.studentsModel.findById(id).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<Students[]> {

    const result = await this.studentsModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateOfficeInfo: StudentsDTO): Promise<Students> {
    
      const result = await   this.studentsModel.findByIdAndUpdate({ _id }, updateOfficeInfo).exec();
    
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async delete(_id: string): Promise<Students> {
    
     const result = await   this.studentsModel.findByIdAndDelete({ _id }).exec();
     
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
  }

}
