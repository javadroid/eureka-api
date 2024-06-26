import * as mongoose from 'mongoose';
export default class StudentsDTO{
  fullname: string;
  lname: string;
  mname: string;
  matricNo: string;
  email: string;
  phoneNo: string;
  level: string;
    about: string;
    username: string;
    role: string;
    profileImage: string;
  faculty: string;
  department: string;
  subscription: string;
  type: string;
  token: string;
  password:string;
  history: mongoose.Schema.Types.ObjectId[];
}
