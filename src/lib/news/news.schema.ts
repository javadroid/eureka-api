import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NewsDocument = HydratedDocument<News>;

@Schema({timestamps:true,})
export class News {
  @Prop()
  category: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  media: string;

  @Prop()
  isFeatured: string;

  @Prop()
  target:string

}

export const NewsSchema = SchemaFactory.createForClass(News);
