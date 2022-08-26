import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemServicoRoutingModule } from './ordem-servico-routing.module';
import { CadastrarOrdemServicoComponent } from './cadastrar/cadastrar-ordem-servico.component';
import { ConsultarOrdemServicoComponent } from './consultar/consultar-ordem-servico.component';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    CadastrarOrdemServicoComponent,
    ConsultarOrdemServicoComponent
  ],
  imports: [
    CommonModule,
    OrdemServicoRoutingModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers:[
    DialogService,
    ConfirmationService 
  ]
})
export class OrdemServicoModule { }
