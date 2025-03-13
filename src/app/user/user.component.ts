import { Component, EventEmitter, Input, output, Output } from "@angular/core";
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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
