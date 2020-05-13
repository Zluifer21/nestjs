import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
    private task:Task[]=[];

    getAllTask():Task[]{
        return this.task;
    }

    createTask(createTaskDto:CreateTaskDto):Task{
        const {title,description}=createTaskDto;
        const task:Task ={
            title,
            description,
            status:TaskStatus.OPEN,
            id:uuid()
        };
        this.task.push(task);
        return task;
    }

    getTaskById(id:string):Task{
        const found= this.task.find(task=>task.id===id);
        if(!found){
            throw new NotFoundException('no se encontro esa caga');
        }
        return found;
    }

    deleteTask(id:string){
        this.task = this.task.filter(task=> task.id!==id);
        return this.task;
    }
}
