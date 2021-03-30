import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  constructor(public listSer:ListService) { }

  ngOnInit(): void {
  }
  storeUser(listRef:any){
    console.log(listRef);
    this.listSer.storeList(listRef);
  }
}