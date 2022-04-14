import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';

let route: Routes=[
  {path:"",component : UserStoreComponent},
  {path:"store",component: UserStoreComponent},
  {path:"usersList",component: UserlistComponent},
  {path:"delete",component: UserDeleteComponent},
  {path:"update",component: UserUpdateComponent},
  {path:"success/:na",component:RegisterSuccessComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserStoreComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
