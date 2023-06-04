import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Subscription } from '../subscription/subscription.schema';
export type UsersDocument = HydratedDocument<Users>;

@Schema({timestamps:true,autoIndex: true})
export class Users {
  @Prop()
  fname: string;

  @Prop()
  lname: string;

  @Prop()
  mname: string;

  @Prop({unique: true, index: true})
  matricNo: string;
  @Prop({unique: true, index: true})
  email: string;
  @Prop({unique: true, index: true})
  phoneNo: string;


  @Prop()
  level: string;

  @Prop()
  faculty: string;

  @Prop()
  department: string;

  @Prop()
  subscription: string;

  @Prop()
  type: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription'})
  history: Subscription[];

}

export const UsersSchema = SchemaFactory.createForClass(Users);
