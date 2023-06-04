import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionsDocument = HydratedDocument<Questions>;

@Schema({timestamps:true,})
export class Questions {
  @Prop()
  courseCode: string;

  @Prop()
  question: string;

  @Prop()
  questionId: string;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
