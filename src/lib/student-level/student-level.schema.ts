import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentLevelDocument = HydratedDocument<StudentLevel>;

@Schema({timestamps:true,})
export class StudentLevel{
    @Prop()
    department: string;

    @Prop()
    faculty: number;

    @Prop()
    level: string;

    @Prop()
    semester: number;
}

export const StudentLevelSchema = SchemaFactory.createForClass(StudentLevel);
