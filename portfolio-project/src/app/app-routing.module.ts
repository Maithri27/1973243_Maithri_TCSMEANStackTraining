import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"\loginpage",component:LoginpageComponent},
  {path:"\signup", component:SignupComponent},
  {path:"\home",component:HomepageComponent},
  {path:"",redirectTo: "\loginpage", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
