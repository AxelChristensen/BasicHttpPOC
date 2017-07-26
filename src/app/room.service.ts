import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';


@Injectable()
export class RoomService {
  constructor(private _http: Http) {


  }

  roomUrl="http://localhost:8081/roominfo/";
  public GetRoom = (search: string): Observable<any> => {
    return this._http.get(this.roomUrl  + search).map(res => res.json());

  }

}
