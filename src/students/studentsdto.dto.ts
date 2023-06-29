import * as mongoose from 'mongoose';
export default class StudentsDTO{
  fname: string;
  lname: string;
  mname: string;
  matricNo: string;
  email: string;
  phoneNo: string;
  level: string;
  faculty: string;
  department: string;
  subscription: string;
  type: string;
  token: string;
  password:string;
  history: mongoose.Schema.Types.ObjectId[];
}