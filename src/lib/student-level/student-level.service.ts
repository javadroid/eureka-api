import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { StudentLevel, StudentLevelDocument } from './student-level.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import StudentLevelDTO from './student-leveldto.dto';
@Injectable()
export class StudentLevelService { constructor(@InjectModel(StudentLevel.name) private studentLevelModel: Model<StudentLevelDocument>) {}

async create(createStudentLevel: StudentLevelDTO): Promise<StudentLevel> {
  try {
    const createdNew = await new this.studentLevelModel(createStudentLevel);

    return await createdNew.save();
  } catch (error) {
    throw new NotAcceptableException(error.message);
  }
}

async findAll(): Promise<StudentLevel[]> {
  try {
    return this.studentLevelModel.find().exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyId(id: any): Promise<StudentLevel> {
  
   const result = await   this.studentLevelModel.findById(id).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}

async findbyAny(id: string, value: string): Promise<StudentLevel[]> {

  const result = await this.studentLevelModel.find({ [id]: value }).exec();
  if (!result) {
    throw new NotFoundException(value+' not found in fleid ' +id);
  }
  return result;
}

async update(_id: string, updateNew: StudentLevelDTO): Promise<StudentLevel> {
  
    const result = await  this.studentLevelModel.findByIdAndUpdate({ _id }, updateNew,{ new: true }).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}

async delete(_id: string): Promise<StudentLevel> {
  
      const result = await   this.studentLevelModel.findByIdAndDelete({ _id }).exec();

    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}}
