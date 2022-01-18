import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent} from "./component/dash-board/dash-board.component"
import {LoginComponent} from "./component/login/login.component"


const routes: Routes = [{path:'', component:DashBoardComponent},
{path:'dashboard', component : DashBoardComponent},
{path:'login', component : LoginComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
