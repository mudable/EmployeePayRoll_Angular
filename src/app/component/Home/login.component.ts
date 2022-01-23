import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { EmployeeFormService } from 'src/app/Service/employee-form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {
  
empdata={
  emailId:'',
  password:'',
  name:'',
  notes:'',
  profile:'',
  gender:'',
  department:'',
  salary:'',
  date:'',
}

  employee: any = {};
  minDate: Date;
  maxDate: Date;

  constructor(private empservice:EmployeeFormService,private router:Router) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); 
  }


  ngOnInit(): void {
  }

  // loginForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$')]),
  //   notes: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   profile: new FormControl('', [Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  //   department: new FormControl('', [Validators.required]),
  //   salary: new FormControl('', [Validators.required]),
  //   date: new FormControl('', [Validators.required]),
  //   password:new FormControl('', [Validators.required]),
  //   emailId:new FormControl('', [Validators.required]),

  // })

  
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
  onSubmit(){
    if((this.empdata.emailId!='' && this.empdata.password!='') && (this.empdata.emailId!=null && this.empdata.password!= null)){
      console.log("We have to submit the form to server");
      console.log(this.empdata)
      // to generate token 
      var token= this.empservice.addUser(this.empdata).subscribe(
      
        (response:any)=>{
          console.log(response)
          this.empservice.createUser(response.empdata)
          // window.location.href="/dashboard"
          this.router.navigate(["/dashboard"])
        },
        errors=>{
        console.log(errors);

        }
      )
      //localStorage.setItem("token",JSON.stringify(token))
     
      }
    }
  

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
