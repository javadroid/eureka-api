import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswersDocument = HydratedDocument<Answers>;

@Schema({timestamps:true,})
export class Answers {
  @Prop()
  courseCode: string;

  @Prop()
  answers: string;

  @Prop()
  media: string[];

  @Prop()
  questionId: string;
}

export const AnswersSchema = SchemaFactory.createForClass(Answers);
