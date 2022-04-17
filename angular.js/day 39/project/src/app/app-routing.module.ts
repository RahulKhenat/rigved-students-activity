import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SuccessComponent} from './success/success.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path : "login", component: LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"success/name",component:SuccessComponent,children:[
    {path:"",component:DashboredCompnent},
    {path:"dashbored",component:DashboredCompnent},
    {path:"search",component:SearchCompnent},
    {path:"list",component:ListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
