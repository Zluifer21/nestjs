import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Get()
    getAllTasks(): Task []{
       return this.taskService.getAllTask();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto:CreateTaskDto):Task{
        return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskByID(@Param('id') id:string){
        return this.taskService.getTaskById(id);
    }


    @Delete('/:id')
    deleteTaskById(@Param('id') id:string){
        return this.taskService.deleteTask(id);
    }

 
}
