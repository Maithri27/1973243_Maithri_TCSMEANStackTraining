import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from './list.module';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http:HttpClient) { }
  storeList(lists:any){
    this.http.post("http://localhost:3000/lists",lists).subscribe(result=>console.log(result),error=>console.log(error));
}
  loadListDetails():Observable<List[]> {
  return this.http.get<List[]>("http://localhost:3000/lists");
}
}