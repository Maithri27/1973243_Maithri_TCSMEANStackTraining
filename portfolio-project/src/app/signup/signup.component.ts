import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userObj:Array<user> = new Array();
  userString:any = " ";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  storeInSession()
  {
    sessionStorage.setItem("userInfo", this.userString);
  }
  login(info:any)
  { 
    let fname = info.fname;
    console.log(fname);
    let lname = info.lname;
    let username = info.username;
    let pass = info.pass;
    let data = new user(fname,lname,username,pass);
    this.userObj.push(data);
    this.userString = JSON.stringify(this.userObj);
    this.storeInSession();  
    this.router.navigate(["loginpage"]);
    this.reset();
  }
  reset(){ }
}

  class user{
    constructor(public fname:string, public lname:string,public username:string,public pass:string ){}
  }


