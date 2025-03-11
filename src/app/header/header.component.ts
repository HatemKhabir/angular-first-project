import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    standalone:true,//automatically set to true by angular 19
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {}