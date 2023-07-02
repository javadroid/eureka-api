import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDepartmentDocument = HydratedDocument<StudentDepartment>;

@Schema({timestamps:true,})
export class StudentDepartment {
  @Prop({unique: true, index: true})
  department: string;

  @Prop()
  faculty: string;

  @Prop()
  level: string;

  @Prop()
  semester: string;

}

export const StudentDepartmentSchema = SchemaFactory.createForClass(StudentDepartment);
