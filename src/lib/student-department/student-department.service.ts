import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { StudentDepartment, StudentDepartmentDocument } from './student-department.schema';
import StudentDepartmentDTO from './student-departmentdto.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class StudentDepartmentService {
  constructor(@InjectModel(StudentDepartment.name) private studentDepartmentModel: Model<StudentDepartmentDocument>) {}

  async create(createStudentDepartment: StudentDepartmentDTO): Promise<StudentDepartment> {
    try {
      const createdNew = await new this.studentDepartmentModel(createStudentDepartment);

      return await createdNew.save();
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<StudentDepartment[]> {
    try {
      return this.studentDepartmentModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<StudentDepartment> {
    try {
      return this.studentDepartmentModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyAny(id: string, value: string): Promise<StudentDepartment[]> {

    const result = await this.studentDepartmentModel.find({ [id]: value }).exec();
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async update(_id: string, updateNew: StudentDepartmentDTO): Promise<StudentDepartment> {
    try {
      return this.studentDepartmentModel.findByIdAndUpdate({ _id }, updateNew,{ new: true }).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async delete(_id: string): Promise<StudentDepartment> {
    try {
      return this.studentDepartmentModel.findByIdAndDelete({ _id }).exec();
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
