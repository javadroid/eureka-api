import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ResourcesDocument = HydratedDocument<Resources>;

@Schema({timestamps:true,})
export class Resources {
  @Prop()
  type: string;
  @Prop()
  courseCode: string;

  @Prop()
  resourse: string;

  @Prop()
  description: string;

  @Prop()
  title: string;

  @Prop()
  media: string;
}

export const ResourcesSchema = SchemaFactory.createForClass(Resources);
