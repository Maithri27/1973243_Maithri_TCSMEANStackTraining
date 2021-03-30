import { Component, OnInit } from '@angular/core';
import { List } from '../list.module';
import { ListService } from '../list.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  dislist:Array<List>=[];
  constructor(public listSer:ListService) { }

  ngOnInit(): void {
    this.listSer.loadListDetails().subscribe(result=>this.dislist=result,
      error=>console.log(error))
  }

}
