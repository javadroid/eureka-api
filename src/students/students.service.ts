import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';


import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import StudentsDTO from './studentsdto.dto';
import * as bcrypt from 'bcrypt';
import { Students, StudentsDocument } from './students.schema';

@Injectable()
export class StudentsService {

    constructor(@InjectModel(Students.name) private studentsModel: Model<StudentsDocument>) {}

  async create(createStudents: StudentsDTO): Promise<Students> {
    try {
      const saltOrRounds = 10;
    const password = createStudents.password ?? 'fulafia';
    const hash = await bcrypt.hash(password, saltOrRounds);
      const createdstudentInfo = await new this.studentsModel({...createStudents,password:hash});
      const result =await createdstudentInfo.save();
      return result
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async findAll(): Promise<Students[]> {
    try {

      const result =await this.studentsModel.find().exec();
        result.forEach((student) => {
        delete student.password;
        delete student.token;
      })

      return result;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findbyId(id: any): Promise<Students> {
    
       const result = await   this.studentsModel.findById(id).exec();
   
    if (result) {
      
        delete result.password;
        delete result.token;
    
      return result;
    } else {
      throw new NotFoundException();
    }
  }

  async findbyAny(id: string, value: string): Promise<Students[]> {

    const result = await this.studentsModel.find({ [id]: value }).exec();
    result.forEach((student) => {
      delete student.password;
      delete student.token;
    })
    if (!result) {
      throw new NotFoundException(value+' not found in fleid ' +id);
    }
    return result;
  }

  async getToken(id: string, tokenn:string): Promise<boolean> {

    const result = await   this.studentsModel.findById(id).exec();
   const token = result.token as any

      if(token===tokenn){
        return  true;
      }else{
          return  false;
      }
    
  }

  async setToken(_id: string, token: string): Promise<string> {

    const  result = await this.studentsModel.findByIdAndUpdate( _id , {token} ).exec();
    
    return result.token
}

  async update(_id: string, updateOfficeInfo: StudentsDTO): Promise<Students> {
    
      const result = await   this.studentsModel.findByIdAndUpdate({ _id }, updateOfficeInfo).exec();
    
    if (result) {
      delete result.password;
      delete result.token;
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
