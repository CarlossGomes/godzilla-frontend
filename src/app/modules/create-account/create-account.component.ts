import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form!: FormGroup;

  emailUnavailable: boolean = false;

  createSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  createAccount() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.userService.create(this.form.value).subscribe(
        success => {
          this.createSuccess = true;
          setTimeout(() => {
            this.router.navigate(["login"]);
          }, 1200)
        },
        error => {
          this.emailUnavailable = error.error.includes('Já existe usuário com email:');
        }
      )
    }
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

}
