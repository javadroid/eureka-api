import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Subscription } from '../lib/subscription/subscription.schema';
export type StudentsDocument = HydratedDocument<Students>;

@Schema({timestamps:true,autoIndex: true})
export class Students {
  @Prop()
  fullname: string;

  @Prop()
  lname: string;

  @Prop()
  mname: string;

  @Prop({unique: true, index: true})
  matricNo: string;

  
  @Prop()
  email: string;
  @Prop()
  phoneNo: string;


  @Prop()
  level: string;

  @Prop()
  faculty: string;

  @Prop()
  department: string;

  @Prop()
  token: string;

  @Prop()
  subscription: string;

  @Prop()
  type: string;

  @Prop()
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription'})
  history: Subscription[];

}

export const StudentsSchema = SchemaFactory.createForClass(Students);
