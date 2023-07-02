import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentFacultyDocument = HydratedDocument<StudentFaculty>;

@Schema({timestamps:true,})
export  class StudentFaculty {
  @Prop()
  department: string;

  @Prop({unique: true, index: true})
  faculty: number;

  @Prop()
  level: string;

  @Prop()
  semester: number;
}

export const StudentFacultySchema = SchemaFactory.createForClass(StudentFaculty);
