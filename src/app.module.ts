import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url :'mongodb://localhost/shcool',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[__dirname + '/../**/*.entity.ts']
    }),
    TaskModule
  ],

})
export class AppModule {}
