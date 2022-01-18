import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {
  employee: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[a-zA-Z\\s]{2,}$')]),
    notes: new FormControl('', [Validators.required, Validators.minLength(5)]),
    profile: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  })
  
  onsubmit() {
    var userData: any
    userData = localStorage.getItem('empdata');
    if (userData == null) {
      userData = []
      userData.push(JSON.stringify(this.loginForm.value))
    }
    else {
      
      JSON.parse(userData)
      console.log(userData)
      userData.push(JSON.stringify(this.loginForm.value))
    }
    localStorage.setItem('empdata', userData)
  }
  

  get name() {
    return this.loginForm.get('name');
  }
  get notes() {
    return this.loginForm.get('notes');
  }
  get profile() {
    return this.loginForm.get('profile');
  }
  get gender() {
    return this.loginForm.get('gender')?.value;
  }
  get department() {
    return this.loginForm.get('department');
  }
  
  get salary() {
    return this.loginForm.get('salary');
  }
  get date() {
    return this.loginForm.get('date');
  }
  Department : Array<any> = [
    {
      id: 1,
      name : "HR",
      value : "HR",
      checked : false
    },
    {
      id : 2,
      name : "Sales",
      value: "Sales",
      checked : false
    },
    {
      id: 3,
      name: "Finance",
      value: "Finance",
      checked : false
    }
    
  ]
 onchangeDepartment($event : any){
    const id = $event.target.value;
    const ischecked = $event.target.checked;

    this.Department = this.Department.map((d) => {
      if(d.id == id){
        d.checked = ischecked;
        return d;
      }
      return d;
    });
    console.log(id,ischecked)
  }


}
