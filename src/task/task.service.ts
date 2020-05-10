import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
    private task:Task[]=[];

    getAllTask():Task[]{
        return this.task;
    }

    createTask(title:string,description:string):Task{
        const task:Task ={
            title,
            description,
            status:TaskStatus.OPEN,
            id:uuid()
        };
        this.task.push(task);
        return task;
    }
}
