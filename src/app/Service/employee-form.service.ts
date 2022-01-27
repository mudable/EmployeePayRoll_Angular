import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdateEmployeeDataComponent } from '../component/update-employee-data/update-employee-data.component';
import { Empdto } from './empdto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFormService {
  updateEmployeeData(id: number, employeedata: Empdto) {
    throw new Error('Method not implemented.');
  }
  baseUrl: string = environment.api_url;


constructor(private httpClient: HttpClient ) { }
 
addUser(empdata:any){
  //create employee data using post.
 return this.httpClient.post<any>("http://localhost:8080/employeePayrollservice/create",empdata).pipe(map((res:any)=>{
   return res;
 }))
} 

//getEmployee data
 token=localStorage.getItem('token')
getUser(){
  const httpHeaders=new HttpHeaders({
    'content-type': "application/json",
    'Authorization':"this.token"
  });
  return this.httpClient.get<any>("http://localhost:8080/employeePayrollservice/getallcontact",{headers:httpHeaders}).pipe(map((res:any)=>{
   return res;
 }))
}

//To update the employee data.
updateEmployee(employeeId:number, empdto: Empdto):Observable<Empdto>{
  return this.httpClient.put<Empdto>(`${this.baseUrl}/update/${employeeId}`, empdto);
}
deleteEmployee(id:number){
  return this.httpClient.delete<any>("http://localhost:8080/employeePayrollservice/delete/"+id)
}
getPersonById(employeeId:number):Observable<Empdto>{
  return this.httpClient.get<Empdto>(`${this.baseUrl}/get/${employeeId}`);
}

}