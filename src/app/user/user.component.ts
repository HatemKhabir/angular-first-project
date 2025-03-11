import { Component, EventEmitter, Input, output, Output } from "@angular/core";
import { User } from "./user.model";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) selectedUser!: boolean;
  @Input({required:true}) user!:User;
  
  @Output() select = new EventEmitter();
  //select=output<string>();

  get imagePath(){
    return `assets/${this.user.avatar}`;
  }
  onSelectUser(){
    console.log(this.user.name)
  this.select.emit(this.user.name);
  }
}
