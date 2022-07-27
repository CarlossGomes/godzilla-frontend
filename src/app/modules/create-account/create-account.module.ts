import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule,
    DividerModule
  ]

})
export class CreateAccountModule { }
