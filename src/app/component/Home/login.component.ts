import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Empdto } from 'src/app/Service/empdto';
import { EmployeeFormService } from 'src/app/Service/employee-form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {
  employeeobject : Empdto=new Empdto
    employee: any = {};
  minDate: Date;
  maxDate: Date;
  loginForm!:FormGroup
  allEmployeeData: any;

  constructor(private empservice:EmployeeFormService,private router:Router,private formBuilder:FormBuilder) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); 
  }
 ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      name: [''],
      note: [''],
      profilePic:[''] ,
    gender:[''],
    department:[''],
    salary: [''],
    date: [''],
    password:[''],
    emailId:['']
    
    })
  }

  //To store employeeData in Data base.
  addUser(){
    this.employeeobject.name=this.loginForm.value.name;
    this.employeeobject.note=this.loginForm.value.note;
    this.employeeobject.profilePic=this.loginForm.value.profilePic;
    this.employeeobject.gender=this.loginForm.value.gender;
    this.employeeobject.department=this.loginForm.value.department;
    this.employeeobject.salary=this.loginForm.value.salary;
    this.employeeobject.date=this.loginForm.value.date;
    this.employeeobject.password=this.loginForm.value.password;
    this.employeeobject.emailId=this.loginForm.value.emailId;

    this.empservice.addUser(this.employeeobject).subscribe(res=>{
      console.log(res);
      alert("employee data added successfully.");
      this.loginForm.reset();
    },
    err=>{
      alert("some thing went wrong.")
    })
  }


 
  
  // onsubmit() {
  //   var obj = JSON.stringify(this.loginForm.value);

  //     var array : any;
  //     let obj1 = localStorage.getItem('empdata');
  //     if(obj1 != null){
  //       array = JSON.parse(obj1)
  //     }
  //     else{
  //       array = [];
  //     }
  //     array.push(obj);
  //     localStorage.setItem('empdata',JSON.stringify(array))
  //   }
  // 

  // get name() {
  //   return this.loginForm.get('name');
  // }
  // get notes() {
  //   return this.loginForm.get('notes');
  // }
  // get profile() {
  //   return this.loginForm.get('profile');
  // }
  // get gender() {
  //   return this.loginForm.get('gender')?.value;
  // }
  // get department() {
  //   return this.loginForm.get('department');
  // }
  
  // get salary() {
  //   return this.loginForm.get('salary');
  // }
  // get date() {
  //   return this.loginForm.get('date');
  // }
  departmentList: Array<any> = [
    {
      name: "HR",
      value: "HR"
    },
    {
      name: "Sales",
      value: "Sales"
    },
    {
      name: "Finance",
      value: "Finance"
    },
    {
      name: "Engineer",
      value: "Engineer"
    },
    {
      name: "Other",
      value: "Other"
    },
  ]

}
