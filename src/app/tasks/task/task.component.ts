import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()  task!: Task;
  @Output()  complete = new EventEmitter<string>();

  markComplete() {
    this.complete.emit(this.task.id);
  }
}
