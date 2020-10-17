import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required, 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
  });
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted=true;

    if (this.loginForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

}

