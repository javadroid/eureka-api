import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { Users, UsersSchema } from "./users/users.schema";
import { NewsCategories, NewsCategoriesSchema } from "./news-category/news-categories.schema";
import { Questions, QuestionsSchema } from "./questions/questions.schema";
import { StudentFaculty, StudentFacultySchema } from "./student-faculty/student-faculty.schema";
import { FileuploadController } from "./fileupload/fileupload.controller";
import { FileuploadService } from "./fileupload/fileupload.service";
import { Resources, ResourcesSchema } from "./resources/resources.schema";
import { StudentLevelService } from "./student-level/student-level.service";
import { AnswersController } from "./answers/answers.controller";
import { Answers, AnswersSchema } from "./answers/answers.schema";
import { AnswersService } from "./answers/answers.service";
import { CourseController } from "./courses/courses.controller";
import { CourseService } from "./courses/courses.service";
import { NewsCategoryController } from "./news-category/news-categories.controller";
import { NewsCategoryService } from "./news-category/news-categories.service";
import { NewsController } from "./news/news.controller";
import { NewsService } from "./news/news.service";
import { QuestionController } from "./questions/questions.controller";
import { QuestionService } from "./questions/questions.service";
import { ResourceController } from "./resources/resources.controller";
import { ResourceService } from "./resources/resources.service";
import { StudentDepartmentController } from "./student-department/student-department.controller";
import { StudentDepartmentService } from "./student-department/student-department.service";
import { StudentFacultyController } from "./student-faculty/student-faculty.controller";
import { StudentFacultyService } from "./student-faculty/student-faculty.service";
import { StudentLevelController } from "./student-level/student-level.controller";
import { SubscriptionController } from "./subscription/subscription.controller";
import { SubscriptionService } from "./subscription/subscription.service";
import { Subscription, SubscriptionSchema } from "./subscription/subscription.schema";
import { News, NewsSchema } from "./news/news.schema";
import { StudentDepartment, StudentDepartmentSchema } from "./student-department/student-department.schema";
import { StudentLevel, StudentLevelSchema } from "./student-level/student-level.schema";
import { Courses, CoursesSchema } from "./courses/courses.schema";



@Module({
  controllers: [ FileuploadController,StudentDepartmentController, StudentFacultyController, StudentLevelController, NewsController, NewsCategoryController, SubscriptionController, CourseController, QuestionController, AnswersController, ResourceController, UsersController, ],
  providers: [FileuploadService,StudentLevelService,StudentDepartmentService, StudentFacultyService, NewsService, NewsCategoryService, SubscriptionService, CourseService, QuestionService, AnswersService, ResourceService, UsersService, ],
  exports: [],
  imports: [
    
    MongooseModule.forFeature([{ name: Answers.name, schema: AnswersSchema }]),
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    MongooseModule.forFeature([{ name: Courses.name, schema: CoursesSchema }]),
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
    MongooseModule.forFeature([{ name: NewsCategories.name, schema: NewsCategoriesSchema }]),
    MongooseModule.forFeature([{ name: Questions.name, schema: QuestionsSchema }]),
    MongooseModule.forFeature([{ name: Resources.name, schema: ResourcesSchema }]),
    MongooseModule.forFeature([{ name: StudentDepartment.name, schema: StudentDepartmentSchema }]),
    
    MongooseModule.forFeature([{ name: StudentFaculty.name, schema: StudentFacultySchema }]),
    MongooseModule.forFeature([{ name: StudentLevel.name, schema: StudentLevelSchema }]),
    MongooseModule.forFeature([{ name: Subscription.name, schema: SubscriptionSchema }]),

    MulterModule.register({dest:'/uploads'}),
 
   

],
})
export class LibModule {}
