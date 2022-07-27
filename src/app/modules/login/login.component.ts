import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  login(){
    this.form.markAllAsTouched();
    if(this.form.valid){

    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required]]
    })
  }

  goToCreateNewAccount() {
    this.router.navigate(["create-account"]);
  }

  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }

}
