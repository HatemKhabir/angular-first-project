import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() openDialog = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();
  newTask: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  };
  enteredTitle ='';
  enteredSummary = '';
  enteredDueDate = '';
  dialogOpen=false;
  closeDialog(){
   this.openDialog.emit(!this.dialogOpen);
  }
 onSubmit(){
    console.log('Task added:', this.enteredTitle, this.enteredSummary, this.enteredDueDate);
    this.newTask.title=this.enteredTitle;
    this.newTask.summary=this.enteredSummary;
    this.newTask.dueDate=this.enteredDueDate;
    this.newTask.id='t'+(Math.random()*1000).toString();
    this.enteredTitle='';
    this.enteredSummary='';
    this.enteredDueDate='';
    this.dialogOpen=false;
    this.openDialog.emit(this.dialogOpen);
    this.addTask.emit(this.newTask);
 } 
 
}
