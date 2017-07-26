
import 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {RoomService} from "./room.service";
import {Http} from "@angular/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoomService]
})
export class AppComponent implements OnInit {
  title = 'appAx';
  constructor(private _http: Http,private roomService:RoomService) {



  }
  ngOnInit(){
    this.title="You shouldn't see this, security constraint with Chrome";

    this.roomService
      .GetRoom("4")
      .subscribe((item: any) => {
        this.title = item;
      }, error => console.log(error));



   }
}
