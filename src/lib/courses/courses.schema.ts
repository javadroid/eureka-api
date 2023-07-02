import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoursesDocument = HydratedDocument<Courses>;

@Schema({timestamps:true,})
export class Courses {
  @Prop({unique: true, index: true})
  courseCode: string;
  @Prop()
  courseName: string;
  @Prop()
  year: number;
  @Prop()
  department: string;
  @Prop()
  level: string;
  @Prop()
  faculty: string;
  @Prop()
  questionId: string;
  @Prop()
  answersId: string;
  @Prop()
  resourceId: string;
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);
