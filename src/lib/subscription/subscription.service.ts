import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Subscription, SubscriptionDocument } from './subscription.schema';
import SubscriptionDTO from './subscriptiondto.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class SubscriptionService { constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionDocument>) {}

async create(createSubscription: SubscriptionDTO): Promise<Subscription> {
  try {
    const createdNew = await new this.subscriptionModel(createSubscription);

    return await createdNew.save();
  } catch (error) {
    throw new NotAcceptableException(error.message);
  }
}

async findAll(): Promise<Subscription[]> {
  try {
    return this.subscriptionModel.find().exec();
  } catch (error) {
    throw new NotFoundException(error.message);
  }
}

async findbyId(id: any): Promise<Subscription> {
  
    const result = await   this.subscriptionModel.findById(id).exec();
  
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}

async findbyAny(id: string, value: string): Promise<Subscription[]> {

  const result = await this.subscriptionModel.find({ [id]: value }).exec();
  if (!result) {
    throw new NotFoundException(value+' not found in fleid ' +id);
  }
  return result;
}

async update(_id: string, updateNew: SubscriptionDTO): Promise<Subscription> {
  
     const result = await   this.subscriptionModel.findByIdAndUpdate({ _id }, updateNew,{ new: true }).exec();
 
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}

async delete(_id: string): Promise<Subscription> {
  
   const result = await   this.subscriptionModel.findByIdAndDelete({ _id }).exec();
   
    if (result) {
      return result;
    } else {
      throw new NotFoundException();
    }
}}
