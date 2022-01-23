import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {}
  dashBoard(data: any){
    console.log("login")
   return this.httpClient.get("http://localhost:8080/employeePayrollservice/getallcontact",data);
  } 
  
}
