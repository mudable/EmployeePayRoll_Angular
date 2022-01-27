import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empdto } from 'src/app/Service/empdto';
import { EmployeeFormService } from 'src/app/Service/employee-form.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  employeeobject : Empdto=new Empdto
  allEmployeeData: any;
  formValue: any;

 constructor(private router: Router, private empservice: EmployeeFormService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  //get all data.
  getAllData() {
    this.empservice.getUser().subscribe(res => {
      this.allEmployeeData = res;
    })
  }

  //delete records.
  deleteRecord(id:number){
    this.empservice.deleteEmployee(id).subscribe(res=>{
      alert("Employee Data deleted successFully")
      this.getAllData(); //quick refesh data.
    })
  }
  
  // onEditEmployeeData(employee:any){
  //   this.formValue.controls['employeeId'].setValue(employee.employeeId);
  //   this.formValue.controls['name'].setValue(employee.name);
  //   this.formValue.controls['password'].setValue(employee.password);
  //   this.formValue.controls['note'].setValue(employee.note);
  //   this.formValue.controls['profilePic'].setValue(employee.profilePic);
  //   this.formValue.controls['gender'].setValue(employee.gender);
  //   this.formValue.controls['salary'].setValue(employee.salary);
  //   this.formValue.controls['emailId'].setValue(employee.emailId);

  // }
}

