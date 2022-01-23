import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
 
data ={ emailId:'',
password:''

}
  constructor(private empservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {

  }
   formGroup  = new FormGroup({
      emailId:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
  
  })
  onSubmit(){
    if((this.data.emailId!='' && this.data.password!='') && (this.data.emailId!=null && this.data.password!= null)){
      console.log("We have to submit the form to server");
      // to generate token 
     var token= this.empservice.loginUser(this.data).subscribe(
      
        (response:any)=>{
          console.log(response)
          this.empservice.login(response.data)
          //window.location.href="/dashboard"
          this.router.navigate(["/dashboard"])

        },
        errors=>{
        console.log(errors);

        }
      )
     // localStorage.setItem("token",JSON.stringify(token))
     
      }
    }
  }
      
    
