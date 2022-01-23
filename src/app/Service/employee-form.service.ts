import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService {
  baseUrl: string = environment.api_url;
  constructor(private httpClient: HttpClient ) { }
 
addUser(empdata: any){
  console.log("login")
 return this.httpClient.post("http://localhost:8080/employeePayrollservice/create",empdata);
} 
createUser(token:string) {
  localStorage.setItem("token",JSON.stringify(token))
} 
}