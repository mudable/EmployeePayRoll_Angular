import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empdto } from 'src/app/Service/empdto';
import { EmployeeFormService } from 'src/app/Service/employee-form.service';

@Component({
  selector: 'app-update-employee-data',
  templateUrl: './update-employee-data.component.html',
  styleUrls: ['./update-employee-data.component.scss']
})
export class UpdateEmployeeDataComponent implements OnInit {
  loginForm!:FormGroup
  employeedata : Empdto = new Empdto;
  employeeId!:number;
  formBuilder: any;
  
  constructor(private service: EmployeeFormService, private route : ActivatedRoute, private router:Router) { 
    
  }

  ngOnInit(): void {
   
    this.employeeId = this.route.snapshot.params['employeeId']
    this.service.getPersonById(this.employeeId).subscribe(
      data=>{ this.employeedata = data},
      error=>{ console.log(error)}
    )
  }

  onSubmit(){
    this.service.updateEmployee(this.employeeId, this.employeedata).subscribe( 
      data=>{ this.goToDashboard()},
      error=>{ console.log(error)}
    );
  }

  goToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
