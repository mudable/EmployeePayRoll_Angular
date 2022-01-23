import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string = environment.api_url;
  constructor(private httpClient: HttpClient ) { }
 
  loginUser(data: any){
  console.log("login")
 return this.httpClient.post("http://localhost:8080/employeePayrollservice/login",data);
} 

 login(token:string) {
   localStorage.setItem("token",JSON.stringify(token))
 } 
  
}




