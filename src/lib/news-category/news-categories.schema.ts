import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NewsCategoriesDocument = HydratedDocument<NewsCategories>;

@Schema({timestamps:true,})
export class NewsCategories {
  @Prop()
  category: string;

}

export const NewsCategoriesSchema = SchemaFactory.createForClass(NewsCategories);
