import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/Home/login.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import{ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule  } from '@angular/material/datepicker';
import{MatInputModule}from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserComponent } from './component/login-user/login-user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { UpdateEmployeeDataComponent } from './component/update-employee-data/update-employee-data.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    HeaderComponent,
    LoginUserComponent,
   UpdateEmployeeDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule,MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
