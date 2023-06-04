import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubscriptionDocument = HydratedDocument<Subscription>;

@Schema({timestamps:true,})
export class Subscription {
  @Prop()
  courseCode: string;

  @Prop()
  amount: number;

  @Prop()
  paymentMethod: string;

  @Prop({type:Date})
  expiringDate: Date;

  @Prop()
  isValid: boolean;

}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
