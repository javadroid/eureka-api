import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { StudentFaculty, StudentFacultyDocument } from './student-faculty.schema';
import StudentFacultyDTO from './student-facultydto.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class StudentFacultyService { constructor(@InjectModel(StudentFaculty.name) private studentFacultyModel: Model<StudentFacultyDocument>) {}

async create(createStudentFaculty: StudentFacultyDTO): Promise<StudentFaculty> {
  try {
    const createdNew = await new this.studentFacultyModel(createStudentFaculty);

    return await createdNew.save();
  } catch (error) {
    throw new NotAcceptableException(error.message);
  }
}

async findAll(): Promise<StudentFaculty[]> {
  try {
    return this.studentFacultyModel.find().exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyId(id: any): Promise<StudentFaculty> {
  try {
    return this.studentFacultyModel.findById(id).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyAny(id: string, value: string): Promise<StudentFaculty[]> {

  const result = await this.studentFacultyModel.find({ [id]: value }).exec();
  if (!result) {
    throw new NotFoundException(value+' not found in fleid ' +id);
  }
  return result;
}

async update(_id: string, updateNew: StudentFacultyDTO): Promise<StudentFaculty> {
  try {
    return this.studentFacultyModel.findByIdAndUpdate({ _id }, updateNew).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async delete(_id: string): Promise<StudentFaculty> {
  try {
    return this.studentFacultyModel.findByIdAndDelete({ _id }).exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}}
