import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login = new Login();
  isSubmitted=false;
  logins:Observable<Login[]>;


  constructor(private service: AuthService, private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  get formControls()
  {
    return this.loginForm.controls;
  }
  loginUser()
{
  console.log(this.loginForm.value);

this.isSubmitted=true;
if(this.loginForm.invalid)
{
  this.toastr.error('enter username and password');
  return;
}

}
}
