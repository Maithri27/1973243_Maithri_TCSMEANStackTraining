import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  inserNewItem(name:any, contactnumber:any){
    let table:any = document.getElementById("contactdiv");
    let body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = contactnumber;
    this.reset();

  }
  reset(){ }

  logout(){
    this.router.navigate(["loginpage"]);
  }
 
}
