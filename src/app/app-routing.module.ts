import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent} from "./component/dash-board/dash-board.component"
import {LoginComponent} from "./component/Home/login.component"
import{LoginUserComponent} from "./component/login-user/login-user.component"
import { UpdateEmployeeDataComponent } from './component/update-employee-data/update-employee-data.component';

const routes: Routes = [{path:'', component:DashBoardComponent},
{path:'dashboard', component : DashBoardComponent},
{path:'login', component : LoginComponent},
{path:'loginUser',component:LoginUserComponent},
{ path: 'update/:id', component: UpdateEmployeeDataComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
