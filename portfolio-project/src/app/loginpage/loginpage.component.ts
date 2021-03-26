import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  msg:string= "";
  loginRef=new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  retrieveFromSession(){
    let stringfied:any = sessionStorage.getItem("userInfo");
    let data:any = JSON.parse(stringfied);
    for(let i = 0; i<data.length; i++){
      this.getData(data[i]);
  }
  }
     getData(data:any){
       var username1 = data.username;
       var pass1 = data.pass;     
       let user = this.loginRef.get("user")?.value;  // get specific control value. 
       let pass = this.loginRef.get("pass")?.value;
       if(username1 == user && pass1 == pass){
         this.router.navigate(["home"]);
        }
        else{
          alert("username or password is incorrect")
          this.router.navigate(["loginpage"]);
        } 
      }
      home(){ 
        this.retrieveFromSession();
      }
  signIn(){
    this.router.navigate(["signup"]);

  }
}

