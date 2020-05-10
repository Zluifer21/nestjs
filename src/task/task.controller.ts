import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';


@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Get()
    getAllTasks(): Task []{
       return this.taskService.getAllTask();
    }

    @Post() 
    createTask(@Body('title') title:string,@Body('description') description:string){
        return this.taskService.createTask(title,description);
    }

 
}
