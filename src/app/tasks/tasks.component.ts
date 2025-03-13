import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { Task } from './task/task.model';
import { TaskServices } from './tasks.services';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   @Input({required:true}) selectedUser!: string;
   @Input({required:true}) userId!: string | undefined; 
   isAdding=false;

   constructor(private taskServices: TaskServices){}

   getSelectedUserTasks(){
      return this.taskServices.getTasks(this.userId);
   }
   onAddTask() {
    this.isAdding = !this.isAdding;
   }
   taskAdded(task:Task){
    console.log(task)
   }
}
