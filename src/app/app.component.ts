import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./user/dummyUsers";
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'angular-first-project';
   users = DUMMY_USERS;
   
   selected="";
   selectedUserId?="";
   onSelectUser(name: string){
    this.selected=name;
    this.selectedUserId=this.users.find(user=>user.name===name)?.id;
    }
}
