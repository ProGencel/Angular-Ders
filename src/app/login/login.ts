import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6)]],
      });
  }

  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
    }
  }

}
